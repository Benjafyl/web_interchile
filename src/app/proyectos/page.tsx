import type { Metadata } from "next";
import { Building2, Factory, Store } from "lucide-react";
import { ClientLogos } from "@/components/ClientLogos";
import { ImageCard } from "@/components/ImageCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { media } from "@/data/media";
import { sectors } from "@/data/projects";

export const metadata: Metadata = {
  title: "Proyectos y experiencia",
  description:
    "Experiencia de InterchileClima en climatización para retail, centros comerciales, banca, industria, oficinas, comercio y domicilios.",
};

const focusAreas = [
  { icon: Store, title: "Retail y comercio", text: "Operación continua para espacios de atención al público." },
  { icon: Building2, title: "Oficinas y banca", text: "Confort y eficiencia para equipos de trabajo." },
  { icon: Factory, title: "Industria", text: "Soluciones técnicas para demandas de mayor escala." },
];

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Experiencia que se ve en terreno."
        description="Proyectos, montaje, mantención y reparación para operaciones comerciales, industriales y corporativas."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Dónde aportamos"
              title="Soluciones pensadas para cada operación."
              description="El mismo estándar técnico, adaptado a cada espacio."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal delay={(index + 1) as 1 | 2 | 3} key={area.title}>
                  <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-lg">
                    <Icon aria-hidden="true" className="h-7 w-7 text-[#c30f3f]" />
                    <h2 className="mt-5 text-xl font-semibold text-gray-950">{area.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{area.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={1} className="mt-8 flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700" key={sector}>
                {sector}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Galería"
              title="Planificación, montaje y supervisión."
              description="Registro real de algunos momentos de nuestro trabajo técnico."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {media.projects.map((item, index) => (
              <Reveal delay={(index % 3) as 0 | 1 | 2 | 3} key={item.src}>
                <ImageCard {...item} aspect="aspect-[16/10]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Clientes"
              title="Trayectoria con empresas de alto estándar."
              description="Experiencia técnica en retail, banca e industria."
            />
          </Reveal>
          <Reveal delay={1} className="mt-10"><ClientLogos /></Reveal>
        </div>
      </section>
    </>
  );
}
