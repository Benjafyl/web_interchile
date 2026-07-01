import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ImageCard } from "@/components/ImageCard";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ServicesSelector } from "@/components/ServicesSelector";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Servicios integrales de climatización",
  description:
    "Servicios HVAC para empresas, comercios, industrias y domicilios: proyectos de climatización, instalación, mantención, reparación y repuestos.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Una respuesta HVAC para cada necesidad"
        description="Trabajamos en proyectos, instalaciones, mantenciones, reparaciones, repuestos y puesta en marcha. Elige un servicio para ver su alcance."
      />

      <section className="px-6 py-16 sm:py-20">
        <Reveal className="mx-auto max-w-6xl">
          <ServicesSelector />
        </Reveal>
      </section>

      <section className="bg-gray-50 px-6 py-16 sm:py-20">
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
        title="¿Necesitas una evaluación técnica?"
        text="Indícanos el tipo de espacio, servicio requerido y ubicación para revisar la mejor solución."
        primaryLabel="Cotizar servicio"
      />
    </>
  );
}
