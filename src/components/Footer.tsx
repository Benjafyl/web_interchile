import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { BrandLogo } from "@/components/BrandLogo";
import { navLinks, siteConfig } from "@/data/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Inter Chile Clima — Inicio">
            <BrandLogo />
          </Link>
          <p>
            El clima adecuado.
            <br />
            El equipo correcto.
          </p>
          <span>Empresa familiar. Experiencia nacional.</span>
        </div>
        <div>
          <h2>Explora</h2>
          <ul>
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2>Hablemos</h2>
          <a className="footer-contact" href={"mailto:" + siteConfig.email}>
            {siteConfig.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            className="footer-contact"
            href={"tel:+" + siteConfig.whatsappNumber}
          >
            {siteConfig.phoneDisplay}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p>
            Atención en todo Chile.
            <br />
            Oficina virtual y coordinación en terreno.
          </p>
          <div className="footer-socials">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Inter Chile Clima"
            >
              <SiInstagram />
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok de Inter Chile Clima"
            >
              <SiTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} InterchileClima SpA.</span>
        <span>Soluciones ambientales</span>
        <a
          href="https://www.instagram.com/dreamwebchile/?hl=es-la"
          target="_blank"
          rel="noreferrer"
        >
          Diseño y desarrollo · Dream Web Chile
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
