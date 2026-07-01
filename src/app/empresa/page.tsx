import type { Metadata } from "next";
import { Handshake, MapPinned, ShieldCheck, Target } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Empresa de climatizacion con 23+ anos de experiencia | InterchileClima",
  description:
    "Conoce InterchileClima, empresa familiar especializada en soluciones HVAC, instalacion, mantencion, reparacion, repuestos y proyectos de climatizacion en Chile.",
  path: "/empresa",
});

const principles = [
  { icon: ShieldCheck, title: "Responsabilidad", text: "Compromisos tecnicos claros y seguimiento de cada requerimiento." },
  { icon: Handshake, title: "Cercania", text: "Atencion directa, trato familiar y coordinacion transparente." },
  { icon: Target, title: "Calidad tecnica", text: "Soluciones pensadas para operar bien y durar en el tiempo." },
];

export default function EmpresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Empresa"
        title="Empresa familiar de climatizacion con 23+ anos de experiencia"
        description="InterchileClima SpA entrega soluciones HVAC para empresas, industrias, comercios y domicilios, con atencion en todo Chile y una forma de trabajo cercana."
      />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Nuestro enfoque"
              title="Resolver bien, desde el primer diagnostico."
              description="Combinamos evaluacion en terreno, experiencia HVAC y seguimiento para responder a desafios comerciales, industriales y domiciliarios."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            <Reveal delay={1}>
              <div className="rounded-md border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-3xl font-semibold text-[#c30f3f]">23+</p>
                <p className="mt-2 text-sm text-gray-600">anos de experiencia</p>
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
                <p className="mt-2 text-sm text-gray-600">atencion en todo el pais</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Lo que nos guia"
              title="Tecnica, cumplimiento y confianza."
              description="Principios simples para cada visita, proyecto, mantencion, reparacion y entrega."
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
          <h2 className="mt-5 text-3xl font-semibold">Atencion en todo Chile.</h2>
          <p className="mt-3 max-w-2xl leading-7 text-gray-200">
            Operamos con oficina virtual y coordinacion en terreno segun cada requerimiento.
          </p>
        </Reveal>
      </section>

      <CTASection
        title="Conversemos sobre tu requerimiento."
        text="Proyectos, instalacion, mantencion, reparacion, repuestos y arriendo de equipos para clientes en todo Chile."
      />
    </>
  );
}
