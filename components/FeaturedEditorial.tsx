"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const cards = [
  {
    title: "Accessories",
    subtitle: "The Details",
    image: "/collection-3.jpg",

    href: "/accesories",
    position: "object-[center_center]",
  },
  {
    title: "Outerwear",
    subtitle: "Statement Pieces",
    image: "/collection-4.jpg",
    href: "/outerwear",
    position: "object-[center_top]",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
export default function FeaturedEditorial() {
  return (
    <section className="bg-black px-8 py-4 md:px-12 md:py-6 lg:px-16 xl:px-20">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div key={card.title} custom={index} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <Link href={card.href} className="group relative block overflow-hidden bg-neutral-900">
              <div className="relative aspect-4/5 w-full">
                <Image src={card.image} alt={card.title} fill className={`object-cover transition duration-700 group-hover:scale-[1.03] ${card.title === "Accessories" ? "object-center" : "object-[center_top]"}`} />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/55">
                  {card.subtitle}
                </motion.p>

                <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.28 + index * 0.1 }} className="font-serif text-[2rem] leading-none font-light text-white md:text-[2.5rem]">
                  {card.title}
                </motion.h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
