import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Heart, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { artworks } from "@/lib/artworks";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inés Villa — Arte que retrata emociones | Escobar, Argentina" },
      { name: "description", content: "Obras originales de Inés Villa, artista plástica de Escobar. Retratos familiares, animales, naturaleza y arte religioso al óleo." },
      { property: "og:title", content: "Inés Villa — Arte que retrata emociones" },
      { property: "og:description", content: "Obras originales en óleo. Galería y tienda online de la artista plástica de Escobar." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = artworks.filter((a) => a.featured);
  const obraDelMes = artworks.find((a) => a.id === "abuela-y-nietos")!;

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-[100svh] min-h-[680px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Estudio de Inés Villa con un retrato familiar al óleo"
            className="ken-burns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:pb-28">
          <p className="eyebrow reveal">Artista plástica · Escobar, Argentina</p>
          <h1 className="reveal reveal-delay-1 mt-4 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Inés Villa
            <span className="mt-2 block italic text-primary">
              arte que retrata emociones
            </span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-pretty text-base text-foreground/80 md:text-lg">
            Retratos familiares, naturaleza y arte religioso. Cada obra es una
            pieza única, pintada a mano con sensibilidad y oficio.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/galeria">
                Ver Galería <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-foreground/30 px-7">
              <Link to="/tienda">Comprar obras</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow">Una obra, un alma</p>
        <p className="mt-6 text-balance font-serif text-3xl leading-tight md:text-5xl">
          "Pinto lo que siento. Cada retrato guarda una historia, cada paisaje
          un instante de luz que me detuvo."
        </p>
        <div className="gold-divider mx-auto mt-10 w-24" />
        <p className="mt-6 text-sm text-muted-foreground">— Inés Villa</p>
      </section>

      {/* OBRA DEL MES */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="art-frame shadow-frame">
            <img
              src={obraDelMes.image}
              alt={obraDelMes.title}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Sparkles className="size-3" /> Obra del mes
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">{obraDelMes.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {obraDelMes.technique} · {obraDelMes.size}
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-foreground/85">
              {obraDelMes.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <a
                  href={waLink(`Hola Inés, quiero consultar por la obra "${obraDelMes.title}".`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Consultar por esta obra
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link to="/galeria">Ver todas las obras</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DESTACADAS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selección curada</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Obras destacadas</h2>
          </div>
          <Link to="/galeria" className="link-underline hidden text-sm font-medium md:inline">
            Ver galería completa →
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {featured.map((a) => <ArtworkCard key={a.id} art={a} />)}
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-center">Universos</p>
          <h2 className="mt-2 text-center font-serif text-4xl md:text-5xl">
            Cuatro caminos, una sensibilidad
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              { icon: Heart, name: "Retratos", desc: "Familia, figuras históricas y escenas íntimas." },
              { icon: Sparkles, name: "Animales", desc: "Caballos y miradas nobles, en óleo y carbonilla." },
              { icon: Award, name: "Naturaleza", desc: "Paisajes, bosques y flora argentina." },
              { icon: Sparkles, name: "Religioso", desc: "Imágenes devocionales con luz cálida." },
            ].map(({ icon: Icon, name, desc }) => (
              <Link
                key={name}
                to="/galeria"
                className="group rounded-md border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-frame"
              >
                <Icon className="size-6 text-primary" />
                <h3 className="mt-4 font-serif text-2xl">{name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Explorar →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ENCARGOS CTA */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center">
        <p className="eyebrow">Encargos personalizados</p>
        <h2 className="mt-4 text-balance font-serif text-4xl md:text-6xl">
          Convertí un recuerdo en una obra de arte
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Inés realiza retratos por encargo de tu familia, tu mascota o un
          paisaje que amás. Una pieza única, pintada a mano para tu hogar.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full px-8">
            <a
              href={waLink("Hola Inés, me interesa encargar una obra personalizada.")}
              target="_blank"
              rel="noreferrer"
            >
              Consultar por una obra personalizada
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
