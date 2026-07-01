"use client";

import { useState } from "react";
import {
  ClipboardCheck,
  PackageCheck,
  Snowflake,
  Thermometer,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { mainServices, type ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  project: ClipboardCheck,
  install: Snowflake,
  maintenance: Thermometer,
  repair: Wrench,
  parts: PackageCheck,
};

const serviceDetails: Record<string, { context: string; highlights: string[] }> = {
  "Proyectos de climatización": {
    context: "Para empresas, comercios e industrias que necesitan una solución diseñada según el espacio, uso y demanda térmica.",
    highlights: ["Levantamiento en terreno", "Dimensionamiento HVAC", "Coordinación técnica"],
  },
  "Instalación de equipos": {
    context: "Instalamos equipos para domicilios, oficinas y espacios comerciales, cuidando cada etapa de la puesta en marcha.",
    highlights: ["Split y multi split", "Equipos comerciales", "Puesta en marcha"],
  },
  "Mantención preventiva y correctiva": {
    context: "Planes de revisión y mantención para anticipar fallas, mejorar la eficiencia y extender la vida útil de los equipos.",
    highlights: ["Limpieza técnica", "Revisión de rendimiento", "Informe y recomendación"],
  },
  "Reparación de sistemas de clima": {
    context: "Diagnosticamos fallas de operación, refrigeración y componentes para recuperar el funcionamiento del sistema.",
    highlights: ["Diagnóstico en terreno", "Cambio de componentes", "Prueba operacional"],
  },
  "Suministro de repuestos": {
    context: "Apoyamos la continuidad operativa con repuestos compatibles para equipos domiciliarios, comerciales y de mayor capacidad.",
    highlights: ["Evaluación de compatibilidad", "Repuestos HVAC", "Apoyo técnico"],
  },
  "Montaje y puesta en marcha": {
    context: "Coordinamos el montaje, la revisión final y la entrega de sistemas preparados para operar de forma segura.",
    highlights: ["Montaje especializado", "Verificación final", "Entrega operativa"],
  },
};

export function ServicesSelector() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const selected = mainServices.find((service) => service.title === selectedTitle);
  const selectedDetail = selected ? serviceDetails[selected.title] : null;

  return (
    <div>
      <div className="grid overflow-hidden rounded-md border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
        {mainServices.map((service) => {
          const Icon = icons[service.icon];
          const isSelected = selectedTitle === service.title;

          return (
            <button
              aria-pressed={isSelected}
              className={`group flex min-h-32 items-center gap-4 px-5 py-5 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#c30f3f] ${
                isSelected
                  ? "bg-[#30343a] text-white hover:bg-[#30343a]"
                  : "bg-white text-gray-950 hover:bg-rose-50"
              }`}
              key={service.title}
              onClick={() => setSelectedTitle(isSelected ? null : service.title)}
              type="button"
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md transition ${isSelected ? "bg-white/10 text-[#4fb7d8]" : "bg-rose-50 text-[#c30f3f] group-hover:bg-white"}`}>
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-base font-semibold leading-5">{service.title}</span>
                <span className={`mt-2 block text-xs font-semibold uppercase tracking-[0.12em] ${isSelected ? "text-[#99d9ec]" : "text-gray-500"}`}>
                  {isSelected ? "Ocultar detalle" : "Ver detalle"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {selected ? (
        <div className="mt-5 grid gap-6 rounded-md border border-[#4fb7d8]/40 bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c30f3f]">{selected.title}</p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-gray-700">{selected.summary}</p>
            {selectedDetail ? (
              <>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">{selectedDetail.context}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedDetail.highlights.map((highlight) => (
                    <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-[#256c87]" key={highlight}>
                      {highlight}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink href="/contacto">
              Cotizar servicio
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <button
              aria-label="Cerrar detalle"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition hover:border-[#c30f3f] hover:text-[#c30f3f]"
              onClick={() => setSelectedTitle(null)}
              type="button"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
