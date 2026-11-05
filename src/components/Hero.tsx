import Image from "next/image";
import { Building2, ChevronDown, MessageSquareText } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
export function Hero() {
  return (
    <section className="home-hero">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-intro">
            <span className="status-dot" />
            HVAC para industria, retail y empresas
          </p>
          <h1>
            CLIMATIZACIÓN
            <br />
            INDUSTRIAL Y
            <br />
            COMERCIAL<span className="headline-period">.</span>
          </h1>
          <p className="hero-description">
            Tu operación sigue. Nosotros nos encargamos del clima.
          </p>
          <p className="hero-detail">
            Ingeniería, instalación y mantención de climatización para
            industrias, centros comerciales, retail y oficinas. Atención
            coordinada en todo Chile.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contacto">
              <MessageSquareText aria-hidden="true" />
              Evaluar mi proyecto
            </ButtonLink>
            <a className="text-link" href="#soluciones">
              Explorar soluciones
              <ChevronDown aria-hidden="true" />
            </a>
          </div>
          <div className="hero-proof">
            <div>
              <strong>
                23<span>+</span>
              </strong>
              <span>
                Años de experiencia
                <br />
                que se llevan a terreno.
              </span>
            </div>
            <div>
              <Building2 aria-hidden="true" />
              <span>
                Del proyecto y montaje
                <br />a la mantención HVAC.
              </span>
            </div>
          </div>
        </div>
        <figure className="hero-visual">
          <Image
            src="/projects/portal-temuco-2026/sala-de-equipos.webp"
            alt="Sala de máquinas de Mall Portal Temuco, con tuberías rojas y azules y equipos de climatización"
            fill
            preload
            sizes="(min-width: 900px) 48vw, 100vw"
            className="hero-photo"
          />
          <div className="hero-photo-top">
            <span>Experiencia en terreno</span>
            <span>TEMUCO / CHILE</span>
          </div>
          <figcaption>
            <span className="photo-cross" aria-hidden="true">
              +
            </span>
            <div>
              <strong>
                Cada proyecto,
                <br />
                un nuevo desafío.
              </strong>
              <span>Sala de máquinas · Mall Portal Temuco</span>
            </div>
          </figcaption>
        </figure>
      </div>
      <div className="hero-baseline shell">
        <span>Ingeniería / Instalación / Mantención</span>
        <span>Confort para las personas. Continuidad para tu operación.</span>
      </div>
    </section>
  );
}
