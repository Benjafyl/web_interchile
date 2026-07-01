"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const clientTypes = ["Empresa", "Comercio", "Industria", "Domicilio", "Otro"];
const serviceTypes = [
  "Proyecto de climatización",
  "Instalación",
  "Mantención",
  "Reparación",
  "Repuestos",
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
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  clientType: "Empresa",
  service: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSent(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.name.trim()) return setError("Ingresa tu nombre.");
    if (!emailIsValid) return setError("Ingresa un correo electrónico válido.");
    if (!form.phone.trim()) return setError("Ingresa tu teléfono.");
    if (!form.service) return setError("Selecciona el servicio requerido.");
    if (!form.message.trim()) return setError("Cuéntanos brevemente qué necesitas.");

    setSent(true);
    setError("");
    setForm(initialState);
  }

  return (
    <form
      className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
      onSubmit={handleSubmit}
    >
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
          Correo electrónico
          <input
            className="min-h-11 rounded-md border border-gray-300 px-3 text-gray-950 outline-none transition focus:border-[#c30f3f] focus:ring-4 focus:ring-rose-100"
            name="email"
            onChange={(event) => updateField("email", event.target.value)}
            type="email"
            value={form.email}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-gray-700">
          Teléfono
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
            <option value="">Selecciona una opción</option>
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
          se comunicará contigo a la brevedad.
        </p>
      ) : null}

      <button
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#c30f3f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-950/20 transition hover:bg-[#a90d36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300 sm:w-auto"
        type="submit"
      >
        Enviar solicitud
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}
