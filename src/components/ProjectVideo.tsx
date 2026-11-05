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
        aria-label="Instalación de ductos y tuberías en la ampliación de Mall Portal Temuco"
        width="1024"
        height="576"
      >
        <source src={temucoProject.video} type="video/mp4" />
        Tu navegador no puede reproducir este video.{" "}
        <a href={temucoProject.video}>Abrir el video del proyecto</a>.
      </video>
    </figure>
  );
}
