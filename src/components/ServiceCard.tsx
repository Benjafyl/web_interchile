import {
  ClipboardCheck,
  PackageCheck,
  Snowflake,
  Thermometer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Service, ServiceIcon } from "@/data/services";

const icons: Record<ServiceIcon, LucideIcon> = {
  project: ClipboardCheck,
  install: Snowflake,
  maintenance: Thermometer,
  repair: Wrench,
  parts: PackageCheck,
};

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <article className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4fb7d8] hover:shadow-lg">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 text-[#c30f3f]">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-950">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{service.summary}</p>
      {detailed && service.includes ? (
        <ul className="mt-5 space-y-2 text-sm text-gray-700">
          {service.includes.map((item) => (
            <li className="flex gap-2" key={item}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56b91f]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
