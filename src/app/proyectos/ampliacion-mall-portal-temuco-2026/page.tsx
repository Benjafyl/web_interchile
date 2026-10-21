import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ProjectGallery } from "@/components/ProjectGallery";
import { createPageMetadata } from "@/data/seo";
import { temucoProject } from "@/data/temuco";

export const metadata: Metadata = createPageMetadata({
  title: "Ampliación Mall Portal Temuco 2026 | Inter Chile Clima",
  description:
    "Recorre la ampliación de Mall Portal Temuco junto a Inter Chile Clima. Fotografías del equipo en terreno, instalaciones y video de la obra en 2026.",
  path: temucoProject.href,
});

export default function TemucoPage() {
  return (
    <>
      <section className="project-intro">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Ruta de navegación">
            <Link href="/">Inter Chile Clima</Link>
            <span>/</span>
            <Link href="/proyectos">Proyectos</Link>
            <span>/</span>Temuco 2026
          </nav>
          <div className="project-intro-heading">
            <h1>
              AMPLIACIÓN
              <br />
              MALL PORTAL TEMUCO.
            </h1>
            <span className="project-year">2026</span>
          </div>
          <div className="project-intro-details">
            <p className="project-location">
              <MapPin aria-hidden="true" />
              {temucoProject.location}
            </p>
            <p>
              Una mirada desde adentro: nuestro equipo, la coordinación técnica
              y las instalaciones que forman parte del proyecto.
            </p>
          </div>
          <ProjectVideo />
        </div>
      </section>
      <section
        className="section-space project-gallery-section"
        aria-labelledby="gallery-heading"
      >
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Registro de obra</p>
              <h2 className="display-heading" id="gallery-heading">
                EL PROYECTO,
                <br />
                DE CERCA.
              </h2>
            </div>
            <p>
              Registro de la ampliación y, por separado, de la sala de máquinas
              existente del mall. Toca una fotografía para verla completa.
            </p>
          </div>
          <ProjectGallery />
          <p className="gallery-source">
            Fotografías y video del registro de Inter Chile Clima · Mall Portal
            Temuco, 2026.
          </p>
        </div>
      </section>
      <CTASection
        title="TU PRÓXIMO PROYECTO EMPIEZA CON UNA CONVERSACIÓN."
        text="Cuéntanos qué necesita tu espacio. Nuestro equipo está listo para acompañarte."
      />
    </>
  );
}
