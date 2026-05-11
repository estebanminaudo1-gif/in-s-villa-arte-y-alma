import { createFileRoute, Link } from "@tanstack/react-router";
import artistImg from "@/assets/premio-bonaerenses.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Inés Villa — Trayectoria y obra | Artista de Escobar" },
      { name: "description", content: "Conocé a Inés Villa, artista plástica de Escobar. Trayectoria, inspiración y reconocimientos en los Juegos Bonaerenses." },
      { property: "og:title", content: "Sobre Inés Villa — Artista plástica" },
      { property: "og:description", content: "La historia, la trayectoria y la sensibilidad detrás de cada obra." },
      { property: "og:image", content: artistImg },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <article className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <header className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">La artista</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight md:text-7xl">
          Una vida pintando lo<br /><em className="text-primary">esencial</em>.
        </h1>
        <div className="gold-divider mx-auto mt-10 w-24" />
      </header>

      <div className="mt-20 grid gap-12 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="art-frame shadow-frame sticky top-28">
            <img
              src={artistImg}
              alt="Retrato de la artista Inés Villa en su estudio"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pl-6">
          <div className="space-y-6 font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
            <p>
              Inés Villa nació y vive en <strong>Escobar</strong>, provincia de
              Buenos Aires. Desde muy joven encontró en la pintura un lenguaje
              propio para nombrar lo que las palabras no alcanzan a decir.
            </p>
            <p>
              Su obra recorre cuatro universos: <em>familia, animales,
              naturaleza y arte religioso</em>. En cada uno, lo que persiste
              es una mirada cálida, sensible y cargada de espiritualidad.
            </p>
          </div>

          <div className="mt-12 grid gap-8 border-y border-border py-10 sm:grid-cols-3">
            {[
              ["+30", "Años pintando"],
              ["100+", "Obras vendidas"],
              ["3", "Medallas en Juegos Bonaerenses"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-5xl text-primary">{n}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-4 text-base leading-relaxed text-foreground/85">
            <p>
              Su trabajo ha sido reconocido en los <strong>Juegos
              Bonaerenses</strong>, donde representó a la categoría de adultos
              mayores de Escobar y obtuvo distinciones por su obra plástica.
              Esta participación coronó años de trayectoria y la consolidó
              como una voz artística genuina del partido.
            </p>
            <p>
              Inés trabaja por encargo: retratos familiares, mascotas y
              paisajes que se transforman en piezas únicas para los hogares
              que las reciben. Cada obra es pintada a mano, con tiempo y
              dedicación, sobre lienzo o tela, en óleo.
            </p>
            <p className="font-serif text-2xl italic text-primary">
              "El arte es la forma más íntima de mirar el mundo."
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/galeria">Ver galería</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/premios">Premios y reconocimientos</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
