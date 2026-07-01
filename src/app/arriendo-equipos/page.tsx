import type { Metadata } from "next";
import { CheckCircle2, Snowflake, Truck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ImageCard } from "@/components/ImageCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Arriendo de equipos de climatizacion 150.000 y 300.000 BTU | InterchileClima",
  description:
    "Arriendo de equipos compactos de climatizacion para eventos, contingencias, comercios, industrias y apoyo temporal en todo Chile.",
  path: "/arriendo-equipos",
});

const useCases = [
  "Apoyo temporal para contingencias HVAC",
  "Eventos y espacios con alta ocupacion",
  "Comercios, industrias y bodegas",
  "Refuerzo mientras se repara un sistema existente",
];

const capabilities = [
  { icon: Snowflake, title: "150.000 y 300.000 BTU", text: "Capacidades compactas para distintas demandas de climatizacion temporal." },
  { icon: Truck, title: "Coordinacion en terreno", text: "Planificacion de traslado, montaje, retiro y condiciones operativas." },
  { icon: CheckCircle2, title: "Linea secundaria", text: "Disponible como complemento a proyectos, mantenciones y contingencias." },
];

export default function ArriendoEquiposPage() {
  return (
    <>
      <PageHero
        eyebrow="Arriendo de equipos"
        title="Arriendo de equipos compactos de climatizacion"
        description="Solucion temporal para eventos, contingencias, comercios e industrias que requieren apoyo de climatizacion sin inversion permanente en equipos."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Uso recomendado"
              title="Apoyo temporal cuando la continuidad no puede esperar."
              description="El arriendo de equipos compactos no reemplaza un proyecto HVAC definitivo, pero es util para contingencias, refuerzos temporales y necesidades puntuales."
            />
            <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              {useCases.map((item) => (
                <li className="flex gap-3 rounded-md border border-gray-200 bg-white p-4" key={item}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#56b91f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <ImageCard
              aspect="aspect-[16/10]"
              src="/projects/maniobra-nocturna-equipo-hvac.webp"
              alt="Arriendo de equipo compacto de climatizacion para apoyo temporal"
              title="Equipos compactos en terreno"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={(index + 1) as 1 | 2 | 3} key={item.title}>
                  <article className="h-full rounded-md border border-gray-200 bg-white p-6 shadow-sm">
                    <Icon aria-hidden="true" className="h-7 w-7 text-[#c30f3f]" />
                    <h2 className="mt-5 text-xl font-semibold text-gray-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Cotiza arriendo de equipos compactos."
        text="Indicanos capacidad requerida, fechas, comuna, tipo de espacio y condiciones de instalacion para evaluar disponibilidad."
        primaryLabel="Solicitar cotizacion"
      />
    </>
  );
}
