import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
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
  primaryLabel = "Cotizar ahora",
  primaryHref = "/contacto",
  whatsappLabel = "Hablar por WhatsApp",
}: CTASectionProps) {
  return (
    <section className="bg-[#30343a] px-6 py-16 text-white sm:py-20">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-200">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <ButtonLink href={primaryHref} variant="light">
            {primaryLabel}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={getWhatsAppUrl()} variant="primary" external>
            {whatsappLabel}
            <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
