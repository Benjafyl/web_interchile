import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { join } from "node:path";
const require = createRequire(import.meta.url);
const {
  safePagePath,
  safePageLocation,
  safeAnalyticsParameters,
  trackEvent,
  setConsentChoice,
  flushAnalyticsEvents,
} = require(join(process.env.INTERCHILE_TEST_BUILD, "lib/analytics.js"));

test("removes contact data, arbitrary query strings and unknown URL paths from analytics", () => {
  assert.equal(
    safePageLocation(
      "https://interchileclima.cl/contacto?email=persona%40example.invalid&phone=56999999999&servicio=Mantenci%C3%B3n&utm_source=google&utm_campaign=mantencion-industrial",
    ),
    "https://interchileclima.cl/contacto?utm_source=google&utm_campaign=mantencion-industrial",
  );
  assert.equal(
    safePageLocation(
      "https://interchileclima.cl/contacto?utm_campaign=persona%40example.invalid&utm_source=56999999999",
    ),
    "https://interchileclima.cl/contacto",
  );
  assert.equal(safePagePath("/servicios/constructor"), "/404");
  assert.equal(safePagePath("/persona@example.invalid"), "/404");
  assert.equal(
    safePagePath("/servicios/mantencion-hvac"),
    "/servicios/mantencion-hvac",
  );
});
test("allows only categorical parameters; never names, emails, phones or messages", () => {
  assert.deepEqual(
    safeAnalyticsParameters({
      name: "Cliente",
      email: "persona@example.invalid",
      phone: "56999999999",
      message: "Información privada",
      service: "Mantención",
      client_type: "Industria",
      contact_method: "whatsapp",
      link_location: "hero",
    }),
    {
      service: "Mantención",
      client_type: "Industria",
      contact_method: "whatsapp",
      link_location: "hero",
    },
  );
  assert.deepEqual(
    safeAnalyticsParameters({
      service: "persona@example.invalid",
      error_type: "Private details",
      link_url: "mailto:persona@example.invalid",
    }),
    {},
  );
});
test("does not send conversion events before consent or after withdrawal", () => {
  const storage = new Map();
  const events = [];
  global.localStorage = {
    getItem: (key) => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value),
  };
  global.window = {
    location: { pathname: "/contacto" },
    dispatchEvent() {},
    interChileAnalyticsReady: true,
    interChileAnalyticsEnabled: true,
    gtag: (...args) => events.push(args),
  };
  trackEvent("generate_lead", {
    service: "Mantención",
    email: "private@example.invalid",
  });
  assert.equal(events.length, 0);
  setConsentChoice("granted");
  trackEvent("generate_lead", {
    service: "Mantención",
    email: "private@example.invalid",
  });
  assert.equal(events.length, 1);
  assert.deepEqual(events[0], [
    "event",
    "generate_lead",
    { service: "Mantención", page_path: "/contacto" },
  ]);
  setConsentChoice("denied");
  flushAnalyticsEvents();
  trackEvent("generate_lead", { service: "Mantención" });
  assert.equal(events.length, 1);
  delete global.window;
  delete global.localStorage;
});
