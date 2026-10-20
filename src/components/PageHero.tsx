import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
type PageHeroProps = { eyebrow?: string; title: string; description: string };
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="breadcrumb">
          <Link href="/">Inter Chile Clima</Link>
          <span>/</span>
          {eyebrow}
        </p>
        <div className="page-hero-grid">
          <h1>{title}</h1>
          <div>
            <p>{description}</p>
            <a className="text-link" href="#detalle">
              Explorar
              <ArrowDownRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
