import { temucoProject } from "@/data/temuco";

export function ProjectVideo() {
  return (
    <figure className="project-film">
      <video
        autoPlay
        loop
        controls
        muted
        playsInline
        preload="metadata"
        poster={temucoProject.poster}
        aria-label="Recorrido por la ampliación de Mall Portal Temuco 2026, video sin audio"
        width="1024"
        height="576"
      >
        <source src={temucoProject.video} type="video/mp4" />
        Tu navegador no puede reproducir este video.{" "}
        <a href={temucoProject.video}>Abrir el recorrido de obra</a>.
      </video>
    </figure>
  );
}
