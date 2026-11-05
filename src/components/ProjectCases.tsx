import Image from "next/image";
import Link from "next/link";
import { projectCases } from "@/data/projects";

export function ProjectCases() {
  return (
    <div className="case-cards">
      {projectCases.map((project) => (
        <Link
          className="case-card"
          href={`/proyectos/${project.slug}`}
          key={project.slug}
        >
          <figure>
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1000px) 31vw, (min-width: 700px) 46vw, 90vw"
              style={{ objectPosition: project.coverPosition }}
            />
            <span className="case-card-year">{project.year}</span>
          </figure>
          <div className="case-card-copy">
            <p className="section-kicker">{project.kind}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="case-card-action">Conocer el proyecto</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
