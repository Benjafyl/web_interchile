"use client";
import Script from "next/script";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { measurement, serviceMeasurementNames } from "@/data/measurement";
import {
  flushAnalyticsEvents,
  getConsentChoice,
  safePageLocation,
  safePagePath,
  setConsentChoice,
  subscribeConsent,
  trackEvent,
} from "@/lib/analytics";

export function Analytics() {
  const pathname = usePathname();
  const consent = useSyncExternalStore(
    subscribeConsent,
    getConsentChoice,
    () => "pending",
  );
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const lastPage = useRef("");
  const validId = /^G-[A-Z0-9]+$/.test(measurement.id);

  useEffect(() => {
    const open = () => setPreferencesOpen(true);
    window.addEventListener("interchile:manage-consent", open);
    return () => window.removeEventListener("interchile:manage-consent", open);
  }, []);

  useEffect(() => {
    if (!validId) return;
    const granted = consent === "granted";
    (window as unknown as Record<string, unknown>)[
      `ga-disable-${measurement.id}`
    ] = !granted;
    window.interChileAnalyticsEnabled = granted;
    if (window.interChileAnalyticsReady)
      window.gtag?.("consent", "update", {
        analytics_storage: granted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    if (!granted) {
      lastPage.current = "";
      flushAnalyticsEvents();
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.trim().split("=")[0];
        if (!/^_ga(?:_|$)/.test(name)) continue;
        for (const domain of [
          "",
          `; domain=${window.location.hostname}`,
          "; domain=.interchileclima.cl",
        ])
          document.cookie = `${name}=; max-age=0; path=/${domain}; SameSite=Lax`;
      }
    }
  }, [consent, validId]);

  useEffect(() => {
    if (
      !validId ||
      consent !== "granted" ||
      !ready ||
      lastPage.current === pathname
    )
      return;
    lastPage.current = pathname;
    const pagePath = safePagePath(pathname);
    let referrer = "";
    try {
      if (document.referrer) referrer = new URL(document.referrer).origin + "/";
    } catch {
      /* Ignore invalid referrers. */
    }
    window.gtag?.("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
      page_location: safePageLocation(window.location.href),
      page_referrer: referrer,
    });
    if (pagePath.startsWith("/servicios/"))
      trackEvent("service_view", {
        service: serviceMeasurementNames[pagePath.slice(11)],
      });
    if (pagePath === "/arriendo-equipos")
      trackEvent("service_view", { service: "Arriendo de equipos" });
    if (pagePath.startsWith("/proyectos"))
      trackEvent("project_view", {
        project: pagePath === "/proyectos" ? "portfolio" : "temuco-2026",
      });
    flushAnalyticsEvents();
  }, [pathname, consent, ready, validId]);

  useEffect(() => {
    let scrolled = false;
    const click = (event: MouseEvent) => {
      const link =
        event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const href = new URL(link.href, window.location.origin);
      const location = link.closest("header")
        ? "header"
        : link.closest("footer")
          ? "footer"
          : link.closest(".home-hero")
            ? "hero"
            : link.classList.contains("whatsapp-float") ||
                link.classList.contains("whatsapp-button")
              ? "floating"
              : "body";
      const method = ["wa.me", "api.whatsapp.com"].includes(href.hostname)
        ? "whatsapp"
        : href.protocol === "mailto:"
          ? "email"
          : href.protocol === "tel:"
            ? "phone"
            : null;
      if (method)
        trackEvent("contact_click", {
          contact_method: method,
          link_location: location,
        });
      if (
        href.origin === window.location.origin &&
        href.pathname === "/contacto"
      )
        trackEvent("quote_click", {
          link_location: location,
          service: href.searchParams.get("servicio"),
        });
    };
    const scroll = () => {
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      if (!scrolled && distance > 0 && window.scrollY >= distance * 0.9) {
        scrolled = true;
        trackEvent("scroll", { percent_scrolled: 90 });
      }
    };
    const play = (event: Event) => {
      if (event.target instanceof HTMLVideoElement)
        trackEvent("video_start", { video_name: "temuco-2026" });
    };
    document.addEventListener("click", click);
    document.addEventListener("play", play, true);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      document.removeEventListener("click", click);
      document.removeEventListener("play", play, true);
      window.removeEventListener("scroll", scroll);
    };
  }, [pathname]);

  function initialize() {
    if (!window.interChileAnalyticsReady && getConsentChoice() === "granted") {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // Preserve the official Google tag command format (Arguments, not an array).
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag("consent", "default", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.gtag("js", new Date());
      window.gtag("config", measurement.id, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: safePageLocation(window.location.href),
        debug_mode:
          window.location.hostname !== "interchileclima.cl" ||
          new URLSearchParams(window.location.search).get("debug_mode") === "1",
      });
      window.interChileAnalyticsReady = true;
      window.interChileAnalyticsEnabled = true;
    }
    setReady(true);
  }
  function choose(choice: "granted" | "denied") {
    setConsentChoice(choice);
    setPreferencesOpen(false);
  }
  if (!validId) return null;
  return (
    <>
      {consent === "granted" && (
        <Script
          id="interchile-ga"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurement.id}`}
          strategy="afterInteractive"
          onReady={initialize}
        />
      )}
      {(consent === "pending" || preferencesOpen) && (
        <section
          className="privacy-banner"
          aria-label="Preferencias de privacidad"
        >
          <div>
            <p>
              <strong>¿Nos ayudas a mejorar el sitio?</strong>
            </p>
            <p>
              Con tu permiso usamos Google Analytics para medir visitas y
              solicitudes. La medición es opcional y puedes cambiar tu elección
              en el pie de página.{" "}
              <Link href="/privacidad">Ver privacidad</Link>.
            </p>
          </div>
          <div className="privacy-actions">
            <button type="button" onClick={() => choose("granted")}>
              Aceptar medición
            </button>
            <button type="button" onClick={() => choose("denied")}>
              Rechazar
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export function PrivacyControls() {
  return (
    <div className="footer-privacy">
      <Link href="/privacidad">Privacidad</Link>
      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(new Event("interchile:manage-consent"))
        }
      >
        Preferencias de medición
      </button>
    </div>
  );
}
