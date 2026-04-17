import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import CollectionHero from "@/components/essentials/CollectionHero";

export default function LinenPage() {
  return (
    <main className="bg-black text-white">
      <CollectionHero image="/linen-hero.png" alt="Linen collection" eyebrow="Spring / Summer 2026" title="Linen" description="Light, breathable silhouettes crafted for warm days, quiet luxury, and effortless movement." overlayClassName="bg-gradient-to-t from-black/30 via-black/10 to-transparent" imageClassName="object-cover object-top" eyebrowClassName="text-[#b08a52]" descriptionClassName="text-white/80" />
      <Footer />
    </main>
  );
}
