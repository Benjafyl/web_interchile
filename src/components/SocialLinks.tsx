import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  const channels = [
    { name: "WhatsApp", href: getWhatsAppUrl(), icon: FaWhatsapp },
    { name: "Instagram", href: siteConfig.instagramUrl, icon: SiInstagram },
    { name: "TikTok", href: siteConfig.tiktokUrl, icon: SiTiktok },
  ];
  return (
    <div className={"social-links" + (compact ? " social-links-compact" : "")}>
      {channels.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name + " de Inter Chile Clima"}
        >
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}
