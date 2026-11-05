import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { servicePages } from "@/data/service-pages";
import { createPageMetadata, absoluteUrl } from "@/data/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = createPageMetadata({
  title: "Servicios de climatización industrial y comercial | InterChile Clima",
  description:
    "Ingeniería, instalación, mantención, reparación, repuestos y arriendo HVAC para empresas, industria y retail en Chile. Revisa el alcance de cada servicio.",
  path: "/servicios",
});
const catalog = [
  ...servicePages.map((service) => ({
    title: service.shortTitle,
    description: service.description,
    href: "/servicios/" + service.slug,
  })),
  {
    title: "Arriendo de equipos de climatización",
    description:
      "Equipos compactos de 150.000 y 300.000 BTU para contingencias, eventos y refuerzo temporal de operaciones.",
    href: "/arriendo-equipos",
  },
];
export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        path="/servicios"
        title="SERVICIOS DE CLIMATIZACIÓN INDUSTRIAL Y COMERCIAL."
        description="Un equipo para evaluar, instalar y mantener tu sistema HVAC. Trabajamos con industrias, retail, centros comerciales, oficinas y empresas en todo Chile; también atendemos requerimientos domiciliarios."
      />
      <section className="section-space" id="detalle">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">
              Encuentra el servicio que necesita tu operación.
            </h2>
            <p>
              Revisa qué contempla cada servicio, en qué casos aplica y qué
              antecedentes nos ayudan a preparar tu cotización.
            </p>
          </div>
          <div className="service-catalog">
            {catalog.map((service, i) => (
              <article key={service.href}>
                <span className="scope-number">{"0" + (i + 1)}</span>
                <h3>
                  <Link href={service.href}>{service.title}</Link>
                </h3>
                <p>{service.description}</p>
                <Link href={service.href} className="text-link">
                  Ver alcance y solicitar evaluación
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="scope-section section-space">
        <div className="shell service-decision-grid">
          <div>
            <p className="section-kicker">Antes de elegir un servicio</p>
            <h2 className="display-heading">¿Qué necesitas resolver?</h2>
            <p className="body-copy">
              Un sistema nuevo o una ampliación parte con una evaluación de
              proyecto. Si el equipo funciona, pero necesita una revisión
              programada, corresponde evaluar mantención. Si ya presenta una
              falla, el diagnóstico permite definir la reparación.
            </p>
            <p className="body-copy">
              Para una necesidad temporal, revisamos la factibilidad de
              arriendo. Si ya tienes identificada una pieza, podemos evaluar el
              suministro del repuesto y su compatibilidad.
            </p>
          </div>
          <div className="quote-requirements">
            <h2>Una cotización con alcance claro.</h2>
            <p>
              Indícanos la ubicación, el tipo de instalación, los equipos y las
              fechas previstas. Definimos los trabajos incluidos y coordinamos
              los siguientes pasos según cada requerimiento.
            </p>
            <Link className="text-link" href="/contacto">
              Cuéntanos qué necesitas
            </Link>
            <Link className="text-link" href="/proyectos">
              Revisa proyectos de InterChile Clima
            </Link>
          </div>
        </div>
      </section>
      <CTASection
        title="EVALUEMOS TU SISTEMA DE CLIMATIZACIÓN."
        text="Conversemos sobre tu proyecto, mantención o contingencia. Atención directa y coordinación en todo Chile."
        primaryLabel="Solicitar evaluación"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Servicios de climatización de InterChile Clima",
          itemListElement: catalog.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: absoluteUrl(service.href),
          })),
        }}
      />
    </>
  );
}
