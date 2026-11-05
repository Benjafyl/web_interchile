import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { servicePages } from "@/data/service-pages";

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
  { path: "/proyectos/ampliacion-mall-portal-temuco-2026", priority: 0.8 },
  { path: "/arriendo-equipos", priority: 0.8 },
  { path: "/equipo", priority: 0.7 },
  { path: "/contacto", priority: 0.9 },
  { path: "/privacidad", priority: 0.2 },
  ...servicePages.map((service) => ({
    path: `/servicios/${service.slug}`,
    priority: 0.8,
  })),
] as const;

export const defaultDescription =
  "Climatización industrial y comercial en Chile. Ingeniería, instalación, mantención HVAC y arriendo de equipos para industria, retail y empresas. Más de 23 años de experiencia.";

export const defaultTitle =
  "Climatización industrial y comercial en Chile | InterChile Clima";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/og-image.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
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
          url: absoluteUrl(image),
          ...(image === "/og-image.png" ? { width: 1200, height: 630 } : {}),
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: "InterChile Clima",
      legalName: siteConfig.name,
      alternateName: ["Inter Chile Clima", "InterchileClima"],
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
