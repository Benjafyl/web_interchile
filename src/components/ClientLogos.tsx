import Image from "next/image";
import { clients } from "@/data/site";
export function ClientLogos() {
  return (
    <div className="client-logos">
      {clients.map((client) => (
        <Image
          key={client.name}
          src={client.logo}
          alt={client.name}
          width={170}
          height={60}
        />
      ))}
    </div>
  );
}
