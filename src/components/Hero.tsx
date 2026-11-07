import Image from "next/image";
import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { temucoProject } from "@/data/temuco";

export function Hero() {
  return (
    <section
      className="home-hero hero-immersive"
      aria-labelledby="home-hero-heading"
    >
      <div className="hero-backdrop">
        <picture>
          <source
            media="(max-width: 739px)"
            srcSet="/projects/portal-temuco-2026/revision-instalaciones-cubierta-2026-11-07.webp"
          />
          <Image
            src="/projects/portal-temuco-2026/hero-cubierta-panoramica.webp"
            alt="Equipo de Interchile Clima revisando tuberías y equipos en la cubierta de la ampliación de Mall Portal Temuco, 2026"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
        </picture>
      </div>
      <div className="shell hero-overlay-shell">
        <div className="hero-overlay-copy">
          <div className="hero-overlay-main">
            <p className="hero-overlay-intro">
              HVAC para industria, retail y empresas
            </p>
            <h1 id="home-hero-heading">
              CLIMATIZACIÓN
              <br />
              INDUSTRIAL Y<br />
              COMERCIAL.
            </h1>
            <p className="hero-overlay-description">
              Tu operación sigue. Nosotros nos encargamos del clima.
            </p>
            <p className="hero-overlay-detail">
              Ingeniería, instalación y mantención de climatización para
              industrias, centros comerciales, retail y oficinas.
            </p>
          </div>
          <div className="hero-overlay-actions">
            <ButtonLink href="/contacto">
              <MessageSquareText aria-hidden="true" />
              Evaluar mi proyecto
            </ButtonLink>
            <ButtonLink href="/proyectos" variant="secondary">
              Conocer proyectos
            </ButtonLink>
          </div>
          <p className="hero-overlay-proof">
            23+ años de experiencia · Atención en todo Chile
          </p>
          <Link className="hero-scene-link" href={temucoProject.href}>
            Ampliación Mall Portal Temuco · 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
