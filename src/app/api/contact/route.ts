import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  clientType?: string;
  service?: string;
  message?: string;
  website?: string;
  recaptchaToken?: string;
};

let transporter: Transporter | null = null;

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure =
      process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465";

    transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port,
      secure,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASS"),
      },
    });
  }

  return transporter;
}

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getContactEmail(name: string, fallbackName: string) {
  return process.env[name] ?? process.env[fallbackName];
}

async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  if (!response.ok) return false;

  const result = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };
  const minimumScore = Number(
    process.env.RECAPTCHA_MIN_SCORE ?? process.env.RECAPTCHA_SCORE_MIN ?? 0.5,
  );

  return (
    result.success === true &&
    typeof result.score === "number" &&
    result.score >= minimumScore &&
    (!result.action || result.action === "contact")
  );
}

function validate(payload: ContactPayload) {
  const data = {
    name: clean(payload.name),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    clientType: clean(payload.clientType),
    service: clean(payload.service),
    message: clean(payload.message),
    website: clean(payload.website),
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  if (data.website) return { error: "No se pudo enviar la solicitud." };
  if (!data.name) return { error: "Ingresa tu nombre." };
  if (!emailIsValid) return { error: "Ingresa un correo electronico valido." };
  if (!data.phone) return { error: "Ingresa tu telefono." };
  if (!data.service) return { error: "Selecciona el servicio requerido." };
  if (!data.message) return { error: "Cuentanos brevemente que necesitas." };
  if (data.message.length > 2500) {
    return { error: "El mensaje es demasiado largo." };
  }

  return { data };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const result = validate(payload);

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    const recaptchaIsValid = await verifyRecaptcha(
      clean(payload.recaptchaToken),
    );
    if (!recaptchaIsValid) {
      return NextResponse.json(
        { error: "No pudimos validar el formulario. Intentalo nuevamente." },
        { status: 400 },
      );
    }

    const { data } = result;
    const to =
      getContactEmail("CONTACT_FORM_TO_EMAIL", "CONTACT_TO_EMAIL") ??
      "benjamin@interchileclima.cl";
    const from =
      getContactEmail("CONTACT_FORM_FROM_EMAIL", "CONTACT_FROM_EMAIL") ??
      `InterChileClima Web <${getRequiredEnv("SMTP_USER")}>`;

    await getTransporter().sendMail({
      from,
      to,
      replyTo: `${data.name} <${data.email}>`,
      subject: `Nueva solicitud web: ${data.service}`,
      text: [
        "Nueva solicitud desde interchileclima.cl",
        "",
        `Nombre: ${data.name}`,
        `Empresa: ${data.company || "No indicada"}`,
        `Correo: ${data.email}`,
        `Telefono: ${data.phone}`,
        `Tipo de cliente: ${data.clientType || "No indicado"}`,
        `Servicio: ${data.service}`,
        "",
        "Mensaje:",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5;">
          <h2 style="color: #c30f3f;">Nueva solicitud desde interchileclima.cl</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(data.company || "No indicada")}</p>
          <p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
          <p><strong>Telefono:</strong> ${escapeHtml(data.phone)}</p>
          <p><strong>Tipo de cliente:</strong> ${escapeHtml(data.clientType || "No indicado")}</p>
          <p><strong>Servicio:</strong> ${escapeHtml(data.service)}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(data.message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { error: "No se pudo enviar la solicitud. Intentalo nuevamente." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    recaptchaSiteKey:
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
      process.env.RECAPTCHA_SITE_KEY ??
      "",
  });
}
