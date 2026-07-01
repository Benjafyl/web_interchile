import type { Metadata } from "next";
import Image from "next/image";
import { UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { media } from "@/data/media";
import { teamCards } from "@/data/team";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Equipo técnico de InterchileClima SpA: gestión, operaciones, administración, equipo técnico y atención comercial.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Personas que responden en terreno."
        description="Experiencia técnica, coordinación y trabajo familiar para cada proyecto."
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
              eyebrow="Áreas"
              title="Un equipo coordinado de inicio a fin."
              description="Evaluación, ejecución técnica y atención comercial en una misma operación."
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
