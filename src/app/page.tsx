import type { Metadata } from "next";
import { ArrowRight, Gauge, Search, ShieldCheck, ThermometerSun, TriangleAlert, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ClientLogos } from "@/components/ClientLogos";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ImageCard } from "@/components/ImageCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicesSelector } from "@/components/ServicesSelector";
import { media } from "@/data/media";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "InterchileClima | Climatizacion industrial, comercial y domiciliaria",
  description:
    "Soluciones integrales de climatizacion para empresas, centros comerciales, industrias, comercios y domicilios. Mas de 23 anos de experiencia y atencion en todo Chile.",
  path: "/",
});

const problems = [
  {
    icon: TriangleAlert,
    title: "Fallas que interrumpen",
    text: "Respondemos ante equipos que dejan de cumplir su funcion.",
  },
  {
    icon: ThermometerSun,
    title: "Espacios sin confort",
    text: "Recuperamos condiciones adecuadas para personas y operacion.",
  },
  {
    icon: Gauge,
    title: "Equipos con bajo rendimiento",
    text: "Detectamos oportunidades antes de que se transformen en una detencion.",
  },
];

const process = [
  { icon: Search, number: "01", title: "Evaluamos", text: "Levantamiento y diagnostico." },
  { icon: Wrench, number: "02", title: "Ejecutamos", text: "Solucion tecnica en terreno." },
  { icon: ShieldCheck, number: "03", title: "Acompanamos", text: "Continuidad y seguimiento." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm font-medium text-gray-700">
          <span><strong className="text-[#c30f3f]">23+ anos</strong> de experiencia HVAC</span>
          <span><strong className="text-[#c30f3f]">Empresas, industria y retail</strong></span>
          <span><strong className="text-[#c30f3f]">Atencion en todo Chile</strong></span>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24" id="problemas">
        <Reveal className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Lo que resolvemos"
            title="Cuando el clima falla, la operacion lo siente."
            description="Entramos con una respuesta tecnica clara para recuperar continuidad, eficiencia y confort."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <article className="group border-t-2 border-gray-200 pt-6 transition hover:border-[#c30f3f]" key={problem.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-rose-50 text-[#c30f3f] transition group-hover:bg-[#c30f3f] group-hover:text-white">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-gray-950">{problem.title}</h2>
                  <p className="mt-2 max-w-sm leading-7 text-gray-600">{problem.text}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24" id="proceso">
        <Reveal className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Nuestra forma de trabajar"
              title="Menos incertidumbre. Mas control tecnico."
              description="Una ruta simple para resolver desde una mantencion puntual hasta un proyecto completo."
            />
            <ButtonLink className="mt-7" href="/servicios" variant="secondary">
              Ver servicios
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <article className="relative overflow-hidden rounded-md bg-[#30343a] p-6 text-white" key={step.number}>
                  <span className="absolute right-4 top-3 text-5xl font-semibold text-white/10">{step.number}</span>
                  <Icon aria-hidden="true" className="h-7 w-7 text-[#4fb7d8]" />
                  <h2 className="mt-10 text-xl font-semibold">{step.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-gray-200">{step.text}</p>
                </article>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <Reveal className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Servicios"
            title="Servicios de climatizacion para cada necesidad."
            description="Proyectos HVAC, instalacion de aire acondicionado, mantencion, reparacion, repuestos y arriendo de equipos compactos como apoyo temporal."
          />
          <div className="mt-10">
            <ServicesSelector />
          </div>
        </Reveal>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Experiencia comprobada"
            title="La confianza se construye en terreno."
            description="Trayectoria apoyando operaciones de alto estandar en retail, banca, industria y comercio."
          />
          <div className="mt-10"><ClientLogos /></div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Trabajo real"
              title="Seis formas de resolver un desafio HVAC."
              description="Desde una instalacion domiciliaria hasta una maniobra de alta complejidad."
            />
            <ButtonLink href="/proyectos" variant="ghost" className="shrink-0">
              Ver proyectos
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {media.services.map((item, index) => (
              <Reveal delay={(index % 3) as 0 | 1 | 2 | 3} key={item.src}>
                <ImageCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Tu proxima decision HVAC puede empezar hoy."
        text="Cuentanos el problema, el tipo de espacio y la ubicacion. Nosotros evaluamos la mejor respuesta tecnica."
      />
    </>
  );
}
