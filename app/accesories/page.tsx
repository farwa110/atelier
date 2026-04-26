import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CollectionHero from "@/components/essentials/CollectionHero";
import CollectionIntro from "@/components/CollectionIntro";
import FeaturedPieces from "@/components/essentials/FeaturedPieces";
import type { Product } from "@/components/essentials/FeaturedPieces";

const accessoriesProducts = [
  {
    id: "gold-bracelet",
    name: "Gold Bracelet",
    category: "Jewellery",
    price: "$120",
    image: "/accesories-images/bracelet.png",
  },
  {
    id: "stacked-rings",
    name: "Stacked Rings",
    category: "Jewellery",
    price: "$95",
    image: "/accesories-images/ring.png",
  },
  {
    id: "diamond-pave-hoops",
    name: "Diamond Pavé Hoops",
    category: "Jewellery",
    price: "$110",
    image: "/accesories-images/rhinestone-hoops.png",
  },
  {
    id: "aviator-sunglasses",
    name: "Aviator Sunglasses",
    category: "Eyewear",
    price: "$160",
    image: "/accesories-images/sunglasses.png",
  },
  {
    id: "silk-tie",
    name: "Silk Tie",
    category: "Accessories",
    price: "$85",
    image: "/accesories-images/tie.png",
  },
  {
    id: "beige-purse",
    name: "Beige Purse",
    category: "Accessories",
    price: "$120",
    image: "/accesories-images/beigepurse.png",
  },
];

export default function AccesoriesPage() {
  return (
    <main className="bg-black min-h-screen">
      <CollectionHero image="/accesories-images/accesories-hero.png" alt="Accesories collection" eyebrow="Spring / Summer 2026" title="Accesories" description="Refined accessories designed to elevate your everyday essentials with a touch of quiet luxury." />
      {/* <CollectionIntro eyebrow="Spring / Summer 2026" title="Accesories" description="Refined accessories designed to elevate your everyday essentials with a touch of quiet luxury." /> */}
      <CollectionIntro eyebrow="The Details" title="Finishing touches that define the look." description="Accessories bring clarity and character to every outfit. From refined leather goods to sculptural jewelry and timeless eyewear, each piece is designed with intention." />
      <FeaturedPieces subtitle="Accessories Collection" title="Elevated details for every look" products={accessoriesProducts} />
    </main>
  );
}
