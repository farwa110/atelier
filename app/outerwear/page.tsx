import CollectionHero from "@/components/essentials/CollectionHero";
import FeaturedPieces from "@/components/essentials/FeaturedPieces";
import type { Product } from "@/components/essentials/FeaturedPieces";
import CollectionIntro from "@/components/CollectionIntro";

const outerwearProducts: Product[] = [
  {
    id: "wool-overcoat",
    name: "Wool Overcoat",
    category: "Coats",
    price: "$420",
    image: "/outerwear-images/woolcoat.png",
    imagePosition: "center 20%",
  },
  {
    id: "double-breasted-coat",
    name: "Double-Breasted Coat",
    category: "Coats",
    price: "$460",
    image: "/outerwear-images/doublecoat.png",
    imagePosition: "center 18%",
  },
  {
    id: "tailored-blazer-jacket",
    name: "Tailored Blazer Jacket",
    category: "Jackets",
    price: "$310",
    image: "/outerwear-images/blazercoat.png",
    imagePosition: "center 22%",
  },
  {
    id: "minimal-wool-jacket",
    name: "Minimal Wool Jacket",
    category: "Jackets",
    price: "$280",
    image: "/outerwear-images/minimalcoat.png",
    imagePosition: "center 12%",
  },
  {
    id: "longline-coat",
    name: "Longline Coat",
    category: "Coats",
    price: "$480",
    image: "/outerwear-images/longlinecoat.png",
    imagePosition: "center 10%",
  },
  {
    id: "structured-trench",
    name: "Structured Trench Coat",
    category: "Coats",
    price: "$390",
    image: "/outerwear-images/trenchcoat.png",
    imagePosition: "center 12%",
  },
];

export default function OuterwearPage() {
  return (
    <main className="bg-black min-h-screen">
      <CollectionHero image="/collection-4.jpg" alt="Outerwear collection" eyebrow="Autumn / Winter 2026" title="Outerwear" description="Discover our curated selection of outerwear, where timeless design meets modern functionality." />
      <CollectionIntro eyebrow="The Collection" title="Tailored for warmth and presence." description="Outerwear defines the silhouette of the season. From structured overcoats to refined layering pieces, each design balances form and function while offering comfort and protection." />
      <FeaturedPieces subtitle="Outerwear Collection" title="Designed for colder seasons" products={outerwearProducts} />
    </main>
  );
}
