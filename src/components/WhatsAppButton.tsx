"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { rootMargin: "0px 0px 32px 0px", threshold: 0.01 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return (
    <a
      className={"whatsapp-float" + (footerVisible ? " is-hidden" : "")}
      aria-label="Hablar por WhatsApp con Inter Chile Clima"
      aria-hidden={footerVisible}
      tabIndex={footerVisible ? -1 : undefined}
      href={getWhatsAppUrl()}
      rel="noreferrer"
      target="_blank"
    >
      <FaWhatsapp aria-hidden="true" />
      <span>Conversemos</span>
    </a>
  );
}
