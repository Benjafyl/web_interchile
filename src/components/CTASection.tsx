import { MessageSquareText } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonLink } from "@/components/ButtonLink";
import { getWhatsAppUrl } from "@/lib/utils";
type CTASectionProps = {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappLabel?: string;
};
export function CTASection({
  title,
  text,
  primaryLabel = "Cuéntanos tu proyecto",
  primaryHref = "/contacto",
  whatsappLabel = "Escribir por WhatsApp",
}: CTASectionProps) {
  return (
    <section className="contact-band" id="conversemos">
      <div className="shell contact-panel">
        <div className="contact-copy">
          <p className="section-kicker">
            <span className="contact-signal" />
            Demos el siguiente paso
          </p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="contact-options">
          <ButtonLink href={primaryHref} variant="light">
            <MessageSquareText aria-hidden="true" />
            {primaryLabel}
          </ButtonLink>
          <ButtonLink
            href={getWhatsAppUrl()}
            variant="secondary"
            className="contact-whatsapp"
            external
          >
            <FaWhatsapp aria-hidden="true" />
            {whatsappLabel}
          </ButtonLink>
          <p>Atención directa, de persona a persona.</p>
        </div>
      </div>
    </section>
  );
}
