"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { temucoMedia } from "@/data/temuco";

function subscribeMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function motionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function subscribeVisibility(callback: () => void) {
  document.addEventListener("visibilitychange", callback);
  return () => document.removeEventListener("visibilitychange", callback);
}
function visibilitySnapshot() {
  return document.visibilityState === "visible";
}
const serverTrue = () => true;

export function ProjectMediaCarousel() {
  const [index, setIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState<boolean | null>(null);
  const [inView, setInView] = useState(false);
  const [unavailableVideo, setUnavailableVideo] = useState<string | null>(null);
  const instructionsId = useId();
  const container = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeMotion,
    motionSnapshot,
    serverTrue,
  );
  const pageVisible = useSyncExternalStore(
    subscribeVisibility,
    visibilitySnapshot,
    serverTrue,
  );
  const wantsPlay = autoAdvance ?? !reducedMotion;
  const shouldPlay = wantsPlay && inView && pageVisible;
  const item = temucoMedia[index];

  useEffect(() => {
    const node = container.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldPlay || (item.type !== "image" && unavailableVideo !== item.src))
      return;
    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % temucoMedia.length),
      5500,
    );
    return () => window.clearTimeout(timer);
  }, [index, item.type, item.src, shouldPlay, unavailableVideo]);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    let cancelled = false;
    if (shouldPlay) {
      void player.play().catch((error: DOMException) => {
        if (
          !cancelled &&
          video.current === player &&
          error.name !== "AbortError"
        )
          setUnavailableVideo(item.src);
      });
    } else {
      player.pause();
    }
    return () => {
      cancelled = true;
    };
  }, [index, item.src, shouldPlay]);

  function move(direction: number) {
    setAutoAdvance(true);
    setIndex(
      (current) =>
        (current + direction + temucoMedia.length) % temucoMedia.length,
    );
  }

  return (
    <div
      ref={container}
      className="project-media-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Fotos y videos de la ampliación de Mall Portal Temuco"
      aria-describedby={instructionsId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (
          event.altKey ||
          event.ctrlKey ||
          event.metaKey ||
          (event.target as HTMLElement).tagName === "VIDEO"
        )
          return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        } else if (event.key === " " && event.target === event.currentTarget) {
          event.preventDefault();
          setAutoAdvance(!wantsPlay);
        }
      }}
      onTouchStart={(event) => {
        const point = event.touches[0];
        touch.current = { x: point.clientX, y: point.clientY };
      }}
      onTouchCancel={() => {
        touch.current = null;
      }}
      onTouchEnd={(event) => {
        const start = touch.current;
        touch.current = null;
        if (!start) return;
        const point = event.changedTouches[0];
        const dx = point.clientX - start.x;
        const dy = point.clientY - start.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3)
          move(dx < 0 ? 1 : -1);
      }}
    >
      <div
        className="project-media-frame"
        role="group"
        aria-roledescription="diapositiva"
        aria-label={`${index + 1} de ${temucoMedia.length}: ${item.title}`}
      >
        {item.type === "image" ? (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(min-width: 900px) 60vw, 90vw"
          />
        ) : (
          <video
            key={item.src}
            ref={video}
            src={item.src}
            poster={item.poster}
            width={item.width}
            height={item.height}
            autoPlay={shouldPlay}
            muted
            playsInline
            preload="metadata"
            aria-label={item.alt}
            onError={() => setUnavailableVideo(item.src)}
            onEnded={() => {
              if (shouldPlay)
                setIndex((current) => (current + 1) % temucoMedia.length);
            }}
          >
            <a href={item.src}>Abrir el video del proyecto</a>
          </video>
        )}
      </div>
      <p className="project-media-keyboard-help" id={instructionsId}>
        Usa las flechas para cambiar de recurso y la barra espaciadora sobre el
        carrusel para pausar o continuar.
      </p>
      <button
        className="project-media-arrow project-media-previous"
        type="button"
        onClick={() => move(-1)}
        aria-label="Recurso anterior"
        title="Anterior"
      >
        <ChevronLeft aria-hidden="true" />
      </button>
      <button
        className="project-media-arrow project-media-next"
        type="button"
        onClick={() => move(1)}
        aria-label="Recurso siguiente"
        title="Siguiente"
      >
        <ChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}
