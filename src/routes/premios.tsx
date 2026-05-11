import { createFileRoute } from "@tanstack/react-router";
import { Award, Medal, Trophy } from "lucide-react";
import premioBonaerenses from "@/assets/premio-bonaerenses.jpg";
import premioMunicipalidad from "@/assets/premio-municipalidad.jpg";

export const Route = createFileRoute("/premios")({
  head: () => ({
    meta: [
      { title: "Premios y reconocimientos — Inés Villa | Juegos Bonaerenses" },
      { name: "description", content: "Trayectoria de Inés Villa: medalla en los Juegos Bonaerenses y reconocimiento de la Municipalidad de Escobar por su obra plástica." },
      { property: "og:title", content: "Premios — Inés Villa" },
      { property: "og:description", content: "Distinción en los Juegos Bonaerenses y reconocimientos culturales en Escobar." },
      { property: "og:image", content: premioBonaerenses },
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
    desc: "Inés representó a Escobar en la categoría adultos mayores y formó parte de la delegación que obtuvo distinción en disciplinas culturales.",
  },
  {
    year: "2023",
    icon: Medal,
    title: "Etapa regional — Juegos Bonaerenses",
    place: "Provincia de Buenos Aires",
    desc: "Clasificación a la final provincial tras destacarse en la instancia regional con su obra plástica.",
  },
  {
    year: "2021",
    icon: Award,
    title: "Reconocimiento Municipalidad de Escobar",
    place: "Escobar",
    desc: "Entrega oficial de un cuadro de Inés a las autoridades del partido de Escobar, en reconocimiento a su trayectoria artística local.",
  },
  {
    year: "2010 — 2022",
    icon: Award,
    title: "Trayectoria sostenida",
    place: "Escobar y zona norte",
    desc: "Décadas de trabajo continuado, exposiciones colectivas y obras por encargo para familias e instituciones de la región.",
  },
];

function PremiosPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <header className="text-center">
        <p className="eyebrow">Reconocimientos</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          Trayectoria<br /><em className="text-primary">premiada</em>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground">
          La obra de Inés ha sido distinguida en los <strong>Juegos
          Bonaerenses</strong> —una de las competencias artísticas más
          importantes de la Provincia de Buenos Aires— y reconocida por la
          Municipalidad de Escobar.
        </p>
        <div className="gold-divider mx-auto mt-10 w-24" />
      </header>

      {/* DESTACADO PREMIO BONAERENSES */}
      <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="art-frame shadow-frame">
          <img
            src={premioBonaerenses}
            alt="Inés Villa con su certificado de los Juegos Bonaerenses"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
            style={{ filter: "contrast(1.06) saturate(1.08)" }}
          />
        </div>
        <div>
          <p className="eyebrow flex items-center gap-2">
            <Trophy className="size-3" /> Distinción provincial
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Juegos Bonaerenses
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Edición Cultura · Escobar
          </p>
          <p className="mt-6 leading-relaxed text-foreground/85">
            Inés fue distinguida con su <strong>certificado oficial</strong> en
            los Juegos Bonaerenses, representando a Escobar en la disciplina
            artística. Una distinción que corona décadas de trabajo plástico y
            la consolida como referente del partido.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/85">
            Los Juegos Bonaerenses son la competencia cultural y deportiva
            más importante de la Provincia, con miles de participantes de
            todos los municipios.
          </p>
        </div>
      </div>

      {/* RECONOCIMIENTO MUNICIPAL */}
      <div className="mt-20 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="md:order-2 art-frame shadow-frame">
          <img
            src={premioMunicipalidad}
            alt="Entrega de obra a las autoridades de la Municipalidad de Escobar"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
            style={{ filter: "contrast(1.05) saturate(1.05)" }}
          />
        </div>
        <div className="md:order-1">
          <p className="eyebrow flex items-center gap-2">
            <Award className="size-3" /> Reconocimiento municipal
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Municipalidad de Escobar
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/85">
            Inés entregó personalmente una de sus obras a las autoridades del
            partido de Escobar: un cuadro pintado al óleo del histórico
            edificio municipal, en gesto de cariño y reconocimiento mutuo con
            su ciudad.
          </p>
        </div>
      </div>

      {/* TIMELINE */}
      <ol className="mt-24 space-y-10">
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
