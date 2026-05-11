import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CONTACT, waLink } from "@/lib/contact";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Inés Villa | WhatsApp y consultas" },
      { name: "description", content: "Escribile a Inés Villa por WhatsApp, email o el formulario. Encargá una obra personalizada o consultá por una pieza disponible." },
      { property: "og:title", content: "Contactar a Inés Villa" },
      { property: "og:description", content: "Consultas por WhatsApp, email y formulario." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      toast.error("Completá tu nombre y mensaje.");
      return;
    }
    const text = `Hola Inés, soy ${form.name} (${form.email}).\n\n${form.message}`;
    window.open(waLink(text), "_blank");
    toast.success("Te llevamos a WhatsApp para enviar el mensaje.");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
      <header className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Contacto</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">Hablemos de <em className="text-primary">tu obra</em></h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-muted-foreground">
          Para consultas, encargos personalizados o coordinar la compra de una
          obra disponible. Respondo personalmente cada mensaje.
        </p>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-5 md:gap-16">
        <aside className="md:col-span-2">
          <ul className="space-y-6">
            {[
              { icon: Phone, label: "WhatsApp", value: CONTACT.phoneDisplay, href: waLink("Hola Inés, te escribo desde tu sitio.") },
              { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Instagram, label: "Instagram", value: "@inesvilla.arte", href: CONTACT.instagram },
              { icon: MapPin, label: "Ubicación", value: CONTACT.location },
            ].map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4 border-b border-border pb-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Icon className="size-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer" className="link-underline mt-1 block font-serif text-xl">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 font-serif text-xl">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <Button asChild size="lg" className="mt-8 w-full rounded-full">
            <a href={waLink("Hola Inés, me interesa encargar una obra personalizada.")} target="_blank" rel="noreferrer">
              Consultar por una obra personalizada
            </a>
          </Button>
        </aside>

        <form onSubmit={onSubmit} className="md:col-span-3 rounded-md border border-border bg-card p-8 shadow-soft">
          <h2 className="font-serif text-3xl">Escribime</h2>
          <p className="mt-1 text-sm text-muted-foreground">Te respondo a la brevedad.</p>

          <div className="mt-8 space-y-5">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Contame qué obra te interesa o qué encargo querés hacer..."
                rows={6}
                className="mt-2"
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="mt-8 w-full rounded-full">
            <Send className="mr-2 size-4" /> Enviar por WhatsApp
          </Button>
        </form>
      </div>

      {/* Testimonios */}
      <div className="mt-32">
        <p className="eyebrow text-center">Testimonios</p>
        <h2 className="mt-2 text-center font-serif text-4xl md:text-5xl">Lo que cuentan quienes recibieron una obra</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { name: "Marina G.", place: "Belén de Escobar", quote: "El retrato de mis hijos es una de las cosas más lindas que tengo en casa. Inés captó algo que ni una foto puede." },
            { name: "Familia Romero", place: "Pilar", quote: "Encargamos un cuadro de mi papá ya fallecido. Lloramos al recibirlo. Hay alma en cada pincelada." },
            { name: "Juan P.", place: "Tigre", quote: "Compré un paisaje pampeano para el living y se llevó toda la atención del ambiente. Una obra premium." },
          ].map((t) => (
            <figure key={t.name} className="rounded-md border border-border bg-card p-7 shadow-soft">
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
