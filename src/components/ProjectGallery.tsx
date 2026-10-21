"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { temucoPhotos } from "@/data/temuco";

export function ProjectGallery() {
  const [category, setCategory] = useState("Todas");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const photos =
    category === "Todas"
      ? temucoPhotos
      : temucoPhotos.filter((photo) => photo.category === category);
  const photo = photos[selected ?? 0];

  useEffect(() => {
    const modal = dialog.current;
    if (!modal || selected === null) return;
    if (!modal.open) modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  function move(direction: number) {
    setSelected(
      (current) => ((current ?? 0) + direction + photos.length) % photos.length,
    );
  }
  function close() {
    dialog.current?.close();
    setSelected(null);
  }

  return (
    <>
      <div className="gallery-toolbar">
        <div
          className="gallery-filters"
          role="group"
          aria-label="Filtrar fotografías"
        >
          {["Todas", "Equipo", "Instalaciones", "Sala de máquinas"].map(
            (label) => (
              <button
                type="button"
                key={label}
                aria-pressed={category === label}
                onClick={() => setCategory(label)}
              >
                {label}
              </button>
            ),
          )}
        </div>
        <p aria-live="polite">{photos.length} fotografías</p>
      </div>
      <div className="project-gallery">
        {photos.map((item, index) => (
          <button
            className="gallery-photo"
            type="button"
            key={item.src}
            onClick={() => setSelected(index)}
            aria-label={"Ampliar foto: " + item.caption}
            aria-haspopup="dialog"
          >
            <span className="gallery-image">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(min-width: 1000px) 31vw, (min-width: 640px) 45vw, 90vw"
              />
              <span className="gallery-expand">
                <Expand aria-hidden="true" />
              </span>
            </span>
            <span className="gallery-caption">{item.caption}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label="Galería de Ampliación Mall Portal Temuco"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div className="gallery-dialog-content">
          <div className="gallery-dialog-bar">
            <span aria-live="polite">
              {(selected ?? 0) + 1} / {photos.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar galería"
              autoFocus
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="gallery-full-image">
            <Image src={photo.src} alt={photo.alt} fill sizes="95vw" />
          </div>
          <div className="gallery-dialog-navigation">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <p aria-live="polite">{photo.caption}</p>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Foto siguiente"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
