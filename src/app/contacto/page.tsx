import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Contacto y cotizaciones | Inter Chile Clima",
  description:
    "Cotiza tu proyecto, instalación, mantención o arriendo de climatización. Atención en todo Chile.",
  path: "/contacto",
});
export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="CONVERSEMOS. LO RESOLVEMOS JUNTOS."
        description="Cuéntanos qué necesitas, dónde está tu espacio y qué te gustaría mejorar. Nuestro equipo revisará tu requerimiento."
      />
      <section className="section-space" id="detalle">
        <div className="shell contact-grid">
          <div className="contact-form-wrap">
            <h2>Tu próximo proyecto empieza aquí.</h2>
            <p>Completa los datos para que podamos contactarte.</p>
            <ContactForm />
          </div>
          <aside className="contact-aside">
            <p className="section-kicker">Si prefieres hablar directamente</p>
            <a href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>{siteConfig.phoneDisplay}</strong>
              <FaWhatsapp aria-hidden="true" />
            </a>
            <a href={"mailto:" + siteConfig.email}>
              <span>Correo electrónico</span>
              <strong>{siteConfig.email}</strong>
              <Mail aria-hidden="true" />
            </a>
            <div className="coverage-note">
              <MapPin aria-hidden="true" />
              <h2>Donde está tu operación.</h2>
              <p>
                Atención en todo Chile, con oficina virtual y coordinación de
                visitas en terreno según el requerimiento.
              </p>
            </div>
            <p className="contact-help">
              ¿Tienes fotos del equipo o de la falla? Puedes compartirlas al
              conversar con nosotros por WhatsApp.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
