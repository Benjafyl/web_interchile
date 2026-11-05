import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { TemucoFeature } from "@/components/TemucoFeature";
import { CTASection } from "@/components/CTASection";
import { ClientLogos } from "@/components/ClientLogos";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Proyectos y experiencia | Interchile Clima",
  description:
    "Proyectos reales de climatización: Mall Portal Temuco, Mall Alto Las Condes y supervisión en Antofagasta. Fotografías y video de Interchile Clima en terreno.",
  path: "/proyectos",
});
const projects = [
  {
    src: "/projects/maniobra-grua-alto-las-condes.webp",
    title: "Montaje en Mall Alto Las Condes.",
    category: "Santiago de Chile · Montaje especializado",
    text: "Planificación y maniobras especializadas para equipos de mayor capacidad.",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    title: "Supervisión técnica en Antofagasta.",
    imagePosition: "center bottom",
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
    imagePosition: "center 10%",
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
        path="/proyectos"
        title="PROYECTOS DE CLIMATIZACIÓN EN CHILE."
        description="Nuestro trabajo en retail, centros comerciales e instalaciones de empresas. Fotografías reales de montaje, coordinación técnica y supervisión en terreno; también atendemos proyectos domiciliarios."
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
                  style={{ objectPosition: project.imagePosition }}
                  sizes="(min-width: 900px) 50vw, 100vw"
                />
              </figure>
              <p className="section-kicker">{project.category}</p>
              <h3>{project.title}</h3>
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
