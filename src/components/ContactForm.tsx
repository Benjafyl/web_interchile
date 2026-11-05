"use client";
import { type FormEvent, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Send } from "lucide-react";
import { clientTypes, serviceTypes } from "@/data/contact-options";
import {
  validateContact,
  type ContactData,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact-validation";
import { trackEvent } from "@/lib/analytics";
import { getWhatsAppUrl } from "@/lib/utils";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}
type FormState = ContactData & { website: string };
const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  clientType: "Empresa",
  service: "",
  location: "",
  message: "",
  website: "",
};
const inputClass =
  "min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#a6083c] focus:ring-4 focus:ring-rose-100";

export function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    service: initialService,
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [config, setConfig] = useState<{
    recaptchaSiteKey: string;
    formReady: boolean;
  } | null>(null);
  const [captchaReady, setCaptchaReady] = useState(false);
  const [configurationError, setConfigurationError] = useState(false);
  const started = useRef(false);
  const errorMessage = useRef<HTMLParagraphElement>(null);
  const successMessage = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/contact", {
      signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10000)]),
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then((value: { recaptchaSiteKey?: string; formReady?: boolean }) => {
        setConfig({
          recaptchaSiteKey: value.recaptchaSiteKey || "",
          formReady: value.formReady === true,
        });
        if (!value.formReady) setConfigurationError(true);
      })
      .catch(() => {
        if (!controller.signal.aborted) setConfigurationError(true);
      });
    return () => controller.abort();
  }, []);
  useEffect(() => {
    if (error) errorMessage.current?.focus();
  }, [error]);
  useEffect(() => {
    if (sent) successMessage.current?.focus();
  }, [sent]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setError("");
    setSent(false);
  }
  function begin() {
    if (!started.current) {
      trackEvent("form_start", { service: form.service });
      started.current = true;
    }
  }
  function errorFor(field: ContactField) {
    return errors[field] ? (
      <span id={`contact-${field}-error`} className="field-error">
        {errors[field]}
      </span>
    ) : null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const result = validateContact(form);
    setErrors(result.errors);
    if (Object.keys(result.errors).length) {
      trackEvent("form_error", {
        error_type: "validation",
        service: form.service,
      });
      const first = Object.keys(result.errors)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    if (!config?.formReady || !captchaReady)
      return setError(
        "No pudimos preparar el envío. Inténtalo nuevamente o escríbenos por WhatsApp.",
      );
    setSubmitting(true);
    setError("");
    setSent(false);
    try {
      const recaptchaToken = await getRecaptchaToken(config.recaptchaSiteKey);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          website: form.website,
          recaptchaToken,
        }),
        signal: AbortSignal.timeout(45000),
      });
      const body = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        errors?: ContactErrors;
      } | null;
      if (!response.ok || body?.ok !== true) {
        trackEvent("form_error", {
          error_type: response.status === 400 ? "verification" : "server",
          service: form.service,
        });
        if (body?.errors) setErrors(body.errors);
        return setError(
          body?.error ||
            "No pudimos enviar tu solicitud. Inténtalo nuevamente.",
        );
      }
      // A lead is recorded only after the server confirms successful delivery to SMTP.
      trackEvent("generate_lead", {
        service: result.data.service,
        client_type: result.data.clientType,
      });
      setSent(true);
      setForm({ ...emptyForm, service: initialService });
      started.current = false;
    } catch {
      trackEvent("form_error", {
        error_type: "network",
        service: form.service,
      });
      setError(
        "No pudimos enviar tu solicitud. Tus datos siguen aquí para que puedas reintentar o contactarnos por WhatsApp.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {config?.recaptchaSiteKey && (
        <Script
          id="contact-recaptcha"
          src={`https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(config.recaptchaSiteKey)}`}
          strategy="afterInteractive"
          onReady={() => setCaptchaReady(true)}
          onError={() => setConfigurationError(true)}
        />
      )}
      <form
        id="contact-form"
        name="contact"
        className="contact-form"
        aria-busy={submitting}
        noValidate
        onSubmit={handleSubmit}
        onFocusCapture={begin}
      >
        <div className="form-trap" aria-hidden="true">
          <label>
            Deja este campo vacío
            <input
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.website}
              onChange={(event) => updateField("website", event.target.value)}
            />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {(
            [
              {
                field: "name",
                label: "Nombre",
                required: true,
                type: "text",
                autocomplete: "name",
                max: 120,
              },
              {
                field: "company",
                label: "Empresa",
                required: false,
                type: "text",
                autocomplete: "organization",
                max: 160,
              },
              {
                field: "email",
                label: "Correo electrónico",
                required: true,
                type: "email",
                autocomplete: "email",
                max: 254,
              },
              {
                field: "phone",
                label: "Teléfono",
                required: false,
                type: "tel",
                autocomplete: "tel",
                max: 40,
              },
            ] as const
          ).map((item) => (
            <label
              className="form-label"
              key={item.field}
              htmlFor={`contact-${item.field}`}
            >
              <span>
                {item.label}{" "}
                <small>{item.required ? "(obligatorio)" : "(opcional)"}</small>
              </span>
              <input
                id={`contact-${item.field}`}
                className={inputClass}
                name={item.field}
                type={item.type}
                autoComplete={item.autocomplete}
                maxLength={item.max}
                required={item.required}
                aria-invalid={Boolean(errors[item.field])}
                aria-describedby={
                  errors[item.field] ? `contact-${item.field}-error` : undefined
                }
                value={form[item.field]}
                onChange={(event) =>
                  updateField(item.field, event.target.value)
                }
              />
              {errorFor(item.field)}
            </label>
          ))}
          <label className="form-label" htmlFor="contact-clientType">
            <span>Tipo de cliente</span>
            <select
              id="contact-clientType"
              name="clientType"
              className={inputClass}
              value={form.clientType}
              onChange={(event) =>
                updateField("clientType", event.target.value)
              }
            >
              {clientTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            {errorFor("clientType")}
          </label>
          <label className="form-label" htmlFor="contact-service">
            <span>
              Servicio requerido <small>(obligatorio)</small>
            </span>
            <select
              id="contact-service"
              className={inputClass}
              name="service"
              required
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "contact-service-error" : undefined
              }
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
            >
              <option value="">Selecciona una opción</option>
              {serviceTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            {errorFor("service")}
          </label>
        </div>
        <label className="form-label mt-5" htmlFor="contact-location">
          <span>
            Comuna o ciudad <small>(opcional)</small>
          </span>
          <input
            id="contact-location"
            className={inputClass}
            name="location"
            autoComplete="address-level2"
            maxLength={160}
            value={form.location}
            onChange={(event) => updateField("location", event.target.value)}
          />
          {errorFor("location")}
        </label>
        <label className="form-label mt-5" htmlFor="contact-message">
          <span>
            ¿Qué necesitas resolver? <small>(obligatorio)</small>
          </span>
          <textarea
            id="contact-message"
            className={inputClass + " min-h-36 py-3"}
            name="message"
            required
            maxLength={2500}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-help"
            }
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
          <span id="contact-message-help" className="field-help">
            Cuéntanos el tipo de instalación, los equipos y las fechas
            previstas. Puedes enviar fotografías después por WhatsApp.
          </span>
          {errorFor("message")}
        </label>
        <p className="form-privacy-note">
          Usaremos estos datos para responder tu solicitud. Consulta nuestra{" "}
          <a href="/privacidad">política de privacidad</a>. Este formulario está
          protegido por reCAPTCHA y se aplican la{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacidad
          </a>{" "}
          y los{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer"
          >
            Términos de Google
          </a>
          .
        </p>
        {configurationError && (
          <p className="form-feedback">
            El formulario no está disponible en este momento.{" "}
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Envíanos tu requerimiento por WhatsApp
            </a>
            .
          </p>
        )}
        {error && (
          <p
            ref={errorMessage}
            role="alert"
            tabIndex={-1}
            className="form-feedback form-feedback-error"
          >
            {error}
          </p>
        )}
        {sent && (
          <p
            ref={successMessage}
            role="status"
            tabIndex={-1}
            className="form-feedback form-feedback-success"
          >
            Gracias. Tu solicitud fue enviada al equipo de Interchile Clima. Te
            contactaremos para revisar el requerimiento.
          </p>
        )}
        <button
          className="button button-primary form-submit"
          type="submit"
          disabled={
            submitting ||
            configurationError ||
            !config?.formReady ||
            !captchaReady
          }
        >
          {submitting ? "Enviando solicitud…" : "Solicitar evaluación"}
          <Send aria-hidden="true" />
        </button>
      </form>
    </>
  );
}

async function getRecaptchaToken(siteKey: string) {
  return new Promise<string>((resolve, reject) => {
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return reject(new Error("verification_unavailable"));
    const timer = setTimeout(
      () => reject(new Error("verification_timeout")),
      10000,
    );
    grecaptcha.ready(() => {
      try {
        grecaptcha.execute(siteKey, { action: "contact" }).then(
          (token) => {
            clearTimeout(timer);
            resolve(token);
          },
          (error) => {
            clearTimeout(timer);
            reject(error);
          },
        );
      } catch (error) {
        clearTimeout(timer);
        reject(error);
      }
    });
  });
}
