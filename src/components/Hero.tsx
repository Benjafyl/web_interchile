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
            Climatización para todo Chile
          </p>
          <h1>
            EL CLIMA
            <br />
            BAJO CONTROL<span className="headline-period">.</span>
          </h1>
          <p className="hero-description">
            Tu operación sigue. Nosotros nos encargamos del clima.
          </p>
          <p className="hero-detail">
            Proyectamos, instalamos y mantenemos sistemas de climatización para
            empresas, industrias y hogares.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contacto">
              <MessageSquareText aria-hidden="true" />
              Cotizar mi proyecto
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
                De un equipo split
                <br />a un proyecto industrial.
              </span>
            </div>
          </div>
        </div>
        <figure className="hero-visual">
          <Image
            src="/projects/montaje-equipo-hvac-grua.jpeg"
            alt="Izaje de un equipo industrial de climatización durante un montaje de Inter Chile Clima"
            fill
            preload
            sizes="(min-width: 900px) 48vw, 100vw"
            className="hero-photo"
          />
          <div className="hero-photo-top">
            <span>Experiencia en acción</span>
            <span>HVAC / CHILE</span>
          </div>
          <figcaption>
            <span className="photo-cross" aria-hidden="true">
              +
            </span>
            <div>
              <strong>
                Donde está el desafío,
                <br />
                está nuestro equipo.
              </strong>
              <span>Montaje de climatización industrial</span>
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
