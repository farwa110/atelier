"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay,
    },
  }),
};

export default function EditorialSplit() {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex items-center px-8 py-20 md:px-14 lg:px-20 lg:border-r lg:border-white/10">
          <div className="max-w-md">
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="mb-6 uppercase tracking-[0.28em] text-[0.7rem] text-(--primary)">
              The Edit
            </motion.p>

            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} className="mb-8 font-serif text-white leading-[1.05]" style={{ fontSize: "clamp(2.6rem, 4.7vw, 4.5rem)" }}>
              Where minimalism meets <em className="italic text-(--primary)">intention</em>
            </motion.h2>

            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} className="mb-12 max-w-sm text-[0.95rem] leading-[1.9] text-white/65">
              Each piece is designed with purpose — timeless silhouettes crafted from considered materials for the modern wardrobe. We believe in buying less, choosing well, and making it last.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
              <Link href="/journal" className="inline-block border-b border-white/30 pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-white/80 transition-colors duration-300 hover:border-[var(--primary)] hover:text-[var(--primary)]">
                Read the Journal
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center px-6 py-10 md:px-10 lg:px-14 lg:py-14">
          <div className="grid w-full max-w-225 grid-cols-1 gap-4 sm:grid-cols-[1.05fr_0.95fr] lg:gap-5">
            {/* Left image spans both right images */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} className="relative min-h-100 overflow-hidden bg-[#151515] sm:row-span-2">
              <Image src="/look.png" alt="Neutral wardrobe editorial" fill className="object-cover" />
            </motion.div>

            {/* Top right */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.25} className="relative min-h-70 overflow-hidden bg-[#151515]">
              <Image src="/beige.png" alt="Beige editorial flat lay" fill className="object-cover" />
            </motion.div>

            {/* Bottom right */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.35} className="relative min-h-105 overflow-hidden bg-[#151515]">
              <Image src="/white.png" alt="White dress editorial" fill className="object-cover object-center" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
