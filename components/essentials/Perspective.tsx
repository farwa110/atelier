"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Footer from "../Footer";

export default function Perspective() {
  return (
    <>
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
    </>
  );
}
