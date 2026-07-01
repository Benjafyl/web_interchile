import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const seoKeywords = [
  "climatizacion en Chile",
  "empresa de climatizacion",
  "climatizacion industrial",
  "climatizacion comercial",
  "climatizacion para empresas",
  "proyectos de climatizacion",
  "ingenieria en climatizacion",
  "instalacion de aire acondicionado",
  "mantencion de aire acondicionado",
  "mantencion HVAC",
  "reparacion de aire acondicionado",
  "proveedor de climatizacion",
  "climatizacion para centros comerciales",
  "aire acondicionado industrial",
  "aire acondicionado comercial",
  "instalacion aire acondicionado domiciliario",
  "arriendo de equipos de climatizacion",
  "arriendo equipos compactos 300.000 BTU",
  "arriendo equipos compactos 150.000 BTU",
];

export const routes = [
  { path: "/", priority: 1 },
  { path: "/empresa", priority: 0.8 },
  { path: "/servicios", priority: 0.9 },
  { path: "/proyectos", priority: 0.8 },
  { path: "/arriendo-equipos", priority: 0.8 },
  { path: "/equipo", priority: 0.7 },
  { path: "/contacto", priority: 0.9 },
] as const;

export const defaultDescription =
  "Empresa familiar con mas de 23 anos de experiencia en climatizacion. Proyectos HVAC, instalacion, mantencion, reparacion, suministro de repuestos y arriendo de equipos para empresas, comercios, industrias y domicilios en todo Chile.";

export const defaultTitle =
  "InterchileClima | Soluciones integrales de climatizacion en Chile";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "es_CL",
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: "InterchileClima - Soluciones integrales de climatizacion",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/og-image.png")],
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon-512.png"),
      email: siteConfig.email,
      telephone: "+56994402632",
      sameAs: [siteConfig.instagramUrl, siteConfig.tiktokUrl],
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+56994402632",
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "CL",
        availableLanguage: "es",
      },
    },
    {
      "@type": ["LocalBusiness", "HVACBusiness"],
      "@id": `${siteConfig.url}/#hvacbusiness`,
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl("/og-image.png"),
      email: siteConfig.email,
      telephone: "+56994402632",
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      serviceType: [
        "climatizacion",
        "HVAC",
        "instalacion de aire acondicionado",
        "mantencion HVAC",
        "reparacion de aire acondicionado",
        "suministro de repuestos",
        "arriendo de equipos de climatizacion",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.shortName,
      url: siteConfig.url,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
      inLanguage: "es-CL",
    },
  ],
};
