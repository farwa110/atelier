"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CollectionHero from "@/components/essentials/CollectionHero";
import EssentialsIntro from "@/components/essentials/Intro";
import FeaturedPieces from "@/components/essentials/FeaturedPieces";
import EditorialSplit from "@/components/essentials/EditorialSplit";
import Perspective from "@/components/essentials/Perspective";

export default function EssentialsPage() {
  return (
    <main className="bg-black text-white">
      <CollectionHero image="/essentials-hero.png" alt="Essentials menswear collection" eyebrow="Autumn / Winter 2026" title="Essentials" description="A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury. Designed to feel calm, confident, and effortless from day to evening." />
      <EssentialsIntro />
      <FeaturedPieces />
      <EditorialSplit />
      <Perspective />
    </main>
  );
}
