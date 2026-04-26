"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import CollectionHero from "@/components/essentials/CollectionHero";
import EssentialsIntro from "@/components/essentials/Intro";
import FeaturedPieces from "@/components/essentials/FeaturedPieces";
import type { Product } from "@/components/essentials/FeaturedPieces";
import EditorialSplit from "@/components/essentials/EditorialSplit";
import Perspective from "@/components/essentials/Perspective";

const essentialsProducts: Product[] = [
  {
    id: "merino-knit-sweater",
    name: "Merino Knit Sweater",
    category: "Knitwear",
    price: "$180",
    image: "/essentials-images/essentials-knit.png",
    imagePosition: "center 2%",
  },
  {
    id: "cashmere-scarf",
    name: "Cashmere Scarf",
    category: "Accessories",
    price: "$95",
    image: "/essentials-images/scarf-two.png",
    imagePosition: "center 25%",
  },
  {
    id: "structured-overcoat",
    name: "Structured Overcoat",
    category: "Outerwear",
    price: "$340",
    image: "/essentials-images/essentials-two.png",
    // imagePosition: "52% 4%",
    imagePosition: "center 12%",
  },

  {
    id: "tailored-wool-trouser",
    name: "Tailored Wool Trouser",
    category: "Tailoring",
    price: "$220",
    image: "/essentials-images/tailored-trouser.png",
    imagePosition: "50% 62%",
  },
  {
    id: "relaxed-shirt",
    name: "Relaxed Shirt",
    category: "Shirting",
    price: "$150",
    image: "/essentials-images/shirt.png",
    imagePosition: "50% 16%",
  },
  {
    id: "leather-loafer",
    name: "Leather Loafer",
    category: "Footwear",
    price: "$260",
    image: "/essentials-images/loafers.png",
    imagePosition: "50% 68%",
  },
];
export default function EssentialsPage() {
  return (
    <main className="bg-black text-white">
      <CollectionHero image="/essentials-hero.png" alt="Essentials menswear collection" eyebrow="Autumn / Winter 2026" title="Essentials" description="A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury. Designed to feel calm, confident, and effortless from day to evening." />
      <EssentialsIntro />
      <FeaturedPieces subtitle="Featured Pieces" title="Built for everyday refinement" products={essentialsProducts} />
      <EditorialSplit />
      {/* <Perspective image="/campaign.png" alt="Perspective image" eyebrow="The Essentials" quote="A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury." /> */}
      <Perspective image="/essentials-images/campaign.png" alt="Perspective image" eyebrow="The Essentials" quote="A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury." imageClassName="object-top" />
    </main>
  );
}
