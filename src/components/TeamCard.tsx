import { UserRound } from "lucide-react";

type TeamCardProps = {
  area: string;
  name: string;
  role: string;
  description: string;
};

export function TeamCard({ area, name, role, description }: TeamCardProps) {
  return (
    <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-500">
          <UserRound aria-hidden="true" className="h-8 w-8" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#c30f3f]">
            {area}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-gray-950">{name}</h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}
