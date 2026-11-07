import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { PrivacyControls } from "@/components/Analytics";

export const metadata: Metadata = createPageMetadata({
  title: "Cookies y privacidad | Interchile Clima",
  description:
    "Cómo Interchile Clima utiliza los datos de contacto, la protección antispam y la medición opcional del sitio web.",
  path: "/privacidad",
});
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacidad"
        path="/privacidad"
        title="PRIVACIDAD Y USO DE TUS DATOS."
        description="Información sobre las solicitudes de contacto, la protección del formulario y tus preferencias de cookies en interchileclima.cl."
      />
      <section className="section-space" id="detalle">
        <article className="shell privacy-copy">
          <p>Actualizada el 7 de noviembre de 2026.</p>
          <h2>Quién recibe tu solicitud</h2>
          <p>
            Interchile Clima SpA recibe los requerimientos enviados desde este
            sitio. Puedes consultar por el uso de tus datos o solicitar su
            corrección o eliminación escribiendo a{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <h2>Datos del formulario y finalidad</h2>
          <p>
            Para responder una solicitud pedimos nombre, correo electrónico,
            servicio requerido y un mensaje. Puedes añadir empresa, teléfono,
            tipo de cliente y comuna o ciudad para facilitar la evaluación. La
            solicitud se envía al correo del equipo de Interchile Clima mediante
            su servicio de correo; no se publica en el sitio.
          </p>
          <p>
            Utilizamos esa información para revisar el requerimiento, responder,
            preparar una cotización y coordinar el servicio solicitado. No la
            enviamos a Google Analytics ni la usamos para suscribirte
            automáticamente a campañas de marketing. Evita incluir contraseñas,
            información financiera o datos sensibles en el mensaje.
          </p>
          <h2>Seguridad y prevención de spam</h2>
          <p>
            El formulario utiliza Google reCAPTCHA para ayudar a distinguir
            solicitudes legítimas de envíos automatizados. Esta protección puede
            procesar información técnica del navegador y de la conexión. Se
            aplican la{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Privacidad
            </a>{" "}
            y los{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Términos de Google
            </a>
            . Esta función de seguridad es independiente de la medición opcional
            de visitas.
          </p>
          <h2>Cookies de Google Analytics</h2>
          <p>
            Solo si aceptas las cookies de Analytics cargamos Google Analytics.
            Nos ayuda a conocer las páginas visitadas, el origen general de las
            visitas y acciones como acceder a cotizar, pulsar WhatsApp o enviar
            una solicitud correctamente. Un clic en WhatsApp indica intención de
            contacto; no nos permite saber si la conversación ocurrió ni si hubo
            una venta.
          </p>
          <p>
            Los eventos no incluyen el nombre, correo, teléfono, empresa,
            ubicación escrita ni mensaje del formulario. Los enlaces de página
            enviados a Analytics omiten los datos del formulario y filtran los
            parámetros de campaña. Google puede procesar información técnica y
            utilizar cookies de medición, como las que comienzan por{" "}
            <code>_ga</code>. No activamos funciones publicitarias de Google
            Signals ni personalización de anuncios.
          </p>
          <h2>Cómo cambiar tu elección</h2>
          <p>
            Guardamos tu preferencia en el almacenamiento local del navegador
            con la clave <code>interchile:analytics-consent:v1</code>. Puedes
            rechazar las cookies de Analytics y seguir usando el sitio y el
            formulario. Si retiras un consentimiento previo, dejamos de enviar
            eventos y eliminamos las cookies de Analytics accesibles desde este
            sitio. El cambio afecta a este navegador; no elimina los datos ya
            recibidos por Google.
          </p>
          <PrivacyControls />
          <h2>Canales externos y conservación</h2>
          <p>
            Si eliges WhatsApp, Instagram, TikTok o un enlace de correo, pasarás
            al servicio correspondiente y se aplicarán sus políticas. Los
            mensajes recibidos por el equipo se conservan en sus canales de
            atención para gestionar el requerimiento y su seguimiento. Puedes
            consultar por un caso concreto en el correo indicado arriba.
          </p>
          <p>
            <Link href="/contacto">Volver a contacto y cotizaciones</Link>
          </p>
        </article>
      </section>
    </>
  );
}
