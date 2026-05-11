import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl">Inés Villa</h3>
          <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            "El arte es la forma más íntima de mirar el mundo. Cada cuadro es
            un pedazo de alma que comparto con quien lo recibe."
          </p>
          <div className="gold-divider mt-6 max-w-[160px]" />
        </div>

        <div>
          <p className="eyebrow mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            {[
              ["/sobre", "La Artista"],
              ["/galeria", "Galería"],
              ["/tienda", "Tienda"],
              ["/premios", "Premios"],
              ["/contacto", "Contacto"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="link-underline text-foreground/80 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contacto</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 text-primary" />
              <a href={`tel:+54${CONTACT.phone}`} className="link-underline">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-primary" />
              <a href={`mailto:${CONTACT.email}`} className="link-underline">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-primary" />
              <span>{CONTACT.location}</span>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 size-4 text-primary" />
              <a href={CONTACT.instagram} className="link-underline" target="_blank" rel="noreferrer">
                @inesvilla.arte
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Inés Villa · Todos los derechos reservados.</p>
          <p className="font-serif italic">Arte hecho a mano en Escobar, Argentina.</p>
        </div>
      </div>
    </footer>
  );
}
