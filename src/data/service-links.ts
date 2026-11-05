import type { ServiceIcon } from "./services";
const links: Record<ServiceIcon, string> = {
  project: "/servicios/ingenieria-proyectos-climatizacion",
  install: "/servicios/instalacion-aire-acondicionado",
  maintenance: "/servicios/mantencion-hvac",
  repair: "/servicios/reparacion-climatizacion",
  parts: "/servicios/repuestos-climatizacion",
  rental: "/arriendo-equipos",
};
export function serviceHref(icon: ServiceIcon) {
  return links[icon];
}
export function quoteHref(service: string) {
  return `/contacto?servicio=${encodeURIComponent(service)}`;
}
