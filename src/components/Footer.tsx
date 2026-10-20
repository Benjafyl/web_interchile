import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks, siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="site-footer" id="pie-de-pagina">
      <div className="shell footer-content">
        <div className="footer-brand">
          <Link href="/" aria-label="Inter Chile Clima — Inicio">
            <BrandLogo />
          </Link>
          <p>
            El clima adecuado.
            <br />
            <strong>El equipo correcto.</strong>
          </p>
          <span className="footer-note">
            <MapPin aria-hidden="true" />
            Contigo, en todo Chile.
          </span>
        </div>
        <nav className="footer-links" aria-label="Explorar el sitio">
          <h2>Inter Chile Clima</h2>
          <ul>
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="footer-channels">
          <h2>Estamos para ayudarte</h2>
          <a className="footer-channel" href={"mailto:" + siteConfig.email}>
            <span className="channel-icon">
              <Mail aria-hidden="true" />
            </span>
            <span>
              <small>Escríbenos</small>
              <strong>{siteConfig.email}</strong>
            </span>
          </a>
          <a
            className="footer-channel"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <span className="channel-icon">
              <FaWhatsapp aria-hidden="true" />
            </span>
            <span>
              <small>Conversemos por WhatsApp</small>
              <strong>{siteConfig.phoneDisplay}</strong>
            </span>
          </a>
          <SocialLinks compact />
        </div>
      </div>
      <div className="shell footer-bar">
        <span>© {new Date().getFullYear()} InterchileClima SpA.</span>
        <span className="footer-legal">
          Soluciones ambientales · Empresa familiar
        </span>
        <a
          className="designer-credit"
          href="https://byl-software.vercel.app"
          target="_blank"
          rel="noreferrer"
          aria-label="Desarrollado por BYL — visitar su sitio web"
        >
          <Image src="/brand/byl-icon.svg" alt="" width={30} height={30} />
          <span>
            Desarrollado por <strong>BYL</strong>
          </span>
        </a>
      </div>
    </footer>
  );
}
