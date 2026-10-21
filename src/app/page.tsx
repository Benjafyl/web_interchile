import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, FolderOpen, MapPin, Plus, Snowflake } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TemucoFeature } from "@/components/TemucoFeature";
import { ButtonLink } from "@/components/ButtonLink";
import { ClientLogos } from "@/components/ClientLogos";
import { ServicesSelector } from "@/components/ServicesSelector";
import { CTASection } from "@/components/CTASection";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Inter Chile Clima | El clima bajo control",
  description:
    "Ingeniería, instalación y mantención de climatización para empresas, industrias y hogares. Más de 23 años de experiencia en todo Chile.",
  path: "/",
});
const work = [
  {
    src: "/projects/maniobra-grua-alto-las-condes.webp",
    alt: "Maniobra nocturna con grúa en un centro comercial",
    title: "Cuando la escala exige experiencia.",
    text: "Montaje especializado · Climatización comercial",
    className: "project-wide",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    alt: "Equipo técnico en una instalación HVAC en Antofagasta",
    title: "El detalle también es parte del proyecto.",
    text: "Supervisión técnica · Antofagasta",
    className: "project-tall",
  },
];
const faq = [
  {
    q: "¿Trabajan con empresas y también con hogares?",
    a: "Sí. Desarrollamos proyectos para retail, banca, oficinas e industria, y también instalamos, mantenemos y reparamos equipos de aire acondicionado domiciliarios. El alcance se define según cada espacio.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Escríbenos por WhatsApp o completa el formulario de contacto con el servicio, la ubicación y una descripción de lo que necesitas. Con esos antecedentes coordinamos la evaluación y preparamos una propuesta.",
  },
  {
    q: "¿Atienden fuera de Santiago?",
    a: "Sí, atendemos requerimientos en todo Chile. La visita y la ejecución se coordinan según la ubicación, las condiciones del lugar y el alcance del trabajo.",
  },
  {
    q: "¿Puedo arrendar un equipo para una contingencia?",
    a: "Contamos con equipos compactos de 150.000 y 300.000 BTU para necesidades temporales. Indícanos las fechas, la ubicación y las condiciones del espacio para evaluar la capacidad y la disponibilidad.",
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <section className="trust-strip">
        <div className="shell trust-inner">
          <p>
            Experiencia que nos conecta
            <br />
            <strong>con grandes operaciones.</strong>
          </p>
          <ClientLogos />
        </div>
      </section>
      <section className="section-space" id="soluciones">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Lo que hacemos</p>
              <h2 className="display-heading">
                UN EQUIPO.
                <br />
                TODAS LAS SOLUCIONES.
              </h2>
            </div>
            <p>
              Del primer diagnóstico a la puesta en marcha.
              <br />
              Resolvemos cada etapa de tu climatización con una mirada técnica y
              cercana.
            </p>
          </div>
          <ServicesSelector />
        </div>
      </section>
      <section className="about-feature">
        <div className="about-image temuco-about-image">
          <Image
            src="/projects/portal-temuco-2026/revision-planos.webp"
            alt="Revisión de planos en terreno durante la ampliación de Mall Portal Temuco 2026"
            fill
            sizes="(min-width: 900px) 50vw, 100vw"
          />
        </div>
        <div className="about-copy">
          <p className="section-kicker">Nuestra forma de hacer las cosas</p>
          <h2>
            LA CONFIANZA
            <br />
            SE CONSTRUYE
            <br />
            EN TERRENO.
          </h2>
          <p>
            Somos una empresa familiar con más de 23 años de experiencia. Nos
            involucramos en cada desafío: escuchamos, evaluamos y llevamos la
            solución hasta donde tiene que funcionar.
          </p>
          <ul>
            <li>
              <Check aria-hidden="true" />
              Trato directo y coordinación clara.
            </li>
            <li>
              <Check aria-hidden="true" />
              Experiencia comercial, industrial y domiciliaria.
            </li>
            <li>
              <Check aria-hidden="true" />
              Seguimiento después de la instalación.
            </li>
          </ul>
          <ButtonLink href="/empresa" variant="light">
            Conoce Inter Chile Clima
          </ButtonLink>
        </div>
      </section>
      <TemucoFeature />
      <section className="section-space">
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Trabajo real</p>
              <h2 className="display-heading">
                MÁS QUE EQUIPOS.
                <br />
                SOLUCIONES EN ACCIÓN.
              </h2>
            </div>
            <ButtonLink href="/proyectos" variant="ghost">
              Explorar proyectos
            </ButtonLink>
          </div>
          <div className="project-editorial">
            {work.map((item) => (
              <Link
                href="/proyectos"
                key={item.src}
                className={"project-link " + item.className}
              >
                <figure>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 900px) 60vw, 100vw"
                  />
                  <span className="project-peek">
                    <FolderOpen aria-hidden="true" />
                    Ver proyecto
                  </span>
                </figure>
                <p>{item.text}</p>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="rental-band">
        <div className="shell rental-grid">
          <div>
            <span className="rental-icon">
              <Snowflake aria-hidden="true" />
            </span>
            <p className="section-kicker">Climatización temporal</p>
            <h2>
              FRÍO DONDE
              <br />
              LO NECESITAS.
            </h2>
            <p>
              Una contingencia, un evento o un refuerzo de capacidad. Equipos
              compactos por el tiempo que tu operación los requiera.
            </p>
            <ButtonLink href="/arriendo-equipos" variant="secondary">
              Conocer el servicio de arriendo
            </ButtonLink>
          </div>
          <div className="capacity-list">
            <div>
              <span>Capacidad disponible</span>
              <strong>
                150.000<small>BTU</small>
              </strong>
            </div>
            <div>
              <span>Para mayores demandas</span>
              <strong>
                300.000<small>BTU</small>
              </strong>
            </div>
            <p>
              <MapPin aria-hidden="true" />
              Traslado y montaje coordinados según el proyecto.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">
              DE TU NECESIDAD
              <br />A UNA SOLUCIÓN.
            </h2>
            <p>Un proceso claro, con personas que se hacen cargo.</p>
          </div>
          <ol className="process-line">
            {[
              {
                title: "Te escuchamos",
                text: "Nos cuentas qué necesitas, dónde y cómo funciona tu operación.",
              },
              {
                title: "Lo evaluamos",
                text: "Revisamos las condiciones técnicas y definimos la solución adecuada.",
              },
              {
                title: "Lo resolvemos",
                text: "Coordinamos la ejecución, la puesta en marcha y el seguimiento.",
              },
            ].map((step, i) => (
              <li key={step.title}>
                <span className="process-number">{"0" + (i + 1)}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="section-kicker">Antes de empezar</p>
            <h2 className="display-heading">
              HABLEMOS
              <br />
              CON CLARIDAD.
            </h2>
            <p>
              Estas son algunas de las preguntas
              <br />
              que recibimos con más frecuencia.
            </p>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <Plus aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="HABLEMOS DE TU PRÓXIMO PROYECTO."
        text="Cuéntanos qué necesitas. Encontremos la mejor forma de resolverlo."
      />
    </>
  );
}
