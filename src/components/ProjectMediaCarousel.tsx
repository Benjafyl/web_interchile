"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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
    if (!shouldPlay || item.type !== "image") return;
    const timer = window.setTimeout(
      () => setIndex((current) => (current + 1) % temucoMedia.length),
      5500,
    );
    return () => window.clearTimeout(timer);
  }, [index, item.type, shouldPlay]);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    if (shouldPlay) {
      void player.play().catch(() => {
        if (video.current === player) setAutoAdvance(false);
      });
    } else {
      player.pause();
    }
  }, [index, shouldPlay]);

  function move(direction: number) {
    setAutoAdvance(false);
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
      onFocusCapture={(event) => {
        if (!(event.target as HTMLElement).closest(".project-media-toggle"))
          setAutoAdvance(false);
      }}
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
        }
      }}
      onTouchStart={(event) => {
        if ((event.target as HTMLElement).closest("video")) return;
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
            controls
            muted
            playsInline
            preload="metadata"
            aria-label={item.alt}
            onPlay={() => {
              if (!wantsPlay) setAutoAdvance(true);
            }}
            onPause={() => {
              if (shouldPlay && !video.current?.ended) setAutoAdvance(false);
            }}
            onEnded={() => {
              if (shouldPlay)
                setIndex((current) => (current + 1) % temucoMedia.length);
            }}
          >
            <a href={item.src}>Abrir el video del proyecto</a>
          </video>
        )}
      </div>
      <div className="project-media-toolbar">
        <div className="project-media-caption">
          <p>{item.title}</p>
          <span aria-live={wantsPlay ? "off" : "polite"} aria-atomic="true">
            {index + 1} / {temucoMedia.length}
          </span>
        </div>
        <div
          className="project-media-controls"
          role="group"
          aria-label="Controles del carrusel"
        >
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Recurso anterior"
            title="Anterior"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            className="project-media-toggle"
            type="button"
            onClick={() => setAutoAdvance(!wantsPlay)}
            aria-label={wantsPlay ? "Pausar carrusel" : "Reproducir carrusel"}
            title={wantsPlay ? "Pausar" : "Reproducir"}
          >
            {wantsPlay ? (
              <Pause aria-hidden="true" />
            ) : (
              <Play aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Recurso siguiente"
            title="Siguiente"
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
