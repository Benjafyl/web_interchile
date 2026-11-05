import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { join } from "node:path";
const require = createRequire(import.meta.url);
const { validateContact, escapeHtml } = require(
  join(process.env.INTERCHILE_TEST_BUILD, "lib/contact-validation.js"),
);
const {
  allowedOrigin,
  readContactBody,
  MAX_CONTACT_BYTES,
  validRecaptchaResult,
  consumeContactLimit,
} = require(join(process.env.INTERCHILE_TEST_BUILD, "lib/contact-security.js"));
const sample = {
  name: "Cliente",
  email: "cliente@example.invalid",
  phone: "",
  company: "",
  location: "",
  clientType: "Industria",
  service: "Mantención",
  message: "Necesitamos evaluar la mantención de la instalación.",
};

test("accepts a business inquiry without forcing optional phone/company/location", () => {
  assert.deepEqual(validateContact(sample).errors, {});
});
test("rejects arrays, structured fields, honeypot spam and oversized fields", () => {
  for (const bad of [
    null,
    [],
    { ...sample, name: { value: "Cliente" } },
    { ...sample, website: "https://spam.invalid" },
    { ...sample, company: "a".repeat(161) },
    { ...sample, message: "a".repeat(2501) },
  ])
    assert.ok(Object.keys(validateContact(bad).errors).length);
});
test("rejects header injection, malformed email and unapproved services", () => {
  assert.ok(
    validateContact({
      ...sample,
      name: "Cliente\r\nBcc: other@example.invalid",
    }).errors.name,
  );
  assert.ok(
    validateContact({
      ...sample,
      email: "user@example.invalid,other@example.invalid",
    }).errors.email,
  );
  assert.ok(
    validateContact({ ...sample, service: "<script>malicious</script>" }).errors
      .service,
  );
  assert.equal(
    escapeHtml('<img src=x onerror="alert(1)">'),
    "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;",
  );
});
test("accepts only canonical same-site origins, not spoofed suffixes or missing origins", () => {
  for (const origin of [
    "https://interchileclima.cl",
    "https://www.interchileclima.cl",
  ])
    assert.equal(
      allowedOrigin(
        new Request("https://interchileclima.cl/api/contact", {
          headers: { origin },
        }),
        "https://interchileclima.cl",
      ),
      true,
    );
  for (const origin of [
    "https://interchileclima.cl.evil.invalid",
    "null",
    "http://interchileclima.cl",
    "",
  ])
    assert.equal(
      allowedOrigin(
        new Request("https://interchileclima.cl/api/contact", {
          headers: { origin },
        }),
        "https://interchileclima.cl",
      ),
      false,
    );
});
test("bounds streamed payload size even without Content-Length and rejects broken JSON", async () => {
  const valid = new Request("https://interchileclima.cl/api/contact", {
    method: "POST",
    body: JSON.stringify(sample),
  });
  assert.equal((await readContactBody(valid)).service, "Mantención");
  await assert.rejects(
    () =>
      readContactBody(
        new Request(valid.url, {
          method: "POST",
          body: "x".repeat(MAX_CONTACT_BYTES + 1),
        }),
      ),
    RangeError,
  );
  await assert.rejects(
    () =>
      readContactBody(new Request(valid.url, { method: "POST", body: "{" })),
    SyntaxError,
  );
});
test("CAPTCHA requires correct action, hostname, score and a fresh timestamp", () => {
  const now = Date.parse("2026-11-05T15:00:00Z");
  const result = {
    success: true,
    action: "contact",
    hostname: "interchileclima.cl",
    score: 0.9,
    challenge_ts: new Date(now).toISOString(),
  };
  assert.equal(
    validRecaptchaResult(result, "interchileclima.cl", 0.5, now),
    true,
  );
  for (const invalid of [
    null,
    {},
    { ...result, action: "login" },
    { ...result, action: undefined },
    { ...result, hostname: "attacker.invalid" },
    { ...result, score: 0.1 },
    { ...result, score: 5 },
    { ...result, challenge_ts: new Date(now - 121000).toISOString() },
    { ...result, challenge_ts: "bad" },
  ])
    assert.equal(
      validRecaptchaResult(invalid, "interchileclima.cl", 0.5, now),
      false,
    );
});
test("limits repeated attempts and expires the limit", () => {
  const now = 1_800_000_000_000;
  const request = new Request("https://interchileclima.cl/api/contact", {
    headers: { "x-forwarded-for": "192.0.2.4" },
  });
  for (let i = 0; i < 5; i++)
    assert.equal(consumeContactLimit(request, now), 0);
  assert.equal(consumeContactLimit(request, now), 900);
  assert.equal(consumeContactLimit(request, now + 900001), 0);
});
