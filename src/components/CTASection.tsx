import { ArrowUpRight } from "lucide-react";
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
    <section className="contact-band">
      <div className="shell contact-band-grid">
        <div>
          <p className="section-kicker">Demos el siguiente paso</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="contact-band-actions">
          <ButtonLink href={primaryHref} variant="light">
            {primaryLabel}
            <ArrowUpRight aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={getWhatsAppUrl()} variant="ghost" external>
            {whatsappLabel}
            <ArrowUpRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
