import religioso1 from "@/assets/obra-religioso-1.jpg";
import religioso2 from "@/assets/obra-religioso-2.jpg";
import caballoCarbonilla from "@/assets/obra-caballo-carbonilla.jpg";
import caballosJinete from "@/assets/obra-caballos-jinete.jpg";
import evita from "@/assets/obra-evita.jpg";
import pintorPersonajes from "@/assets/obra-pintor-personajes.jpg";
import abuelaNietos from "@/assets/obra-abuela-nietos.jpg";
import bosque from "@/assets/obra-bosque.jpg";

export type Category = "Retratos" | "Animales" | "Naturaleza" | "Religioso";

export interface Artwork {
  id: string;
  title: string;
  category: Category;
  technique: string;
  size: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
  featured?: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "abuela-y-nietos",
    title: "La abuela Inés a sus nietos",
    category: "Retratos",
    technique: "Óleo sobre lienzo",
    size: "70 × 70 cm",
    price: 480000,
    image: abuelaNietos,
    description:
      "Una escena familiar a la orilla del agua: la abuela rodeada de sus nietos entre patos y árboles. Una pintura cargada de ternura y memoria.",
    available: true,
    featured: true,
  },
  {
    id: "el-pintor-y-sus-personajes",
    title: "El pintor y sus personajes",
    category: "Retratos",
    technique: "Óleo sobre lienzo",
    size: "60 × 80 cm",
    price: 520000,
    image: pintorPersonajes,
    description:
      "Un homenaje al acto de crear: el artista da vida a sus criaturas mientras un castillo de cuento se alza al fondo. Obra cargada de fantasía.",
    available: true,
    featured: true,
  },
  {
    id: "evita-cinco-tiempos",
    title: "Evita en cinco tiempos",
    category: "Retratos",
    technique: "Carbonilla sobre papel",
    size: "70 × 50 cm",
    price: 380000,
    image: evita,
    description:
      "Cinco gestos de Eva Perón superpuestos sobre la multitud. Un retrato histórico realizado íntegramente en carbonilla.",
    available: true,
  },
  {
    id: "tropilla-en-la-feria",
    title: "Tropilla en la feria",
    category: "Animales",
    technique: "Óleo sobre lienzo",
    size: "80 × 60 cm",
    price: 540000,
    image: caballosJinete,
    description:
      "Un jinete arrea su tropilla entre la gente y las carpas de una feria criolla. Movimiento, color y tradición pampeana.",
    available: true,
    featured: true,
  },
  {
    id: "caballo-en-carbonilla",
    title: "Caballo",
    category: "Animales",
    technique: "Carbonilla sobre papel",
    size: "50 × 50 cm",
    price: 280000,
    image: caballoCarbonilla,
    description:
      "Un retrato sobrio en carbonilla: la nobleza del caballo capturada en pocos trazos firmes y luminosos.",
    available: true,
  },
  {
    id: "sendero-en-el-bosque",
    title: "Sendero en el bosque",
    category: "Naturaleza",
    technique: "Óleo sobre lienzo",
    size: "70 × 60 cm",
    price: 420000,
    image: bosque,
    description:
      "Una caminante recoge flores en medio de un bosque verde y vibrante. Una obra contemplativa, llena de luz natural.",
    available: true,
  },
  {
    id: "amanecer-junto-al-mar",
    title: "Amanecer junto al mar",
    category: "Religioso",
    technique: "Óleo sobre lienzo",
    size: "60 × 90 cm",
    price: 580000,
    image: religioso1,
    description:
      "La figura del Maestro contempla el horizonte dorado al amanecer. Una pieza serena, de honda espiritualidad.",
    available: true,
    featured: true,
  },
  {
    id: "aparicion-en-el-bosque",
    title: "Aparición en el bosque",
    category: "Religioso",
    technique: "Óleo sobre lienzo",
    size: "70 × 90 cm",
    price: 620000,
    image: religioso2,
    description:
      "Dos figuras luminosas se revelan a un caminante en el corazón del bosque. Obra devocional de gran presencia.",
    available: true,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
