import { createFileRoute } from "@tanstack/react-router";
import { Truck, ShieldCheck, Palette } from "lucide-react";
import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

export const Route = createFileRoute("/tienda")({
  head: () => ({
    meta: [
      { title: "Tienda — Comprar cuadros de Inés Villa | Envíos a todo el país" },
      { name: "description", content: "Comprá obras originales de Inés Villa. Cuadros al óleo, piezas únicas, envíos a toda Argentina. Consultas y compras directo por WhatsApp." },
      { property: "og:title", content: "Tienda de obras — Inés Villa" },
      { property: "og:description", content: "Comprá cuadros originales al óleo. Envíos a toda Argentina." },
    ],
  }),
  component: TiendaPage,
});

function TiendaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Tienda online</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">Llevate una obra única</h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
          Cada cuadro es una pieza original pintada a mano. La compra y el
          envío se coordinan personalmente por WhatsApp.
        </p>
      </header>

      <div className="mt-12 grid gap-4 rounded-md border border-border bg-secondary/40 p-6 sm:grid-cols-3">
        {[
          { icon: Palette, title: "Pieza única", desc: "Pintada a mano, no es reproducción." },
          { icon: Truck, title: "Envíos a todo el país", desc: "Embalaje profesional para envíos seguros." },
          { icon: ShieldCheck, title: "Compra directa", desc: "Coordinás con la artista por WhatsApp." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon className="mt-0.5 size-5 text-primary" />
            <div>
              <p className="font-medium">{title}</p>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map((a) => <ArtworkCard key={a.id} art={a} />)}
      </div>
    </section>
  );
}
