import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ProjectVideo } from "@/components/ProjectVideo";
import { ProjectGallery } from "@/components/ProjectGallery";
import { createPageMetadata } from "@/data/seo";
import { temucoProject } from "@/data/temuco";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { absoluteUrl } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Ampliación Mall Portal Temuco 2026 | Interchile Clima",
  description:
    "Recorre la ampliación de Mall Portal Temuco junto a Interchile Clima. Fotografías del equipo en terreno, instalaciones y video de la obra en 2026.",
  path: temucoProject.href,
});

export default function TemucoPage() {
  return (
    <>
      <section className="project-intro">
        <div className="shell">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Proyectos", href: "/proyectos" },
              {
                name: "Ampliación Mall Portal Temuco 2026",
                href: temucoProject.href,
              },
            ]}
          />
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
      <section className="section-space">
        <div className="shell service-decision-grid">
          <div>
            <p className="section-kicker">Climatización en retail</p>
            <h2>Coordinación técnica en una ampliación comercial.</h2>
            <p className="body-copy">
              El registro de 2026 muestra al equipo de Interchile Clima
              revisando planos y recorriendo las instalaciones de la ampliación
              de Mall Portal Temuco, en la Región de La Araucanía. Las
              fotografías y el video permiten observar la coordinación en
              terreno, ductos y espacios en obra.
            </p>
            <p className="body-copy">
              En una intervención de este tipo, la evaluación del espacio y la
              coordinación de los trabajos forman parte del{" "}
              <Link href="/servicios/ingenieria-proyectos-climatizacion">
                proyecto de climatización
              </Link>
              . Cada alcance se define según las condiciones del edificio y las
              necesidades de su operación.
            </p>
          </div>
          <div className="quote-requirements">
            <h2>Qué muestra esta galería</h2>
            <ul>
              <li>Equipo y coordinación en terreno durante 2026</li>
              <li>Fotografías de la ampliación y su red de ductos</li>
              <li>Un recorrido horizontal de obra, sin audio</li>
              <li>
                Por separado: la sala de máquinas existente del mall, que no
                corresponde a la ampliación
              </li>
            </ul>
            <Link
              className="text-link"
              href="/servicios/instalacion-aire-acondicionado"
            >
              Conocer instalación y montaje de climatización
            </Link>
          </div>
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
            Fotografías y video del registro de Interchile Clima · Mall Portal
            Temuco, 2026.
          </p>
        </div>
      </section>
      <CTASection
        title="TU PRÓXIMO PROYECTO EMPIEZA CON UNA CONVERSACIÓN."
        text="Cuéntanos qué necesita tu espacio. Nuestro equipo está listo para acompañarte."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "@id": absoluteUrl(temucoProject.href) + "#video",
          name: "Recorrido de obra: ampliación Mall Portal Temuco 2026",
          description:
            "Video horizontal sin audio del registro de Interchile Clima en la ampliación de Mall Portal Temuco. Muestra espacios en obra y coordinación en terreno; no incluye la sala de máquinas existente.",
          thumbnailUrl: absoluteUrl(temucoProject.poster),
          contentUrl: absoluteUrl(temucoProject.video),
          uploadDate: "2026-10-20T22:56:13-03:00",
          duration: "PT13.5S",
          creator: { "@id": absoluteUrl("/#organization") },
          inLanguage: "es-CL",
        }}
      />
    </>
  );
}
