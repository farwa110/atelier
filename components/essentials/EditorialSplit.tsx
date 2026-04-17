"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
export default function EditorialSplit() {
  return (
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
  );
}
