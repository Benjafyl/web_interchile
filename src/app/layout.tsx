import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "InterchileClima | Soluciones integrales de climatización en Chile",
    template: "%s | InterchileClima",
  },
  description:
    "Empresa familiar con más de 23 años de experiencia en climatización. Proyectos HVAC, instalación, mantención, reparación y suministro de repuestos para empresas, comercios, industrias y domicilios en todo Chile.",
  keywords: [
    "climatización industrial",
    "climatización comercial",
    "proyectos de climatización",
    "ingeniería en climatización",
    "instalación de aire acondicionado",
    "mantención de aire acondicionado",
    "mantención HVAC",
    "reparación de aire acondicionado",
    "proveedor de climatización",
    "climatización para empresas",
    "climatización para centros comerciales",
    "aire acondicionado industrial",
    "aire acondicionado comercial",
    "instalación aire acondicionado domiciliario",
    "climatización en Chile",
    "empresa de climatización en Chile",
  ],
  openGraph: {
    title: "InterchileClima | Soluciones integrales de climatización en Chile",
    description:
      "Proyectos HVAC, instalación, mantención, reparación y repuestos para empresas, comercios, industrias y domicilios en todo Chile.",
    type: "website",
    locale: "es_CL",
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/brand/logo-ich-transparent.png",
    shortcut: "/brand/logo-ich-transparent.png",
    apple: "/brand/logo-ich-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
