"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, BriefcaseBusiness, House, Mail, Menu, PackageOpen, UsersRound, Wrench, X, type LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { ButtonLink } from "@/components/ButtonLink";
import { navLinks, siteConfig } from "@/data/site";
import { cn, getWhatsAppUrl } from "@/lib/utils";

const navIcons: Record<string, LucideIcon> = {
  "/": House,
  "/empresa": Building2,
  "/servicios": Wrench,
  "/arriendo-equipos": PackageOpen,
  "/proyectos": BriefcaseBusiness,
  "/equipo": UsersRound,
  "/contacto": Mail,
};

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="h-0.5 bg-[linear-gradient(90deg,#c30f3f_0%,#c30f3f_34%,#4fb7d8_34%,#4fb7d8_67%,#56b91f_67%)]" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link className="flex items-center" href="/" onClick={() => setIsOpen(false)}>
          <BrandLogo imageClassName="h-14 sm:h-16" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navLinks.map((link) => {
            const Icon = navIcons[link.href];
            return (
              <Link
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition",
                  pathname === link.href
                    ? "bg-rose-50 text-[#c30f3f]"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-950",
                )}
                href={link.href}
                key={link.href}
              >
                <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            aria-label="Instagram de InterchileClima"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition hover:bg-rose-50 hover:text-[#c30f3f]"
            href={siteConfig.instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            <SiInstagram aria-hidden="true" className="h-4 w-4" />
          </a>
          <a
            aria-label="TikTok de InterchileClima"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 transition hover:bg-gray-100 hover:text-black"
            href={siteConfig.tiktokUrl}
            rel="noreferrer"
            target="_blank"
          >
            <SiTiktok aria-hidden="true" className="h-4 w-4" />
          </a>
          <ButtonLink href="/contacto">Cotizar</ButtonLink>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 text-gray-800 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-gray-200 bg-white px-6 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile">
            {navLinks.map((link) => {
              const Icon = navIcons[link.href];
              return (
                <Link
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium",
                    pathname === link.href
                      ? "bg-rose-50 text-[#c30f3f]"
                      : "text-gray-700 hover:bg-gray-100",
                  )}
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <ButtonLink href="/contacto" className="w-full">
                Cotizar
              </ButtonLink>
              <ButtonLink
                href={getWhatsAppUrl()}
                variant="secondary"
                external
                className="w-full"
              >
                <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </ButtonLink>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <a
                className="inline-flex items-center gap-2"
                href={siteConfig.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                <SiInstagram aria-hidden="true" className="h-4 w-4 text-[#c30f3f]" />
                {siteConfig.instagramHandle}
              </a>
              <a
                className="inline-flex items-center gap-2"
                href={siteConfig.tiktokUrl}
                rel="noreferrer"
                target="_blank"
              >
                <SiTiktok aria-hidden="true" className="h-4 w-4 text-black" />
                {siteConfig.tiktokHandle}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
