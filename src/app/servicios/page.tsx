import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ImageCard } from "@/components/ImageCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServicesSelector } from "@/components/ServicesSelector";
import { detailedServices } from "@/data/services";
import { media } from "@/data/media";
import { createPageMetadata } from "@/data/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Servicios de climatizacion HVAC para empresas y domicilios | InterchileClima",
  description:
    "Proyectos de climatizacion, instalacion de aire acondicionado, mantencion preventiva y correctiva, reparacion, repuestos y arriendo de equipos compactos.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios HVAC para empresas, comercios, industrias y domicilios"
        description="Integramos proyectos de climatizacion, instalacion, mantencion HVAC, reparacion, repuestos y arriendo de equipos compactos segun la necesidad de cada cliente."
      />

      <section className="px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <ServicesSelector />
        </Reveal>
      </section>

      <section className="bg-gray-50 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeader
              eyebrow="Alcance tecnico"
              title="Lo que puede incluir cada servicio."
              description="El alcance final depende del espacio, tipo de equipo y condicion de operacion."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm" key={service.title}>
                <h2 className="text-xl font-semibold text-gray-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-600">{service.summary}</p>
                {service.includes ? (
                  <ul className="mt-5 space-y-2 text-sm text-gray-700">
                    {service.includes.slice(0, 5).map((item) => (
                      <li className="flex gap-2" key={item}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56b91f]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {media.services.slice(0, 3).map((item, index) => (
              <Reveal delay={(index + 1) as 1 | 2 | 3} key={item.src}>
                <ImageCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Necesitas una evaluacion tecnica?"
        text="Indicanos el tipo de espacio, servicio requerido y ubicacion para revisar la mejor solucion de climatizacion."
        primaryLabel="Cotizar servicio"
      />
    </>
  );
}
