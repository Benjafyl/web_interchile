import type { Metadata } from "next";
import Image from "next/image";
import { UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { media } from "@/data/media";
import { teamCards } from "@/data/team";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Equipo tecnico de climatizacion | InterchileClima",
  description:
    "Equipo tecnico y comercial comprometido con entregar soluciones de climatizacion eficientes, confiables y adaptadas a cada cliente.",
  path: "/equipo",
});

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Equipo tecnico y comercial enfocado en responder bien"
        description="Experiencia tecnica, coordinacion y trabajo familiar para proyectos, instalaciones, mantenciones, reparaciones y requerimientos de climatizacion."
      />

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
              <Image
                alt={media.team.alt}
                className="object-cover object-[center_38%]"
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                src={media.team.src}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#23272d]/85 to-transparent p-6 text-white">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.13em] text-[#99d9ec]">
                  <UsersRound aria-hidden="true" className="h-4 w-4" />
                  InterchileClima en terreno
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <SectionHeader
              eyebrow="Areas"
              title="Un equipo coordinado de inicio a fin."
              description="Evaluacion, ejecucion tecnica y atencion comercial en una misma operacion."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {teamCards.map((card, index) => (
              <Reveal delay={(index % 3) as 0 | 1 | 2 | 3} key={card.area}>
                <TeamCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
