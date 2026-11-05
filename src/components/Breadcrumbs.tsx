import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { absoluteUrl } from "@/data/seo";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <>
      <nav className="breadcrumb" aria-label="Ruta de navegación">
        <ol>
          {items.map((item, index) => (
            <li key={item.href}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.href),
          })),
        }}
      />
    </>
  );
}
