import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/lib/utils";
export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      aria-label="Hablar por WhatsApp con Inter Chile Clima"
      href={getWhatsAppUrl()}
      rel="noreferrer"
      target="_blank"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>Conversemos</span>
    </a>
  );
}
