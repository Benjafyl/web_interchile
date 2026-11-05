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
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createPageMetadata({
  title: "Climatización industrial y comercial en Chile | Interchile Clima",
  description:
    "Ingeniería, instalación, mantención HVAC y arriendo de equipos para industrias, retail y centros comerciales en Chile. Evalúa tu proyecto con Interchile Clima.",
  path: "/",
});
const work = [
  {
    src: "/projects/maniobra-grua-alto-las-condes.webp",
    alt: "Maniobra nocturna con grúa en Mall Alto Las Condes, Santiago de Chile",
    title: "Cuando la escala exige experiencia.",
    text: "Mall Alto Las Condes · Santiago de Chile",
    className: "project-wide",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    alt: "Equipo técnico en una instalación HVAC en Antofagasta",
    imagePosition: "center bottom",
    title: "El detalle también es parte del proyecto.",
    text: "Supervisión técnica · Antofagasta",
    className: "project-tall",
  },
];
const faq = [
  {
    q: "¿Qué sectores y tipos de instalaciones atienden?",
    a: "Desarrollamos proyectos de climatización para industrias, retail, centros comerciales, banca y oficinas. Evaluamos el alcance según la operación y los equipos de cada instalación. También atendemos requerimientos domiciliarios.",
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
                SERVICIOS HVAC
                <br />
                PARA EMPRESAS.
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
      <section
        className="sector-section section-space"
        aria-labelledby="sectors-heading"
      >
        <div className="shell">
          <div className="section-top">
            <div>
              <p className="section-kicker">Entendemos tu operación</p>
              <h2 className="display-heading" id="sectors-heading">
                Climatización para industria, retail y grandes espacios.
              </h2>
            </div>
            <p>
              Definimos la solución según el uso del lugar, sus equipos y las
              condiciones de trabajo.
            </p>
          </div>
          <div className="sector-grid">
            <article>
              <h3>Industria y empresas</h3>
              <p>
                Evaluación de capacidad, instalación y mantención de sistemas de
                climatización. Coordinación de accesos, montaje y ventanas de
                intervención según la operación.
              </p>
              <Link
                href="/servicios/ingenieria-proyectos-climatizacion"
                className="text-link"
              >
                Evaluar un proyecto industrial
              </Link>
            </article>
            <article>
              <h3>Retail y centros comerciales</h3>
              <p>
                Climatización para espacios de atención a público,
                remodelaciones y ampliaciones. Experiencia en terreno en Mall
                Portal Temuco y Mall Alto Las Condes.
              </p>
              <Link href="/proyectos" className="text-link">
                Ver nuestra experiencia en retail
              </Link>
            </article>
            <article>
              <h3>Oficinas y banca</h3>
              <p>
                Mantención preventiva, diagnóstico y reparación para espacios de
                trabajo. Revisamos las necesidades del sistema y coordinamos
                cada intervención.
              </p>
              <Link href="/servicios/mantencion-hvac" className="text-link">
                Conocer el servicio de mantención
              </Link>
            </article>
          </div>
          <p className="residential-note">
            ¿Necesitas aire acondicionado para tu hogar? También realizamos{" "}
            <Link href="/servicios/instalacion-aire-acondicionado">
              instalación
            </Link>
            , <Link href="/servicios/mantencion-hvac">mantención</Link> y{" "}
            <Link href="/servicios/reparacion-climatizacion">
              reparación domiciliaria
            </Link>
            .
          </p>
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
            EXPERIENCIA HVAC
            <br />
            QUE SE LLEVA
            <br />A TERRENO.
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
            Conoce Interchile Clima
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
                PROYECTOS REALES.
                <br />
                CLIMATIZACIÓN EN TERRENO.
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
                    style={{ objectPosition: item.imagePosition }}
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
      <section className="rental-band" id="climatizacion-temporal">
        <div className="rental-background" aria-hidden="true">
          <Image
            src="/projects/izaje-equipo-hvac.jpeg"
            alt=""
            fill
            sizes="(min-width: 740px) 68vw, 100vw"
          />
        </div>
        <div className="shell rental-grid">
          <div className="rental-content">
            <p className="section-kicker">Climatización temporal</p>
            <h2>
              ARRIENDO DE
              <br />
              CLIMATIZACIÓN.
            </h2>
            <p>
              Una contingencia, un evento o un refuerzo de capacidad. Equipos
              compactos por el tiempo que tu operación los requiera.
            </p>
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
            </div>
            <ButtonLink href="/arriendo-equipos" variant="light">
              <Snowflake aria-hidden="true" />
              Conocer el servicio de arriendo
            </ButtonLink>
            <p className="rental-logistics">
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
              PREGUNTAS SOBRE
              <br />
              CLIMATIZACIÓN HVAC.
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${siteConfig.url}/#webpage`,
          name: "Climatización industrial y comercial en Chile",
          url: siteConfig.url + "/",
          about: { "@id": `${siteConfig.url}/#organization` },
          isPartOf: { "@id": `${siteConfig.url}/#website` },
          inLanguage: "es-CL",
        }}
      />
    </>
  );
}
