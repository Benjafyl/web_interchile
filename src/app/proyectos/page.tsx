import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { TemucoFeature } from "@/components/TemucoFeature";
import { CTASection } from "@/components/CTASection";
import { ClientLogos } from "@/components/ClientLogos";
import { ProjectCases } from "@/components/ProjectCases";
import { JsonLd } from "@/components/JsonLd";
import { projectCases } from "@/data/projects";
import { temucoProject } from "@/data/temuco";
import { absoluteUrl, createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Proyectos y experiencia | Interchile Clima",
  description:
    "Proyectos de Interchile Clima: ampliación Portal Temuco 2026, París Antofagasta 2025, vitrinas París Costanera Center 2026 y sala de máquinas Portal Temuco 2004.",
  path: "/proyectos",
});
const services = [
  {
    src: "/projects/maniobra-grua-alto-las-condes.webp",
    title: "Nuestros equipos de arriendo, en terreno.",
    category: "Arriendo de climatización · Mall Alto Las Condes",
    text: "Equipos compactos y coordinación de traslado, montaje y retiro según cada operación.",
    href: "/arriendo-equipos",
    action: "Conocer el servicio de arriendo",
  },
  {
    src: "/projects/instalacion-split-domiciliario.jpg",
    title: "El mismo cuidado, en tu hogar.",
    category: "Instalación domiciliaria",
    text: "Equipos de aire acondicionado para hogares y espacios particulares.",
    href: "/servicios/instalacion-aire-acondicionado",
    action: "Consultar una instalación domiciliaria",
  },
];
export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        path="/proyectos"
        title="PROYECTOS DE CLIMATIZACIÓN EN CHILE."
        description="Nuestro trabajo en retail, centros comerciales e instalaciones de empresas. Fotografías reales de montaje, coordinación técnica y supervisión en terreno; también atendemos proyectos domiciliarios."
      />
      <TemucoFeature id="detalle" />
      <section
        className="section-space"
        aria-labelledby="project-cases-heading"
      >
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Cada trabajo tiene su historia</p>
              <h2 className="display-heading" id="project-cases-heading">
                Otros proyectos de nuestra trayectoria.
              </h2>
            </div>
            <p>
              Obras de climatización y trabajos puntuales en retail, con sus
              fechas, alcances y fotografías.
            </p>
          </div>
          <ProjectCases />
        </div>
      </section>
      <section className="section-space">
        <div className="shell section-top">
          <h2 className="display-heading">
            TAMBIÉN EN
            <br />
            TU OPERACIÓN.
          </h2>
          <p>
            Arriendo de equipos e instalaciones domiciliarias. Servicios para
            distintas necesidades de climatización.
          </p>
        </div>
        <div className="shell portfolio-grid">
          {services.map((project) => (
            <article key={project.src}>
              <figure>
                <Image
                  src={project.src}
                  alt={project.title + " " + project.category}
                  fill
                  sizes="(min-width: 900px) 50vw, 100vw"
                />
              </figure>
              <p className="section-kicker">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <Link
                className="text-link portfolio-service-link"
                href={project.href}
              >
                {project.action}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="trust-strip">
        <div className="shell trust-inner">
          <p>
            Trayectoria junto a<br />
            <strong>operaciones de alto estándar.</strong>
          </p>
          <ClientLogos />
        </div>
      </section>
      <CTASection
        title="TU PROYECTO PUEDE SER EL SIGUIENTE."
        text="Conversemos sobre tu espacio, tus equipos y lo que necesitas conseguir."
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Proyectos de Interchile Clima",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ampliación Mall Portal Temuco 2026",
              url: absoluteUrl(temucoProject.href),
            },
            ...projectCases.map((project, index) => ({
              "@type": "ListItem",
              position: index + 2,
              name: `${project.title} ${project.year}`,
              url: absoluteUrl(`/proyectos/${project.slug}`),
            })),
          ],
        }}
      />
    </>
  );
}
