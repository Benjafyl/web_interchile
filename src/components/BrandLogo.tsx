import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        alt="Interchile Clima SpA - Soluciones Ambientales"
        className={cn("h-16 w-auto", imageClassName)}
        height={229}
        priority
        src="/brand/logo-ich-transparent.png"
        width={438}
      />
    </span>
  );
}
