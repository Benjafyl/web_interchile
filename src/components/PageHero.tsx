import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  path?: string;
};
export function PageHero({ eyebrow, title, description, path }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell">
        {path ? (
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: eyebrow || title, href: path },
            ]}
          />
        ) : (
          <p className="breadcrumb">
            <Link href="/">Interchile Clima</Link>
            <span>/</span>
            {eyebrow}
          </p>
        )}
        <div className="page-hero-grid">
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
            <a className="text-link" href="#detalle">
              Explorar
              <ChevronDown aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
