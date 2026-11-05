import { Images, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { ProjectVideo } from "@/components/ProjectVideo";
import { temucoProject } from "@/data/temuco";

export function TemucoFeature({ id }: { id?: string }) {
  return (
    <section
      className="section-space temuco-feature"
      id={id}
      aria-labelledby="temuco-heading"
    >
      <div className="shell">
        <div className="temuco-feature-grid">
          <div className="temuco-feature-copy">
            <p className="section-kicker">En terreno · 2026</p>
            <h2 className="display-heading" id="temuco-heading">
              AMPLIACIÓN
              <br />
              MALL PORTAL
              <br />
              TEMUCO.
            </h2>
            <p>
              Ductos, tuberías y coordinación en terreno. Así trabajamos en la
              climatización de la ampliación de Mall Portal Temuco.
            </p>
            <p className="project-location">
              <MapPin aria-hidden="true" />
              {temucoProject.location}
            </p>
            <ButtonLink href={temucoProject.href}>
              <Images aria-hidden="true" />
              Conocer el proyecto y su galería
            </ButtonLink>
          </div>
          <ProjectVideo />
        </div>
      </div>
    </section>
  );
}
