import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola Inés, vi tu sitio y me gustaría hacerte una consulta.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-frame transition-all hover:scale-105 hover:shadow-2xl"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-medium md:inline">WhatsApp</span>
    </a>
  );
}
