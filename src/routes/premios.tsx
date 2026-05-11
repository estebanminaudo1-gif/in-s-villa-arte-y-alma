import { createFileRoute } from "@tanstack/react-router";
import { Award, Medal, Trophy } from "lucide-react";

export const Route = createFileRoute("/premios")({
  head: () => ({
    meta: [
      { title: "Premios y reconocimientos — Inés Villa | Juegos Bonaerenses" },
      { name: "description", content: "Trayectoria de Inés Villa: medallas y reconocimientos en los Juegos Bonaerenses y certámenes culturales de la Provincia de Buenos Aires." },
      { property: "og:title", content: "Premios — Inés Villa" },
      { property: "og:description", content: "Medallas y distinciones en los Juegos Bonaerenses y concursos culturales." },
    ],
  }),
  component: PremiosPage,
});

const TIMELINE = [
  {
    year: "2024",
    icon: Trophy,
    title: "Juegos Bonaerenses — Final Provincial",
    place: "Mar del Plata",
    desc: "Inés representó a Escobar en la categoría adultos mayores y formó parte de la delegación que obtuvo tres medallas en disciplinas culturales.",
  },
  {
    year: "2023",
    icon: Medal,
    title: "Etapa regional — Juegos Bonaerenses",
    place: "Provincia de Buenos Aires",
    desc: "Clasificación a la final provincial tras destacarse en la instancia regional con su obra plástica.",
  },
  {
    year: "2022",
    icon: Award,
    title: "Concursos culturales municipales",
    place: "Escobar",
    desc: "Participación destacada en muestras y certámenes organizados por instituciones culturales del partido.",
  },
  {
    year: "2010 — 2021",
    icon: Award,
    title: "Trayectoria sostenida",
    place: "Escobar y zona norte",
    desc: "Décadas de trabajo continuado, exposiciones colectivas y obras por encargo para familias de la región.",
  },
];

function PremiosPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <header className="text-center">
        <p className="eyebrow">Reconocimientos</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">Trayectoria<br /><em className="text-primary">premiada</em></h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground">
          La obra de Inés ha sido distinguida en certámenes culturales y en los
          Juegos Bonaerenses, una de las competencias artísticas más
          importantes de la Provincia de Buenos Aires.
        </p>
        <div className="gold-divider mx-auto mt-10 w-24" />
      </header>

      <ol className="mt-20 space-y-10">
        {TIMELINE.map(({ year, icon: Icon, title, place, desc }, i) => (
          <li key={i} className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-12">
            <div className="md:text-right">
              <p className="font-serif text-3xl text-primary">{year}</p>
            </div>
            <div className="relative border-l border-border pl-8 pb-2">
              <span className="absolute -left-[13px] top-1 flex size-6 items-center justify-center rounded-full border border-border bg-background">
                <Icon className="size-3 text-primary" />
              </span>
              <h2 className="font-serif text-2xl">{title}</h2>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-muted-foreground">{place}</p>
              <p className="mt-3 leading-relaxed text-foreground/85">{desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <aside className="mt-20 rounded-md border border-border bg-secondary/40 p-8 text-center">
        <p className="font-serif text-2xl italic text-foreground/90">
          "Cada premio es de Escobar, de mi familia y de cada persona que
          alguna vez me confió un retrato."
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-muted-foreground">— Inés Villa</p>
      </aside>
    </section>
  );
}
