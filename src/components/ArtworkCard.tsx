import { Artwork, formatPrice } from "@/lib/artworks";
import { waLink } from "@/lib/contact";
import { Button } from "@/components/ui/button";

export function ArtworkCard({ art }: { art: Artwork }) {
  return (
    <article className="group flex flex-col">
      <div className="art-frame relative aspect-[4/5]">
        <img
          src={art.image}
          alt={`${art.title} — ${art.technique} por Inés Villa`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ filter: "contrast(1.06) saturate(1.08) brightness(1.02)" }}
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
          {art.category}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-serif text-2xl leading-tight">{art.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {art.technique} · {art.size}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80">
          {art.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="font-serif text-xl text-primary">
            {formatPrice(art.price)}
          </span>
          <div className="flex gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full border-foreground/20"
            >
              <a
                href={waLink(`Hola Inés, quiero consultar por la obra "${art.title}".`)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-full">
              <a
                href={waLink(`Hola Inés, me gustaría comprar la obra "${art.title}" (${formatPrice(art.price)}).`)}
                target="_blank"
                rel="noreferrer"
              >
                Comprar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
