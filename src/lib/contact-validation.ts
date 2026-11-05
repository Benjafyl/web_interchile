import { clientTypes, serviceTypes } from "../data/contact-options";

export type ContactData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  clientType: string;
  service: string;
  location: string;
  message: string;
};
export type ContactField = keyof ContactData;
export type ContactErrors = Partial<Record<ContactField | "form", string>>;

export function validateContact(payload: unknown): {
  data: ContactData;
  errors: ContactErrors;
} {
  const errors: ContactErrors = {};
  const record =
    payload && typeof payload === "object" && !Array.isArray(payload)
      ? (payload as Record<string, unknown>)
      : {};
  const limits = {
    name: 120,
    company: 160,
    email: 254,
    phone: 40,
    clientType: 30,
    service: 80,
    location: 160,
    message: 2500,
  };
  const data = Object.fromEntries(
    Object.entries(limits).map(([key, max]) => {
      const value = record[key];
      const text = typeof value === "string" ? value.trim() : "";
      if (value !== undefined && typeof value !== "string")
        errors[key as ContactField] = "Revisa este campo.";
      if (text.length > max)
        errors[key as ContactField] = `Usa como máximo ${max} caracteres.`;
      return [key, text];
    }),
  ) as ContactData;
  if (!data.name || /[\r\n\x00-\x1f\x7f]/.test(data.name))
    errors.name = "Ingresa tu nombre, sin saltos de línea.";
  if (
    !/^[^\s@<>(),;:"\[\]\\]+@[^\s@<>(),;:"\[\]\\]+\.[^\s@<>(),;:"\[\]\\]+$/.test(
      data.email,
    )
  )
    errors.email = "Ingresa un correo electrónico válido.";
  if (data.phone && !/^[+\d() .-]{7,40}$/.test(data.phone))
    errors.phone = "Revisa el teléfono o deja este campo vacío.";
  if (!clientTypes.includes(data.clientType))
    errors.clientType = "Selecciona el tipo de cliente.";
  if (!serviceTypes.includes(data.service))
    errors.service = "Selecciona el servicio requerido.";
  if (!data.message) errors.message = "Cuéntanos brevemente qué necesitas.";
  if (
    record.website ||
    !payload ||
    typeof payload !== "object" ||
    Array.isArray(payload)
  )
    errors.form = "No se pudo validar la solicitud.";
  return { data, errors };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
