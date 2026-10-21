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
          <div className="team-field-grid">
            <figure>
              <Image
                src="/projects/portal-temuco-2026/equipo-interchile.webp"
                alt="Tres integrantes de Inter Chile Clima con cascos y vestimenta corporativa durante la visita a Mall Portal Temuco"
                width={960}
                height={1280}
                sizes="(min-width: 900px) 40vw, 90vw"
              />
              <figcaption>
                Una empresa familiar, presente en terreno.
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/projects/portal-temuco-2026/reunion-en-terreno.webp"
                alt="Equipo coordinando los detalles de la ampliación de Mall Portal Temuco"
                width={960}
                height={1280}
                sizes="(min-width: 900px) 40vw, 90vw"
              />
              <figcaption>
                Escuchar, coordinar y resolver juntos. Temuco, 2026.
              </figcaption>
            </figure>
          </div>
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
