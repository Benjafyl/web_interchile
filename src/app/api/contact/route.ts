import { NextResponse } from "next/server";
import nodemailer, { type Transporter } from "nodemailer";
import { siteConfig } from "@/data/site";
import { escapeHtml, validateContact } from "@/lib/contact-validation";
import {
  allowedOrigin,
  consumeContactLimit,
  readContactBody,
  verifyRecaptcha,
} from "@/lib/contact-security";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
let transporter: Transporter | null = null;
const responseHeaders = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
};

function json(
  body: unknown,
  status = 200,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: { ...responseHeaders, ...headers },
  });
}
function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value || value === "change-me") throw new Error("contact_configuration");
  return value;
}
function getTransporter() {
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT ?? 587);
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port,
      secure,
      requireTLS: !secure,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASS"),
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  }
  return transporter;
}

export async function POST(request: Request) {
  if (
    !allowedOrigin(
      request,
      siteConfig.url,
      process.env.NODE_ENV === "development",
    )
  ) {
    return json(
      { error: "No se pudo validar el origen de la solicitud." },
      403,
    );
  }
  if (
    !/^application\/json(?:\s*;|$)/i.test(
      request.headers.get("content-type") || "",
    )
  ) {
    return json({ error: "Formato de solicitud no válido." }, 415);
  }
  const retryAfter = consumeContactLimit(request);
  if (retryAfter)
    return json(
      {
        error:
          "Recibimos varios intentos. Espera unos minutos o escríbenos por WhatsApp.",
      },
      429,
      { "Retry-After": String(retryAfter) },
    );

  let payload: unknown;
  try {
    payload = await readContactBody(request);
  } catch (error) {
    return json(
      {
        error:
          error instanceof RangeError
            ? "La solicitud es demasiado grande."
            : "Revisa los datos de la solicitud.",
      },
      error instanceof RangeError ? 413 : 400,
    );
  }
  const { data, errors } = validateContact(payload);
  if (Object.keys(errors).length)
    return json({ error: Object.values(errors)[0], errors }, 400);

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || secret === "change-me") {
    console.error("Contact form unavailable: CAPTCHA configuration missing");
    return json(
      {
        error:
          "El formulario no está disponible en este momento. Escríbenos por WhatsApp o correo electrónico.",
      },
      503,
    );
  }
  try {
    const valid = await verifyRecaptcha(
      (payload as Record<string, unknown>).recaptchaToken,
      secret,
      new URL(siteConfig.url).hostname,
    );
    if (!valid)
      return json(
        {
          error:
            "No pudimos validar el envío. Inténtalo nuevamente o escríbenos por WhatsApp.",
        },
        400,
      );
  } catch {
    return json(
      {
        error:
          "No pudimos preparar el envío. Inténtalo nuevamente o escríbenos por WhatsApp.",
      },
      503,
    );
  }

  try {
    const to =
      process.env.CONTACT_FORM_TO_EMAIL ??
      process.env.CONTACT_TO_EMAIL ??
      siteConfig.email;
    const from = process.env.CONTACT_FORM_FROM_EMAIL ??
      process.env.CONTACT_FROM_EMAIL ?? {
        name: "InterChile Clima Web",
        address: getRequiredEnv("SMTP_USER"),
      };
    const fields = [
      ["Nombre", data.name],
      ["Empresa", data.company || "No indicada"],
      ["Correo", data.email],
      ["Teléfono", data.phone || "No indicado"],
      ["Tipo de cliente", data.clientType],
      ["Servicio", data.service],
      ["Ubicación", data.location || "No indicada"],
      ["Mensaje", data.message],
    ];
    await getTransporter().sendMail({
      from,
      to,
      replyTo: { name: data.name, address: data.email },
      subject: `Nueva solicitud web: ${data.service}`,
      text: [
        "Nueva solicitud desde interchileclima.cl",
        "",
        ...fields.map(([name, value]) => `${name}: ${value}`),
      ].join("\n"),
      html: `<div style="font-family:Arial,sans-serif;color:#222c31;line-height:1.6"><h2>Nueva solicitud desde interchileclima.cl</h2>${fields.map(([name, value]) => `<p style="white-space:pre-line"><strong>${name}:</strong> ${escapeHtml(value)}</p>`).join("")}</div>`,
    });
    return json({ ok: true });
  } catch {
    // Do not log payloads, addresses or SMTP errors that can contain credentials.
    console.error("Contact form delivery failed");
    return json(
      {
        error:
          "No pudimos enviar tu solicitud. Tus datos siguen en el formulario; puedes reintentar o contactarnos por WhatsApp.",
      },
      502,
    );
  }
}

export async function GET() {
  const siteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
    process.env.RECAPTCHA_SITE_KEY ??
    "";
  return json({
    recaptchaSiteKey: siteKey === "change-me" ? "" : siteKey,
    formReady: Boolean(
      siteKey &&
        siteKey !== "change-me" &&
        process.env.RECAPTCHA_SECRET_KEY &&
        process.env.RECAPTCHA_SECRET_KEY !== "change-me" &&
        process.env.SMTP_HOST &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS,
    ),
  });
}
