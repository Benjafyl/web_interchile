import Image from "next/image";
import { clients } from "@/data/site";

type ClientLogosProps = {
  compact?: boolean;
};

export function ClientLogos({ compact }: ClientLogosProps) {
  return (
    <div className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
      {clients.map((client) => (
        <div
          className="group flex min-h-28 items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-lg"
          key={client.name}
        >
          <Image
            alt={`Logo ${client.name}`}
            className="max-h-12 w-auto max-w-[170px] object-contain transition group-hover:scale-105"
            height={80}
            src={client.logo}
            width={220}
          />
        </div>
      ))}
    </div>
  );
}
