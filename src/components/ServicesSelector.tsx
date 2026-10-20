"use client";
import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { detailedServices } from "@/data/services";
import { ButtonLink } from "@/components/ButtonLink";
const photos = [
  {
    src: "/projects/coordinacion-planos-hvac.jpeg",
    alt: "Coordinación de planos y proyecto de climatización",
  },
  {
    src: "/projects/instalacion-split-domiciliario.jpg",
    alt: "Instalación de aire acondicionado domiciliario",
  },
  {
    src: "/projects/techo-antofagasta-hvac.jpeg",
    alt: "Mantención de sistemas HVAC en Antofagasta",
  },
  {
    src: "/projects/supervision-equipos-hvac.jpeg",
    alt: "Inspección técnica de equipos de climatización",
  },
  {
    src: "/projects/unidades-exteriores-techo.webp",
    alt: "Unidades de climatización comercial",
  },
  {
    src: "/projects/maniobra-nocturna-equipo-hvac.webp",
    alt: "Equipo compacto durante una maniobra en terreno",
  },
];
const names = [
  "Ingeniería y proyectos",
  "Instalación de equipos",
  "Mantención HVAC",
  "Diagnóstico y reparación",
  "Repuestos y componentes",
  "Arriendo de equipos",
];
export function ServicesSelector() {
  const [active, setActive] = useState(0);
  return (
    <div className="solutions-grid">
      <div className="service-list">
        {detailedServices.map((service, index) => (
          <div
            className={"service-item" + (active === index ? " is-active" : "")}
            key={service.icon}
          >
            <h3>
              <button
                aria-expanded={active === index}
                aria-controls={"service-panel-" + index}
                id={"service-trigger-" + index}
                onClick={() => setActive(active === index ? -1 : index)}
                type="button"
              >
                <span className="service-number">{"0" + (index + 1)}</span>
                <span>{names[index]}</span>
                {active === index ? (
                  <Minus aria-hidden="true" />
                ) : (
                  <Plus aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={"service-panel-" + index}
              role="region"
              aria-labelledby={"service-trigger-" + index}
              hidden={active !== index}
            >
              <div className="service-content">
                <p>{service.summary}</p>
                <div className="service-tags">
                  {service.includes?.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <ButtonLink
                  href={index === 5 ? "/arriendo-equipos" : "/contacto"}
                  variant="ghost"
                >
                  {index === 5
                    ? "Conocer capacidades"
                    : "Evaluemos tu requerimiento"}
                </ButtonLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      <figure className="service-visual">
        <Image
          src={photos[active < 0 ? 0 : active].src}
          alt={photos[active < 0 ? 0 : active].alt}
          fill
          sizes="(min-width: 900px) 45vw, 100vw"
        />
        <figcaption>
          <span className="status-dot" />
          Soluciones reales. Equipo propio.
        </figcaption>
      </figure>
    </div>
  );
}
