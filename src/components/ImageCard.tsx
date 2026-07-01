import Image from "next/image";

type ImageCardProps = {
  src: string;
  alt: string;
  title?: string;
  aspect?: string;
  priority?: boolean;
};

export function ImageCard({
  src,
  alt,
  title,
  aspect = "aspect-[4/3]",
  priority,
}: ImageCardProps) {
  return (
    <figure className="group overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-xl">
      <div className={`relative ${aspect}`}>
        <Image
          alt={alt}
          className="object-cover transition duration-500 group-hover:scale-105"
          fill
          loading={priority ? undefined : "eager"}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          src={src}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23272d]/75 via-transparent to-transparent opacity-90" />
        {title ? (
          <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-sm font-semibold text-white">
            <span className="inline-flex rounded-md bg-white/12 px-3 py-2 backdrop-blur">
              {title}
            </span>
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
