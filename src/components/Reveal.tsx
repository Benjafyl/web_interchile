import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div className={cn("reveal reveal-visible", `reveal-delay-${delay}`, className)}>
      {children}
    </div>
  );
}
