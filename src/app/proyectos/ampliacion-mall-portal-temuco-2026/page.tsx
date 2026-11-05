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
    "Instalación de ductos y tuberías de climatización en la ampliación de Mall Portal Temuco. Fotografías y video del trabajo de Interchile Clima en 2026.",
  path: temucoProject.href,
  image: temucoProject.poster,
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
              Ductos y tuberías de climatización: el trabajo de nuestro equipo
              en la ampliación de Mall Portal Temuco.
            </p>
          </div>
          <ProjectVideo />
        </div>
      </section>
      <section className="section-space">
        <div className="shell service-decision-grid">
          <div>
            <p className="section-kicker">Climatización en retail</p>
            <h2>Ductos y tuberías de climatización para la ampliación.</h2>
            <p className="body-copy">
              Los trabajos de Interchile Clima en esta ampliación se centraron
              en la instalación de ductos y tuberías de climatización. El
              registro de 2026 muestra la distribución de las instalaciones, sus
              detalles y la coordinación de nuestro equipo en terreno en Mall
              Portal Temuco, en la Región de La Araucanía.
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
            <h2>Trabajos en esta ampliación</h2>
            <ul>
              <li>Ductos y distribución de aire</li>
              <li>Tuberías y conexiones de climatización</li>
              <li>Revisión de planos y coordinación en terreno</li>
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
      <section className="case-continuity">
        <div className="shell">
          <p className="section-kicker">Nuestra historia en el mismo mall</p>
          <h2 className="display-heading">
            De la sala de máquinas de 2004 a la ampliación de 2026.
          </h2>
          <p>
            En 2004 ejecutamos la sala de máquinas de Mall Portal Temuco. Hoy
            volvemos al recinto para trabajar en su ampliación, un proyecto
            distinto centrado en ductos y tuberías.
          </p>
          <Link
            className="text-link"
            href="/proyectos/sala-maquinas-mall-portal-temuco-2004"
          >
            Conocer el proyecto de 2004
          </Link>
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
              Ductos, tuberías y trabajo en terreno de la ampliación. Toca una
              fotografía para verla completa.
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
          name: "Ductos y tuberías: ampliación Mall Portal Temuco 2026",
          description:
            "Instalación de ductos y tuberías de climatización y coordinación del equipo de Interchile Clima durante la ampliación de Mall Portal Temuco.",
          thumbnailUrl: absoluteUrl(temucoProject.poster),
          contentUrl: absoluteUrl(temucoProject.video),
          uploadDate: temucoProject.videoUploadDate,
          duration: temucoProject.videoDuration,
          creator: { "@id": absoluteUrl("/#organization") },
          inLanguage: "es-CL",
        }}
      />
    </>
  );
}
