import type { Metadata } from "next";
import { Handshake, MapPinned, ShieldCheck, Target } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "InterchileClima SpA es una empresa familiar chilena con más de 23 años de experiencia en soluciones integrales de climatización.",
};

const principles = [
  { icon: ShieldCheck, title: "Responsabilidad", text: "Compromisos técnicos claros." },
  { icon: Handshake, title: "Cercanía", text: "Atención directa y acompañamiento." },
  { icon: Target, title: "Calidad técnica", text: "Soluciones pensadas para durar." },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Experiencia técnica con trato cercano."
        description="Somos una empresa familiar de climatización con más de 23 años atendiendo empresas, industrias, comercios y domicilios."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Nuestro enfoque"
              title="Resolver bien, desde el primer diagnóstico."
              description="Combinamos evaluación en terreno, experiencia HVAC y seguimiento para responder a desafíos de distintas escalas."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal delay={1}>
              <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-semibold text-[#c30f3f]">23+</p>
                <p className="mt-2 text-sm text-gray-600">años de experiencia</p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-semibold text-[#c30f3f]">B2B</p>
                <p className="mt-2 text-sm text-gray-600">retail, banca e industria</p>
              </div>
            </Reveal>
            <Reveal delay={3}>
              <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-semibold text-[#c30f3f]">Chile</p>
                <p className="mt-2 text-sm text-gray-600">atención en todo el país</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Lo que nos guía"
              title="Técnica, cumplimiento y confianza."
              description="Principios simples para cada visita, proyecto y entrega."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal delay={(index + 1) as 1 | 2 | 3} key={item.title}>
                  <article className="h-full rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-lg">
                    <Icon aria-hidden="true" className="h-7 w-7 text-[#4fb7d8]" />
                    <h2 className="mt-5 text-xl font-semibold text-gray-950">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-6xl rounded-md bg-[#30343a] p-8 text-white sm:p-10">
          <MapPinned aria-hidden="true" className="h-9 w-9 text-[#56b91f]" />
          <h2 className="mt-5 text-3xl font-semibold">Atención en todo Chile.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-gray-200">
            Operamos con oficina virtual y coordinación en terreno según cada requerimiento.
          </p>
        </Reveal>
      </section>

      <CTASection
        title="Conversemos sobre tu requerimiento."
        text="Proyectos, instalación, mantención, reparación y repuestos para clientes en todo Chile."
      />
    </>
  );
}
