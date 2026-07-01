"use client";

import { FormEvent, useEffect, useState } from "react";
import Script from "next/script";
import { Send } from "lucide-react";

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

const clientTypes = ["Empresa", "Comercio", "Industria", "Domicilio", "Otro"];
const serviceTypes = [
  "Proyecto de climatizacion",
  "Instalacion",
  "Mantencion",
  "Reparacion",
  "Repuestos",
  "Arriendo de equipos",
  "Otro",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  clientType: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  clientType: "Empresa",
  service: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [recaptchaSiteKey, setRecaptchaSiteKey] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch("/api/contact")
      .then((response) => response.json())
      .then((config: { recaptchaSiteKey?: string }) => {
        if (isMounted && config.recaptchaSiteKey) {
          setRecaptchaSiteKey(config.recaptchaSiteKey);
        }
      })
      .catch(() => undefined);

    return () => {
      isMounted = false;
    };
  }, []);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSent(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim()) return setError("Ingresa tu nombre.");
    if (!emailIsValid) return setError("Ingresa un correo electronico valido.");
    if (!form.phone.trim()) return setError("Ingresa tu telefono.");
    if (!form.service) return setError("Selecciona el servicio requerido.");
    if (!form.message.trim()) {
      return setError("Cuentanos brevemente que necesitas.");
    }

    setSubmitting(true);
    setError("");

    try {
      const recaptchaToken = await getRecaptchaToken(recaptchaSiteKey);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setSent(false);
        return setError(
          result?.error ??
            "No pudimos enviar tu solicitud. Intentalo nuevamente.",
        );
      }

      setSent(true);
      setForm(initialState);
    } catch {
      setSent(false);
      setError("No pudimos enviar tu solicitud. Intentalo nuevamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {recaptchaSiteKey ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
        />
      ) : null}

      <form
        aria-busy={submitting}
        className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        <input
          autoComplete="off"
          className="hidden"
          name="website"
          onChange={(event) => updateField("website", event.target.value)}
          tabIndex={-1}
          type="text"
          value={form.website}
        />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Nombre
          <input
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            type="text"
            value={form.name}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Empresa
          <input
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="company"
            onChange={(event) => updateField("company", event.target.value)}
            type="text"
            value={form.company}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Correo electronico
          <input
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Telefono
          <input
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="phone"
            onChange={(event) => updateField("phone", event.target.value)}
            type="tel"
            value={form.phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Tipo de cliente
          <select
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="clientType"
            onChange={(event) => updateField("clientType", event.target.value)}
            value={form.clientType}
          >
            {clientTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Servicio requerido
          <select
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="service"
            onChange={(event) => updateField("service", event.target.value)}
            value={form.service}
          >
            <option value="">Selecciona una opcion</option>
            {serviceTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-gray-700">
        Mensaje
        <textarea
          className="min-h-36 rounded-md border border-gray-300 px-3 py-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
          name="message"
          onChange={(event) => updateField("message", event.target.value)}
          value={form.message}
        />
      </label>

      {error ? (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
          Gracias por contactarnos. Hemos recibido tu solicitud y nuestro equipo
          se comunicara contigo a la brevedad.
        </p>
      ) : null}

      <button
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c30f3f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:bg-[#a90d36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        disabled={submitting}
        type="submit"
      >
        {submitting ? "Enviando..." : "Enviar solicitud"}
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
      </form>
    </>
  );
}

async function getRecaptchaToken(siteKey: string) {
  if (!siteKey) return "";

  return new Promise<string>((resolve, reject) => {
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) {
      resolve("");
      return;
    }

    grecaptcha.ready(() => {
      grecaptcha
        .execute(siteKey, { action: "contact" })
        .then(resolve)
        .catch(reject);
    });
  });
}
