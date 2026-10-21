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
            src="/images/hero-confort.webp"
            alt="Imagen ilustrativa de un atrio luminoso y confortable, con vegetación y luz natural"
            fill
            preload
            sizes="(min-width: 900px) 48vw, 100vw"
            className="hero-photo"
          />
          <div className="hero-photo-top">
            <span>Confort en cada espacio</span>
            <span>BIENESTAR / CHILE</span>
          </div>
          <figcaption>
            <span className="photo-cross" aria-hidden="true">
              +
            </span>
            <div>
              <strong>
                Confort que se siente.
                <br />
                Espacios que se disfrutan.
              </strong>
              <span>Climatización para cada forma de habitar.</span>
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
