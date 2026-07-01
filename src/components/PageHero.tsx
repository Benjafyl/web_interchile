import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#2f3338] px-6 pb-16 pt-32 text-white sm:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(195,15,63,0.22),rgba(47,51,56,0)_42%),linear-gradient(300deg,rgba(79,183,216,0.14),rgba(47,51,56,0)_38%),repeating-linear-gradient(90deg,rgba(255,255,255,0.035)_0,rgba(255,255,255,0.035)_1px,transparent_1px,transparent_84px)]" />
      <Reveal className="relative mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#4fb7d8]">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-200">{description}</p>
      </Reveal>
    </section>
  );
}
