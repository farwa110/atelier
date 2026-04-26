"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type PerspectiveProps = {
  eyebrow: string;
  quote: string;
  image: string;
  alt: string;
  imageClassName?: string;
};

export default function Perspective({ eyebrow, quote, image, alt, imageClassName }: PerspectiveProps) {
  return (
    <>
      <section className="border-y border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.9 }} className="mx-auto max-w-350 text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">{eyebrow}</p>

          <blockquote className="mx-auto max-w-375 font-serif text-[clamp(2rem,4.2vw,4rem)] leading-[1.15] font-light text-white">{quote}</blockquote>
        </motion.div>
      </section>

      <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="relative aspect-16/8 w-full overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 1.4 }} className="absolute inset-0">
          <Image src={image} alt={alt} fill className={`object-cover ${imageClassName ?? "object-center"}`} />
        </motion.div>
      </motion.div>
    </>
  );
}
