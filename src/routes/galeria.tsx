import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { artworks, Category } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";

const CATS: ("Todas" | Category)[] = ["Todas", "Familia", "Animales", "Naturaleza", "Religioso"];

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería de obras — Inés Villa | Cuadros originales al óleo" },
      { name: "description", content: "Explorá la galería de obras de Inés Villa: retratos familiares, animales, paisajes y arte religioso. Filtrá por categoría." },
      { property: "og:title", content: "Galería — Inés Villa" },
      { property: "og:description", content: "Obras originales al óleo. Familia, animales, naturaleza y arte religioso." },
    ],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("Todas");
  const filtered = useMemo(
    () => (filter === "Todas" ? artworks : artworks.filter((a) => a.category === filter)),
    [filter],
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Galería</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">Obras</h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
          Una selección curada del trabajo de Inés. Filtrá por universo o
          escribile directo por la obra que te conmueva.
        </p>
      </header>

      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-5 py-2 text-sm transition-all ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground/70 hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => <ArtworkCard key={a.id} art={a} />)}
      </div>
    </section>
  );
}
