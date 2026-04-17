"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
export default function FeaturedPieces() {
  return (
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
  );
}
