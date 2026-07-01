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

const variants = {
  primary:
    "bg-[#c30f3f] text-white shadow-lg shadow-rose-950/20 hover:bg-[#a90d36] focus-visible:outline-rose-300",
  secondary:
    "border border-gray-300 bg-white text-gray-950 hover:border-[#4fb7d8] hover:text-[#c30f3f] focus-visible:outline-[#4fb7d8]",
  ghost:
    "text-gray-700 hover:bg-gray-100 hover:text-gray-950 focus-visible:outline-[#4fb7d8]",
  light:
    "bg-white text-gray-950 hover:bg-gray-100 focus-visible:outline-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
