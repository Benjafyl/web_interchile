import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projectCases } from "@/data/projects";
import { absoluteUrl, createPageMetadata } from "@/data/seo";
import { temucoProject } from "@/data/temuco";

export function generateStaticParams() {
  return projectCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);
  if (!project) notFound();
  return createPageMetadata({
    title: `${project.title} ${project.year} | Interchile Clima`,
    description: project.description,
    path: `/proyectos/${project.slug}`,
    image: project.cover.src,
  });
}

export default async function ProjectCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectCases.find((item) => item.slug === slug);
  if (!project) notFound();
  const path = `/proyectos/${project.slug}`;
  const isMachineRoom = project.year === "2004";

  return (
    <>
      <section className="project-intro">
        <div className="shell">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Proyectos", href: "/proyectos" },
              { name: project.title, href: path },
            ]}
          />
          <div className="case-opening">
            <div className="case-opening-copy">
              <p className="section-kicker">{project.kind}</p>
              <p className="case-period">{project.period}</p>
              <h1>{project.title}</h1>
              <p className="project-location">
                <MapPin aria-hidden="true" />
                {project.location}
              </p>
              <p className="body-copy">{project.description}</p>
              <ButtonLink href="#galeria">
                Ver fotografías del proyecto
              </ButtonLink>
            </div>
            <figure className="case-opening-photo">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                preload
                sizes="(min-width: 900px) 43vw, 90vw"
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell service-decision-grid">
          <div>
            <p className="section-kicker">El trabajo de Interchile Clima</p>
            <h2>{project.heading}</h2>
            {project.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
            <dl className="case-facts">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="quote-requirements">
            <h2>Alcance del trabajo</h2>
            <ul>
              {project.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
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
      {isMachineRoom && (
        <section className="case-continuity">
          <div className="shell">
            <p className="section-kicker">2004 · 2026</p>
            <h2 className="display-heading">
              Volvemos a Portal Temuco, 22 años después.
            </h2>
            <p>
              La sala de máquinas fue parte de nuestro trabajo en 2004. Hoy
              participamos en la ampliación del mismo mall con una nueva obra de
              ductos y tuberías.
            </p>
            <ButtonLink href={temucoProject.href}>
              Conocer la ampliación de 2026
            </ButtonLink>
          </div>
        </section>
      )}
      <section
        className="section-space project-gallery-section"
        id="galeria"
        aria-labelledby="case-gallery-heading"
      >
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Fotografías de Interchile Clima</p>
              <h2 className="display-heading" id="case-gallery-heading">
                El proyecto, de cerca.
              </h2>
            </div>
            <p>
              {isMachineRoom
                ? "Un registro actual de nuestra historia en el mall."
                : "Instalaciones y trabajo en terreno."}{" "}
              Toca una fotografía para verla completa.
            </p>
          </div>
          <ProjectGallery items={project.photos} title={project.title} />
          <p className="gallery-source">{project.galleryNote}</p>
        </div>
      </section>
      <div className="shell case-back">
        <Link href="/proyectos" className="text-link">
          Ver todos los proyectos
        </Link>
      </div>
      <CTASection
        title="CONVERSEMOS SOBRE TU PROYECTO."
        text="Cuéntanos qué necesita tu espacio. Evaluamos el alcance y coordinamos una solución de climatización para tu operación."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": absoluteUrl(path) + "#proyecto",
          name: project.title,
          description: project.description,
          url: absoluteUrl(path),
          temporalCoverage: project.year,
          image: project.photos.map((photo) => absoluteUrl(photo.src)),
          creator: { "@id": absoluteUrl("/#organization") },
          spatialCoverage: { "@type": "Place", name: project.location },
          inLanguage: "es-CL",
        }}
      />
    </>
  );
}
