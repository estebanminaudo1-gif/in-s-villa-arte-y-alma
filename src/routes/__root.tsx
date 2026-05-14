import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-serif text-5xl">Página no encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          La página que buscás no existe o fue movida.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Probá refrescar la página o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Reintentar
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2 text-sm font-medium hover:bg-accent">
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Inés Villa — Artista plástica de Escobar | Cuadros y obras" },
      { name: "description", content: "Inés Villa, artista plástica de Escobar. Obras originales de familia, animales, naturaleza y arte religioso. Galería y tienda online." },
      { name: "author", content: "Inés Villa" },
      { name: "keywords", content: "Inés Villa, artista Escobar, cuadros personalizados, arte familiar, pinturas religiosas, arte argentino, retratos al óleo" },
      { property: "og:title", content: "Inés Villa — Artista plástica de Escobar | Cuadros y obras" },
      { property: "og:description", content: "Inés Villa, artista plástica de Escobar. Obras originales de familia, animales, naturaleza y arte religioso. Galería y tienda online." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Inés Villa — Artista plástica de Escobar | Cuadros y obras" },
      { name: "twitter:description", content: "Inés Villa, artista plástica de Escobar. Obras originales de familia, animales, naturaleza y arte religioso. Galería y tienda online." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d815c6c7-5f19-4d69-87bc-0db624910d0f/id-preview-28257a05--bf48c10e-1fd2-4387-846c-39254e33b2b7.lovable.app-1778715416351.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d815c6c7-5f19-4d69-87bc-0db624910d0f/id-preview-28257a05--bf48c10e-1fd2-4387-846c-39254e33b2b7.lovable.app-1778715416351.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
