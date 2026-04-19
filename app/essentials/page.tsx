"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
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
    image: "/essentials-knit.png",
  },
  {
    id: "tailored-wool-trouser",
    name: "Tailored Wool Trouser",
    category: "Tailoring",
    price: "$220",
    image: "/tailored-trouser.png",
  },
  {
    id: "structured-overcoat",
    name: "Structured Overcoat",
    category: "Outerwear",
    price: "$340",
    image: "/essentials-two.png",
  },
  {
    id: "cashmere-scarf",
    name: "Cashmere Scarf",
    category: "Accessories",
    price: "$95",
    image: "/cashmere-scarf.png",
  },
  {
    id: "relaxed-shirt",
    name: "Relaxed Shirt",
    category: "Shirting",
    price: "$150",
    image: "/relaxed-shirt.png",
  },
  {
    id: "leather-loafer",
    name: "Leather Loafer",
    category: "Footwear",
    price: "$260",
    image: "/leather-loafer.png",
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
      <Perspective image="/campaign.png" alt="Perspective image" eyebrow="The Essentials" quote="A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury." imageClassName="object-top" />
    </main>
  );
}
