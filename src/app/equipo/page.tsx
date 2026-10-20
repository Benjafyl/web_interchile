import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { teamCards } from "@/data/team";
import { createPageMetadata } from "@/data/seo";
export const metadata: Metadata = createPageMetadata({
  title: "Nuestro equipo | Inter Chile Clima",
  description:
    "Conoce las áreas que coordinan cada proyecto, instalación y mantención de Inter Chile Clima.",
  path: "/equipo",
});
export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="PERSONAS QUE SE HACEN CARGO."
        description="La climatización funciona cuando hay un equipo coordinado detrás. Experiencia técnica y atención cercana, de la primera conversación al último ajuste."
      />
      <section className="section-space" id="detalle">
        <div className="shell">
          <figure className="team-panorama">
            <Image
              src="/projects/equipo-interchileclima-interior.jpeg"
              alt="Equipo de Inter Chile Clima con su vestimenta corporativa"
              fill
              sizes="100vw"
            />
          </figure>
          <div className="section-top team-heading">
            <h2 className="display-heading">
              DISTINTAS ÁREAS.
              <br />
              UN MISMO COMPROMISO.
            </h2>
            <p>
              Una empresa familiar donde cada función conecta con la siguiente
              para responder bien.
            </p>
          </div>
          <div className="team-areas">
            {teamCards.map((area, i) => (
              <article key={area.area}>
                <span>{"0" + (i + 1)}</span>
                <div>
                  <h3>{area.name}</h3>
                  <p className="team-role">{area.role}</p>
                </div>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="ESTAMOS LISTOS PARA ESCUCHARTE."
        text="Conecta con nuestro equipo y encontremos la solución que tu espacio necesita."
      />
    </>
  );
}
