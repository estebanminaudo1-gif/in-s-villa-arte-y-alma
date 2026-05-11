import familia1 from "@/assets/art-familia-1.jpg";
import familia2 from "@/assets/art-familia-2.jpg";
import animal1 from "@/assets/art-animal-1.jpg";
import animal2 from "@/assets/art-animal-2.jpg";
import naturaleza1 from "@/assets/art-naturaleza-1.jpg";
import naturaleza2 from "@/assets/art-naturaleza-2.jpg";
import religioso1 from "@/assets/art-religioso-1.jpg";
import religioso2 from "@/assets/art-religioso-2.jpg";

export type Category = "Familia" | "Animales" | "Naturaleza" | "Religioso";

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
    id: "abrazo-eterno",
    title: "Abrazo Eterno",
    category: "Familia",
    technique: "Óleo sobre lienzo",
    size: "70 × 70 cm",
    price: 480000,
    image: familia1,
    description:
      "Un retrato íntimo del vínculo entre madre e hijo. La paleta cálida envuelve la escena en una luz dorada que invita a detenerse.",
    available: true,
    featured: true,
  },
  {
    id: "abuelo-y-nieto",
    title: "Las manos del tiempo",
    category: "Familia",
    technique: "Óleo sobre lienzo",
    size: "60 × 60 cm",
    price: 420000,
    image: familia2,
    description:
      "El gesto silencioso entre generaciones. Una obra que celebra la transmisión del afecto y la memoria familiar.",
    available: true,
  },
  {
    id: "caballo-otono",
    title: "Caballo de Otoño",
    category: "Animales",
    technique: "Óleo sobre lienzo",
    size: "80 × 60 cm",
    price: 520000,
    image: animal1,
    description:
      "El alma libre de la pampa argentina capturada en pinceladas vibrantes. Una pieza imponente para grandes espacios.",
    available: true,
    featured: true,
  },
  {
    id: "compañero-fiel",
    title: "Compañero Fiel",
    category: "Animales",
    technique: "Óleo sobre tela",
    size: "50 × 50 cm",
    price: 320000,
    image: animal2,
    description:
      "Retrato encargado de un compañero querido. Disponible también en formato personalizado para tu mascota.",
    available: true,
  },
  {
    id: "pampa-dorada",
    title: "Pampa Dorada",
    category: "Naturaleza",
    technique: "Óleo sobre lienzo",
    size: "100 × 70 cm",
    price: 580000,
    image: naturaleza1,
    description:
      "El horizonte infinito de la llanura argentina al atardecer. Una obra serena, ideal para living o estudio.",
    available: true,
  },
  {
    id: "flores-silvestres",
    title: "Flores Silvestres",
    category: "Naturaleza",
    technique: "Óleo sobre lienzo",
    size: "60 × 60 cm",
    price: 360000,
    image: naturaleza2,
    description:
      "La belleza humilde del campo bonaerense. Pinceladas sueltas que vibran con la luz del mediodía.",
    available: true,
  },
  {
    id: "virgen-luz",
    title: "Virgen de la Luz",
    category: "Religioso",
    technique: "Óleo sobre lienzo",
    size: "70 × 90 cm",
    price: 620000,
    image: religioso1,
    description:
      "Una imagen contemplativa con halos dorados sutiles. Pieza devocional con presencia reverente.",
    available: true,
    featured: true,
  },
  {
    id: "manos-en-oracion",
    title: "Manos en Oración",
    category: "Religioso",
    technique: "Óleo sobre tela",
    size: "50 × 60 cm",
    price: 380000,
    image: religioso2,
    description:
      "Un instante de fe, capturado con luz cálida y trazo sentido. Para espacios de recogimiento.",
    available: true,
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);
