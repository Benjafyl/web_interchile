import { ArrowDown, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { ButtonLink } from "@/components/ButtonLink";
import { media } from "@/data/media";
import { getWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#30343a] px-6 pb-12 pt-28 text-white sm:pb-16 lg:pt-32">
      <div className="absolute inset-0 opacity-75">
        <div className="absolute left-[18%] top-0 h-80 w-80 rounded-full bg-[#c30f3f]/25 blur-3xl" />
        <div className="absolute bottom-0 right-[8%] h-96 w-96 rounded-full bg-[#4fb7d8]/20 blur-3xl" />
        <div className="absolute bottom-8 left-4 h-72 w-72 rounded-full bg-[#56b91f]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div className="motion-safe:animate-[rise-in_.7s_ease-out_both]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-gray-100">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-[#56b91f]" />
            HVAC para operaciones que no pueden detenerse
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Climatización que mantiene tu operación en marcha.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Resolvemos proyectos, fallas y mantenciones para que tus espacios
            funcionen con seguridad, confort y continuidad.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
            {['Proyectos HVAC', 'Mantención', 'Reparación', 'Todo Chile'].map((item) => (
              <span className="rounded-full border border-white/15 bg-[#23272d]/55 px-3 py-2" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contacto">
              Cotizar proyecto
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={getWhatsAppUrl()} variant="light" external>
              Hablar por WhatsApp
              <FaWhatsapp aria-hidden="true" className="h-4 w-4 text-[#25D366]" />
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[430px] overflow-hidden rounded-md border border-white/15 bg-white/10 shadow-2xl shadow-black/30 motion-safe:animate-[rise-in_.8s_ease-out_.12s_both]">
          <Image
            alt={media.hero.alt}
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 44vw, 100vw"
            src={media.hero.src}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#23272d]/90 via-[#23272d]/20 to-transparent" />
          <div className="absolute left-5 top-5 rounded-md border border-white/15 bg-[#23272d]/80 px-4 py-3 backdrop-blur">
            <p className="text-2xl font-semibold text-white">23+</p>
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-[#99d9ec]">Años de experiencia</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#99d9ec]">
              Coordinación en terreno
            </p>
            <p className="mt-2 max-w-md text-lg font-semibold">
              Diagnóstico, planificación y ejecución técnica en una misma operación.
            </p>
          </div>
        </div>
      </div>

      <a
        className="relative mx-auto mt-10 flex w-fit items-center gap-2 text-sm font-medium text-gray-200 transition hover:text-white"
        href="#problemas"
      >
        Explorar cómo respondemos
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
    </section>
  );
}
