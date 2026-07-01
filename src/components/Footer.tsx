import Link from "next/link";
import { Mail, MapPinned } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { BrandLogo } from "@/components/BrandLogo";
import { mainServices } from "@/data/services";
import { navLinks, siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#2f3338] px-6 py-12 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.9fr]">
        <div>
          <BrandLogo className="rounded-md bg-white/95 p-2" imageClassName="h-16" />
          <p className="mt-5 max-w-md text-sm leading-6 text-gray-300">
            InterchileClima SpA - Soluciones integrales de climatización para
            empresas, comercios, industrias y domicilios. Atención en todo Chile.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Links rápidos
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-[#4fb7d8]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Servicios
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {mainServices.slice(0, 6).map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Contacto
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Mail className="h-5 w-5 shrink-0 text-[#4fb7d8]" />
              <a className="hover:text-[#4fb7d8]" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <FaWhatsapp className="h-5 w-5 shrink-0 text-[#25D366]" />
              <a className="hover:text-[#4fb7d8]" href={getWhatsAppUrl()}>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPinned className="h-5 w-5 shrink-0 text-[#c30f3f]" />
              <span>{siteConfig.coverage}</span>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <a
              className="inline-flex items-center gap-2 hover:text-[#4fb7d8]"
              href={siteConfig.instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <SiInstagram aria-hidden="true" className="h-4 w-4" />
              {siteConfig.instagramHandle}
            </a>
            <a
              className="inline-flex items-center gap-2 hover:text-[#4fb7d8]"
              href={siteConfig.tiktokUrl}
              rel="noreferrer"
              target="_blank"
            >
              <SiTiktok aria-hidden="true" className="h-4 w-4" />
              {siteConfig.tiktokHandle}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
          reservados.
        </span>
        <span>Desarrollado por Benjamín Gallegos.</span>
      </div>
    </footer>
  );
}
