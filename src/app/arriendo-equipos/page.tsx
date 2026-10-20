import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ButtonLink } from "@/components/ButtonLink";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Arriendo de equipos 150.000 y 300.000 BTU | Inter Chile Clima",
  description:
    "Climatización temporal para contingencias, eventos y refuerzo de operaciones. Equipos compactos de 150.000 y 300.000 BTU.",
  path: "/arriendo-equipos",
});
export default function ArriendoPage() {
  return (
    <>
      <PageHero
        eyebrow="Arriendo de equipos"
        title="LA CAPACIDAD QUE NECESITAS. EL TIEMPO QUE NECESITAS."
        description="Climatización temporal para contingencias, eventos y refuerzo de operaciones. Una solución coordinada para que tu actividad siga."
      />
      <section className="section-space" id="detalle">
        <div className="shell story-grid">
          <div>
            <p className="section-kicker">Equipos compactos</p>
            <h2 className="display-heading">
              UNA RESPUESTA
              <br />A OTRA ESCALA.
            </h2>
            <p className="body-copy">
              Evaluamos la demanda térmica y las condiciones de instalación para
              proponerte el equipo adecuado. Coordinamos el traslado, montaje y
              retiro según el alcance acordado.
            </p>
            <div className="rental-capacities">
              <div>
                <strong>150.000</strong>
                <span>BTU</span>
              </div>
              <div>
                <strong>300.000</strong>
                <span>BTU</span>
              </div>
            </div>
            <ButtonLink href="/contacto">Consultar disponibilidad</ButtonLink>
          </div>
          <figure className="story-photo">
            <Image
              src="/projects/maniobra-nocturna-equipo-hvac.webp"
              alt="Maniobra de equipo compacto de climatización en terreno"
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
            />
          </figure>
        </div>
      </section>
      <section className="scope-section section-space">
        <div className="shell">
          <div className="section-top">
            <h2 className="display-heading">
              CUANDO LO TEMPORAL
              <br />
              ES LO IMPORTANTE.
            </h2>
            <p>
              La disponibilidad y la capacidad se confirman después de evaluar
              tu requerimiento.
            </p>
          </div>
          <div className="use-cases">
            {[
              "Contingencias mientras se repara un sistema existente",
              "Eventos y espacios con alta ocupación",
              "Refuerzo para comercios, industrias y bodegas",
              "Apoyo durante obras o mantenciones programadas",
            ].map((item) => (
              <div key={item}>
                <Check aria-hidden="true" />
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="PONGAMOS TU PLAN EN MARCHA."
        text="Indícanos fechas, comuna, tipo de espacio y capacidad requerida. Evaluamos la disponibilidad y las condiciones del montaje."
        primaryLabel="Cotizar arriendo"
      />
    </>
  );
}
