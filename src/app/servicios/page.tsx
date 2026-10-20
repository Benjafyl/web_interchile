import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ServicesSelector } from "@/components/ServicesSelector";
import { detailedServices } from "@/data/services";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Servicios de climatización HVAC | Inter Chile Clima",
  description:
    "Ingeniería, instalación, mantención, reparación, repuestos y arriendo de climatización para empresas y hogares.",
  path: "/servicios",
});
export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="CADA NECESIDAD. UNA RESPUESTA TÉCNICA."
        description="Un sistema nuevo, un equipo que falla o una operación que debe continuar. Integramos las soluciones que tu espacio necesita."
      />
      <section className="section-space" id="detalle">
        <div className="shell">
          <ServicesSelector />
        </div>
      </section>
      <section className="scope-section section-space">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">
              EL ALCANCE
              <br />
              HACE LA DIFERENCIA.
            </h2>
            <p>
              Definimos cada intervención según el equipo, el espacio y sus
              condiciones de operación.
            </p>
          </div>
          <div className="scope-grid">
            {detailedServices.map((service, i) => (
              <article key={service.icon}>
                <span className="scope-number">{"0" + (i + 1)}</span>
                <h3>{service.title}</h3>
                <ul>
                  {service.includes?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="PARTAMOS POR UN BUEN DIAGNÓSTICO."
        text="Dinos qué tipo de espacio tienes y qué necesitas resolver. Revisamos juntos el siguiente paso."
      />
    </>
  );
}
