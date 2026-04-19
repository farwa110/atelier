// import Image from "next/image";
// import Link from "next/link";

// import Footer from "@/components/Footer";

// import CollectionHero from "@/components/essentials/CollectionHero";
// import FeaturedPieces from "@/components/essentials/FeaturedPieces";
// import type { Product } from "@/components/essentials/FeaturedPieces";
// import CollectionIntro from "@/components/CollectionIntro";

// const outerwearProducts = [
//   {
//     id: "wool-overcoat",
//     name: "Wool Overcoat",
//     category: "Coats",
//     price: "$420",
//     image: "/outerwear-coat-1.png",
//   },
//   {
//     id: "double-breasted-coat",
//     name: "Double-Breasted Coat",
//     category: "Coats",
//     price: "$460",
//     image: "/outerwear-coat-2.png",
//   },
//   {
//     id: "tailored-blazer-jacket",
//     name: "Tailored Blazer Jacket",
//     category: "Jackets",
//     price: "$310",
//     image: "/outerwear-jacket-1.png",
//   },
//   {
//     id: "minimal-wool-jacket",
//     name: "Minimal Wool Jacket",
//     category: "Jackets",
//     price: "$280",
//     image: "/outerwear-jacket-2.png",
//   },
//   {
//     id: "longline-coat",
//     name: "Longline Coat",
//     category: "Coats",
//     price: "$480",
//     image: "/outerwear-coat-3.png",
//   },
//   {
//     id: "structured-trench",
//     name: "Structured Trench Coat",
//     category: "Coats",
//     price: "$390",
//     image: "/outerwear-coat-4.png",
//   },
// ];

// export default function OuterwearPage() {
//   return (
//     <main className="bg-black min-h-screen">
//       <CollectionHero image="/outwear-hero.png" alt="Outerwear collection" eyebrow="Autumn / Winter 2026" title="Outerwear" description="Discover our curated selection of outerwear, where timeless design meets modern functionality." />
//       <CollectionIntro eyebrow="The Collection" title="Tailored for warmth and presence." description="Outerwear defines the silhouette of the season. From structured overcoats to refined layering pieces, each design balances form and function while offering comfort and protection." />
//       <FeaturedPieces subtitle="Outerwear Collection" title="Designed for colder seasons" products={outerwearProducts} />
//       <Footer />
//     </main>
//   );
// }

import Footer from "@/components/Footer";
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
    image: "/outerwear-coat-1.png",
  },
  {
    id: "double-breasted-coat",
    name: "Double-Breasted Coat",
    category: "Coats",
    price: "$460",
    image: "/outerwear-coat-2.png",
  },
  {
    id: "tailored-blazer-jacket",
    name: "Tailored Blazer Jacket",
    category: "Jackets",
    price: "$310",
    image: "/outerwear-jacket-1.png",
  },
  {
    id: "minimal-wool-jacket",
    name: "Minimal Wool Jacket",
    category: "Jackets",
    price: "$280",
    image: "/outerwear-jacket-2.png",
  },
  {
    id: "longline-coat",
    name: "Longline Coat",
    category: "Coats",
    price: "$480",
    image: "/outerwear-coat-3.png",
  },
  {
    id: "structured-trench",
    name: "Structured Trench Coat",
    category: "Coats",
    price: "$390",
    image: "/outerwear-coat-4.png",
  },
];

export default function OuterwearPage() {
  return (
    <main className="bg-black min-h-screen">
      <CollectionHero image="/outwear-hero.png" alt="Outerwear collection" eyebrow="Autumn / Winter 2026" title="Outerwear" description="Discover our curated selection of outerwear, where timeless design meets modern functionality." />
      <CollectionIntro eyebrow="The Collection" title="Tailored for warmth and presence." description="Outerwear defines the silhouette of the season. From structured overcoats to refined layering pieces, each design balances form and function while offering comfort and protection." />
      <FeaturedPieces subtitle="Outerwear Collection" title="Designed for colder seasons" products={outerwearProducts} />
      <Footer />
    </main>
  );
}
