import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { TemucoFeature } from "@/components/TemucoFeature";
import { CTASection } from "@/components/CTASection";
import { ClientLogos } from "@/components/ClientLogos";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Proyectos y experiencia | Inter Chile Clima",
  description:
    "Trabajo real de climatización: montaje industrial, supervisión, ingeniería e instalación domiciliaria en Chile.",
  path: "/proyectos",
});
const projects = [
  {
    src: "/projects/maniobra-grua-alto-las-condes.webp",
    title: "Montajes que requieren coordinación.",
    category: "Retail y espacios comerciales",
    text: "Planificación y maniobras especializadas para equipos de mayor capacidad.",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    title: "Supervisión técnica en Antofagasta.",
    category: "Climatización comercial",
    text: "Revisión de equipos y evaluación de las condiciones de operación en terreno.",
  },
  {
    src: "/projects/montaje-equipo-hvac-grua.jpeg",
    title: "Del traslado a la puesta en marcha.",
    category: "Montaje de equipos industriales",
    text: "Coordinación técnica de izaje e instalación de unidades de climatización.",
  },
  {
    src: "/projects/coordinacion-planos-hvac.jpeg",
    title: "Cada buena solución empieza en el plano.",
    category: "Ingeniería y proyectos",
    text: "Evaluación y coordinación para definir una solución ajustada al espacio.",
  },
  {
    src: "/projects/instalacion-split-domiciliario.jpg",
    title: "El mismo cuidado, en tu hogar.",
    category: "Instalación domiciliaria",
    text: "Equipos de aire acondicionado para hogares y espacios particulares.",
  },
  {
    src: "/projects/supervision-equipos-hvac.jpeg",
    title: "Conocer el sistema para resolverlo.",
    category: "Mantención y diagnóstico",
    text: "Inspección de unidades y componentes para recuperar su funcionamiento.",
  },
];
export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="EL TRABAJO HABLA POR NOSOTROS."
        description="Cada espacio tiene su desafío. Estas son algunas de las formas en que llevamos nuestra experiencia a proyectos comerciales, industriales y domiciliarios."
      />
      <TemucoFeature id="detalle" />
      <section className="section-space">
        <div className="shell section-top">
          <h2 className="display-heading">
            MÁS EXPERIENCIA
            <br />
            EN TERRENO.
          </h2>
          <p>
            Montajes, supervisión y soluciones en otros proyectos de nuestra
            trayectoria.
          </p>
        </div>
        <div className="shell portfolio-grid">
          {projects.map((project) => (
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
              <h2>{project.title}</h2>
              <p>{project.text}</p>
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
    </>
  );
}
