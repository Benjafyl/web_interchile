import type { Metadata } from "next";
import { Building2, Factory, Home, Store } from "lucide-react";
import { ClientLogos } from "@/components/ClientLogos";
import { ImageCard } from "@/components/ImageCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { media } from "@/data/media";
import { sectors } from "@/data/projects";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Proyectos y experiencia en climatizacion | InterchileClima",
  description:
    "Experiencia en climatizacion para retail, banca, industria, centros comerciales, oficinas, comercios y domicilios.",
  path: "/proyectos",
});

const focusAreas = [
  { icon: Store, title: "Retail y centros comerciales", text: "Operacion continua para espacios de atencion al publico." },
  { icon: Building2, title: "Banca y oficinas", text: "Confort y eficiencia para equipos de trabajo y clientes." },
  { icon: Factory, title: "Industria", text: "Soluciones tecnicas para demandas de mayor escala." },
  { icon: Home, title: "Domicilios", text: "Instalacion, mantencion y reparacion para hogares y departamentos." },
];

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="Experiencia en climatizacion para empresas, comercio e industria"
        description="Proyectos, montaje, mantencion, reparacion y apoyo tecnico para retail, banca, industria, oficinas, comercios y domicilios."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Donde aportamos"
              title="Soluciones pensadas para cada operacion."
              description="El mismo estandar tecnico, adaptado al tipo de espacio y a la continuidad que requiere cada cliente."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal delay={(index % 3) as 0 | 1 | 2 | 3} key={area.title}>
                  <article className="h-full rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-lg">
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
              eyebrow="Galeria"
              title="Planificacion, montaje y supervision."
              description="Registro real de momentos de trabajo tecnico en proyectos de climatizacion."
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
              title="Experiencia con empresas de alto estandar."
              description="Trayectoria tecnica con Cencosud, Banco de Chile, BCI y CMPC, ademas de comercios, industrias y domicilios."
            />
          </Reveal>
          <Reveal delay={1} className="mt-10"><ClientLogos /></Reveal>
        </div>
      </section>
    </>
  );
}
