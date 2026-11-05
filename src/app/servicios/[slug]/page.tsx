import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MessageSquareText } from "lucide-react";
import { servicePages, quoteHref } from "@/data/service-pages";
import { absoluteUrl, createPageMetadata } from "@/data/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;
export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (!service) notFound();
  return createPageMetadata({
    title: `${service.shortTitle} en Chile | Interchile Clima`,
    description: service.description,
    path: `/servicios/${slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePages.find((page) => page.slug === slug);
  if (!service) notFound();
  const path = `/servicios/${slug}`;
  return (
    <>
      <section className="page-hero service-detail-hero">
        <div className="shell">
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: "/servicios" },
              { name: service.shortTitle, href: path },
            ]}
          />
          <div className="page-hero-grid">
            <h1>{service.title}</h1>
            <div>
              <p>{service.description}</p>
              <ButtonLink href={quoteHref(service.quoteService)}>
                <MessageSquareText aria-hidden="true" />
                Solicitar evaluación
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space" id="detalle">
        <div className="shell service-detail-intro">
          <div>
            <p className="section-kicker">Atención coordinada en todo Chile</p>
            <h2 className="display-heading">
              Una solución definida por tu operación.
            </h2>
            {service.introduction.map((text) => (
              <p className="body-copy" key={text}>
                {text}
              </p>
            ))}
          </div>
          <figure>
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={service.imageWidth}
              height={service.imageHeight}
              loading="eager"
              sizes="(min-width: 900px) 42vw, 90vw"
            />
            <figcaption>
              Registro real de Interchile Clima en terreno.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="scope-section section-space">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">¿Qué contempla el servicio?</h2>
            <p>
              Los trabajos incluidos se especifican en la propuesta técnica y
              económica de cada requerimiento.
            </p>
          </div>
          <div className="principles-grid">
            {service.scope.map((item) => (
              <article key={item.title}>
                <Check aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell service-decision-grid">
          <div>
            <h2>Aplicaciones y tipos de instalación</h2>
            <ul className="checked-list">
              {service.applications.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="text-link" href="/proyectos">
              Ver proyectos y fotografías de nuestro trabajo
            </Link>
          </div>
          <div className="quote-requirements">
            <p className="section-kicker">Para preparar tu cotización</p>
            <h2>¿Qué antecedentes necesitamos?</h2>
            <ul>
              {service.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ButtonLink href={quoteHref(service.quoteService)}>
              Cotizar este servicio
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="section-kicker">Respuestas para decidir</p>
            <h2 className="display-heading">Preguntas sobre este servicio</h2>
          </div>
          <div className="faq-list">
            {service.questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <h2 className="related-heading">Otros servicios de climatización</h2>
          <nav className="related-services" aria-label="Servicios relacionados">
            {servicePages
              .filter((page) => page.slug !== slug)
              .map((page) => (
                <Link key={page.slug} href={`/servicios/${page.slug}`}>
                  {page.shortTitle}
                </Link>
              ))}
            <Link href="/arriendo-equipos">
              Arriendo de equipos de climatización
            </Link>
          </nav>
        </div>
      </section>
      <CTASection
        title="EVALUEMOS TU REQUERIMIENTO."
        text="Cuéntanos la ubicación, los equipos y lo que necesitas resolver. Coordinamos el siguiente paso según tu operación."
        primaryLabel="Solicitar cotización"
        primaryHref={quoteHref(service.quoteService)}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": absoluteUrl(path) + "#service",
          name: service.title,
          serviceType: service.title,
          description: service.description,
          url: absoluteUrl(path),
          image: absoluteUrl(service.image),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: { "@type": "Country", name: "Chile" },
        }}
      />
    </>
  );
}
