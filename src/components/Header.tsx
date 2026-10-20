"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquareText, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { SocialLinks } from "@/components/SocialLinks";
import { navLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isOpen]);
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Soluciones ambientales. Relaciones de largo plazo.</span>
          <SocialLinks compact />
        </div>
      </div>
      <div className="shell header-inner">
        <Link
          href="/"
          aria-label="Inter Chile Clima — Inicio"
          onClick={() => setIsOpen(false)}
        >
          <BrandLogo className="header-logo" />
        </Link>
        <nav className="desktop-nav" aria-label="Principal">
          {navLinks
            .filter((link) => link.href !== "/contacto")
            .map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
        </nav>
        <Link className="button header-cta" href="/contacto">
          <MessageSquareText aria-hidden="true" />
          Cotizar proyecto
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks />
        </nav>
      )}
    </header>
  );
}
