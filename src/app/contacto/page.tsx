import type { Metadata } from "next";
import { Mail, MapPinned } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/data/seo";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto y cotizaciones de climatizacion | InterchileClima",
  description:
    "Cotiza proyectos, instalaciones, mantenciones, reparaciones, repuestos o arriendo de equipos de climatizacion. Atencion en todo Chile.",
  path: "/contacto",
});

const contactItems = [
  { icon: Mail, label: "Correo", value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: "text-[#4fb7d8]" },
  { icon: FaWhatsapp, label: "WhatsApp", value: siteConfig.phoneDisplay, href: getWhatsAppUrl(), color: "text-[#25D366]" },
  { icon: SiInstagram, label: "Instagram", value: siteConfig.instagramHandle, href: siteConfig.instagramUrl, color: "text-[#c30f3f]" },
  { icon: SiTiktok, label: "TikTok", value: siteConfig.tiktokHandle, href: siteConfig.tiktokUrl, color: "text-black" },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Cotiza tu requerimiento de climatizacion"
        description="Solicita una evaluacion tecnica o cotiza tu requerimiento de climatizacion. Atendemos empresas, comercios, industrias y domicilios en todo Chile."
      />

      <section className="bg-gray-50 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal><ContactForm /></Reveal>

          <aside className="space-y-5">
            <Reveal delay={1}>
              <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-950">Contacto directo</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        className="flex gap-4 rounded-md border border-gray-200 p-4 transition hover:-translate-y-0.5 hover:border-[#4fb7d8] hover:bg-cyan-50"
                        href={item.href}
                        key={item.label}
                        rel="noreferrer"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                      >
                        <Icon aria-hidden="true" className={`h-5 w-5 shrink-0 ${item.color}`} />
                        <span>
                          <span className="block text-sm font-semibold text-gray-950">{item.label}</span>
                          <span className="mt-1 block text-sm text-gray-600">{item.value}</span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="rounded-md bg-[#30343a] p-6 text-white">
                <MapPinned aria-hidden="true" className="h-7 w-7 text-[#56b91f]" />
                <h2 className="mt-4 text-xl font-semibold">Atencion en todo Chile.</h2>
                <p className="mt-2 text-sm leading-6 text-gray-200">Oficina virtual y coordinacion en terreno segun requerimiento.</p>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <ButtonLink className="w-full" href={getWhatsAppUrl()} external>
                <FaWhatsapp aria-hidden="true" className="h-4 w-4" />
                Hablar por WhatsApp
              </ButtonLink>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
