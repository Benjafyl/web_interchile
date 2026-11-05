import { clientTypes, serviceTypes } from "../data/contact-options";
import { serviceMeasurementNames } from "../data/measurement";

export type ConsentChoice = "granted" | "denied" | "pending";
export type AnalyticsEvent =
  | "service_view"
  | "project_view"
  | "quote_click"
  | "contact_click"
  | "form_start"
  | "form_error"
  | "generate_lead"
  | "scroll"
  | "video_start";
const consentKey = "interchile:analytics-consent:v1";
let memoryConsent: ConsentChoice = "pending";
const pendingEvents: {
  event: AnalyticsEvent;
  parameters: Record<string, string | number>;
}[] = [];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    interChileAnalyticsReady?: boolean;
    interChileAnalyticsEnabled?: boolean;
  }
}

export function getConsentChoice(): ConsentChoice {
  if (typeof window === "undefined") return "pending";
  try {
    const value = localStorage.getItem(consentKey);
    return value === "granted" || value === "denied" ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}
export function setConsentChoice(choice: "granted" | "denied") {
  memoryConsent = choice;
  try {
    localStorage.setItem(consentKey, choice);
  } catch {
    /* The choice remains effective in this tab. */
  }
  window.dispatchEvent(new Event("interchile:consent"));
}
export function subscribeConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("interchile:consent", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("interchile:consent", callback);
  };
}
export function safePagePath(pathname: string) {
  if (
    [
      "/",
      "/empresa",
      "/servicios",
      "/proyectos",
      "/arriendo-equipos",
      "/equipo",
      "/contacto",
      "/privacidad",
      "/proyectos/ampliacion-mall-portal-temuco-2026",
    ].includes(pathname)
  )
    return pathname;
  if (
    pathname.startsWith("/servicios/") &&
    Object.hasOwn(serviceMeasurementNames, pathname.slice(11))
  )
    return pathname;
  return "/404";
}
export function safePageLocation(href: string) {
  const source = new URL(href);
  const url = new URL(safePagePath(source.pathname), source.origin);
  for (const key of [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ]) {
    const value = source.searchParams.get(key);
    if (value && /^[a-z][a-z0-9_-]{0,79}$/i.test(value) && !/\d{7}/.test(value))
      url.searchParams.set(key, value);
  }
  return url.toString();
}
export function safeAnalyticsParameters(parameters: Record<string, unknown>) {
  const result: Record<string, string | number> = {};
  const choices: Record<string, readonly unknown[]> = {
    service: serviceTypes,
    client_type: clientTypes,
    contact_method: ["whatsapp", "email", "phone"],
    link_location: ["header", "footer", "hero", "body", "floating"],
    error_type: ["validation", "verification", "server", "network"],
    project: ["temuco-2026", "portfolio"],
    video_name: ["temuco-2026"],
    percent_scrolled: [90],
  };
  for (const [key, value] of Object.entries(parameters))
    if (choices[key]?.includes(value)) result[key] = value as string | number;
  return result;
}
export function trackEvent(
  event: AnalyticsEvent,
  parameters: Record<string, unknown> = {},
) {
  if (typeof window === "undefined" || getConsentChoice() !== "granted") return;
  const safe = {
    ...safeAnalyticsParameters(parameters),
    page_path: safePagePath(window.location.pathname),
  };
  if (!window.interChileAnalyticsReady) {
    if (pendingEvents.length < 20)
      pendingEvents.push({ event, parameters: safe });
    return;
  }
  if (window.interChileAnalyticsEnabled) window.gtag?.("event", event, safe);
}
export function flushAnalyticsEvents() {
  if (getConsentChoice() !== "granted" || !window.interChileAnalyticsEnabled) {
    pendingEvents.length = 0;
    return;
  }
  for (const item of pendingEvents.splice(0))
    window.gtag?.("event", item.event, item.parameters);
}
