"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const featuredProducts = [
  {
    name: "Merino Knit Sweater",
    category: "Knitwear",
    price: "$180",
    image: "/essentials-knit.png",
  },
  {
    name: "Tailored Wool Trouser",
    category: "Tailoring",
    price: "$220",
    image: "/tailored-trouser.png",
  },
  {
    name: "Structured Overcoat",
    category: "Outerwear",
    price: "$340",
    image: "/essentials-two.png",
  },
];

const looks = [
  {
    title: "Quiet Tailoring",
    text: "Clean-cut essentials designed with restraint, structure, and everyday sophistication.",
    image: "/french.png",
  },
  {
    title: "Modern Uniform",
    text: "Refined layers and neutral textures create a wardrobe that feels timeless and relevant.",
    image: "/modern.png",
  },
];

export default function EssentialsPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}

      <section className="relative min-h-svh overflow-hidden">
        <Image src="/essentials-hero.png" alt="Essentials menswear collection" fill priority className="object-cover object-top" />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-10 lg:px-16 xl:px-20 xl:pb-16">
          <div className="max-w-190">
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">Autumn / Winter 2026</p>

            <h1 className="mb-6 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.92] font-light text-white">Essentials</h1>

            <p className="max-w-xl text-[15px] leading-8 text-white/65 md:text-[16px]">A refined menswear collection built around tactile knitwear, fluid tailoring, and understated luxury. Designed to feel calm, confident, and effortless from day to evening.</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      {/* <section className="border-t border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">The Collection</p>

            <h2 className="max-w-[24rem] font-serif text-[clamp(2.2rem,4vw,4rem)] leading-none font-light text-white">A wardrobe of elevated essentials.</h2>
          </div>

          <div>
            <p className="max-w-184 text-[15px] leading-8 text-white/50">Essentials reinterprets the foundations of the modern men&apos;s wardrobe through a quieter lens. Soft neutrals, thoughtful cuts, and premium fabrics shape a collection intended to be worn often and kept for years. Every piece is designed to move with ease between formal and relaxed settings.</p>
          </div>
        </div>
      </section> */}

      {/* INTRO */}
      <section className="border-t border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28 mt-8 mb-8">
        {/* <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24"> */}
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-28">
          <div className="max-w-120">
            <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">The Collection</p>

            <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] font-light text-white">A wardrobe of elevated essentials.</h2>
          </div>

          <div className="lg:pt-2">
            <p className="max-w-2xl text-[15px] leading-8 text-white/50 md:text-[16px]">Essentials reinterprets the foundations of the modern men&apos;s wardrobe through a quieter lens. Soft neutrals, thoughtful cuts, and premium fabrics shape a collection intended to be worn often and kept for years. Every piece is designed to move with ease between formal and relaxed settings.</p>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      {/* <section className="px-6 pb-20 md:px-10 lg:px-16 xl:px-20 xl:pb-28"> */}
      <section className="px-6 pb-32 md:px-10 lg:px-16 xl:px-20 xl:pb-40">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">Featured Pieces</p>
            <h2 className="font-serif text-[clamp(2rem,3.6vw,3.5rem)] leading-none font-light text-white">Built for everyday refinement</h2>
          </div>

          <Link href="#" className="hidden border-b border-white/25 pb-1 text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:border-[#c6a96b] hover:text-[#c6a96b] md:inline-block">
            View All
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <article key={product.name} className="group">
              <div className="relative mb-5 overflow-hidden bg-[#111]">
                <div className="relative aspect-4/5 w-full">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-white/35">{product.category}</p>
                  <h3 className="font-serif text-[1.6rem] font-light text-white">{product.name}</h3>
                </div>

                <p className="pt-1 text-[13px] text-white/55">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="px-6 pb-20 md:px-10 lg:px-16 xl:px-20 xl:pb-28">
        <div className="grid gap-5 lg:grid-cols-2">
          {looks.map((look) => (
            <article key={look.title} className="group">
              <div className="relative mb-6 overflow-hidden bg-[#111]">
                <div className="relative aspect-[4/5.3] w-full">
                  <Image src={look.image} alt={look.title} fill className="object-cover object-top transition duration-700 group-hover:scale-[1.02]" />
                </div>
              </div>

              <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-[#c6a96b]">Editorial</p>
              <h3 className="mb-3 font-serif text-[clamp(2rem,3vw,3rem)] leading-none font-light text-white">{look.title}</h3>
              <p className="max-w-136 text-[15px] leading-8 text-white/45">{look.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* QUOTE / BRAND BLOCK */}

      <section className="border-y border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="mx-auto max-w-350 text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">Atelier Perspective</p>

          <blockquote className="mx-auto max-w-375 font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.15] font-light text-white">“Luxury begins with restraint — in cut, in fabric, and in the quiet confidence of pieces that do not need to shout.”</blockquote>
        </motion.div>
      </section>

      {/* FULL WIDTH IMAGE */}

      <div className="relative aspect-16/8 w-full overflow-hidden">
        <Image src="/campaign.png" alt="Essentials editorial campaign" fill className="object-contain object-[center_18%]" />
      </div>
      <section className="mt-12 px-6 md:px-10 lg:px-16 xl:px-20 ">
        <Footer />
      </section>
    </main>
  );
}
