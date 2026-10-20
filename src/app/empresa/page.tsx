import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ButtonLink";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Nuestra empresa | Inter Chile Clima",
  description:
    "Empresa familiar de climatización con más de 23 años de experiencia. Soluciones HVAC y atención en todo Chile.",
  path: "/empresa",
});
export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="EXPERIENCIA QUE SE LLEVA A TERRENO."
        description="Somos InterchileClima SpA. Una empresa familiar que combina experiencia técnica, trato directo y compromiso con cada operación."
      />
      <section className="section-space" id="detalle">
        <div className="shell story-grid">
          <figure className="story-photo">
            <Image
              src="/projects/coordinacion-planos-hvac.jpeg"
              alt="Equipo coordinando un proyecto a partir de sus planos"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </figure>
          <div>
            <p className="section-kicker">De principio a fin</p>
            <h2 className="display-heading">
              RESOLVER BIEN.
              <br />
              RESPONDER SIEMPRE.
            </h2>
            <p className="body-copy">
              Detrás de cada sistema hay personas que necesitan trabajar,
              atender o vivir en un espacio confortable. Por eso miramos más
              allá del equipo: entendemos el lugar, la demanda y la continuidad
              que necesitas.
            </p>
            <p className="body-copy">
              Integramos ingeniería, instalación, mantención, reparación,
              repuestos y apoyo temporal. Desde una solución domiciliaria hasta
              una intervención de alta complejidad.
            </p>
            <ButtonLink href="/equipo" variant="ghost">
              Conoce a nuestro equipo
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="metric-band">
        <div className="shell metric-grid">
          <div>
            <strong>23+</strong>
            <span>Años de experiencia HVAC</span>
          </div>
          <div>
            <strong>Chile</strong>
            <span>Cobertura coordinada en todo el país</span>
          </div>
          <div>
            <strong>Integral</strong>
            <span>Un equipo para cada etapa</span>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">
              COMPROMISOS
              <br />
              QUE SE NOTAN.
            </h2>
            <p>
              La calidad de una solución también está en cómo se hace el
              trabajo.
            </p>
          </div>
          <div className="principles-grid">
            {[
              {
                title: "Responsabilidad técnica",
                text: "Evaluamos antes de intervenir. Definimos alcances claros y seguimos cada requerimiento.",
              },
              {
                title: "Cercanía real",
                text: "Atención directa, trato familiar y coordinación transparente de principio a fin.",
              },
              {
                title: "Calidad para durar",
                text: "Proponemos soluciones pensadas para operar bien, recuperar eficiencia y extender la vida útil.",
              },
            ].map((item) => (
              <article key={item.title}>
                <Check aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="CONOZCAMOS TU DESAFÍO."
        text="Tenemos la experiencia. Tú tienes el próximo proyecto."
      />
    </>
  );
}
