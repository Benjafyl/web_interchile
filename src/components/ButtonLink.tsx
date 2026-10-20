import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  external?: boolean;
};
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn("button", "button-" + variant, className);
  return external ? (
    <a className={classes} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
