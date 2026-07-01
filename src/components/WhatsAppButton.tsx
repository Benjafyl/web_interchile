import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  return (
    <a
      aria-label={`Hablar por WhatsApp con ${siteConfig.shortName}`}
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-950/30 transition hover:-translate-y-1 hover:bg-[#1ebe5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-300"
      href={getWhatsAppUrl()}
      rel="noreferrer"
      target="_blank"
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </a>
  );
}
