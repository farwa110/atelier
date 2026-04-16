"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut", delay },
  }),
};

export default function EditorialSplit() {
  return (
    <section className="w-full bg-[#0a0a0a] min-h-screen flex items-stretch">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* ── LEFT: Text ── */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-0 lg:border-r lg:border-white/6">
          <div className="max-w-sm">
            {/* Eyebrow */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-(--primary)uppercase tracking-[0.25em] text-[0.6875rem] mb-6">
              The Edit
            </motion.p>

            {/* Heading — "intention" in gold italic */}
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} className=" font-serif text-white font-normal leading-[1.05] mb-8" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)" }}>
              Where minimalism meets <em className="text-var(--primary)not-italic">intention</em>
            </motion.h2>

            {/* Body */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} className="text-var(--muted-fg) text-[0.9rem] leading-[1.75] mb-12">
              Each piece is designed with purpose — timeless silhouettes crafted from considered materials for the modern wardrobe. We believe in buying less, choosing well, and making it last.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
              <Link href="/journal" className="inline-block text-white/80 uppercase tracking-[0.2em] text-[0.6875rem] border-b border-white/30 pb-0.5 hover:text-[var(--primary)] hover:border-[var(--primary)] transition-colors duration-300">
                Read the Journal
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── RIGHT: Image grid ── */}
        <div className="relative flex items-center justify-center">
          {/* Dot connector */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-(--primary)/40 bg-[#0a0a0a] items-center justify-center z-10">
            <div className="w-2 h-2 rounded-full bg-(--primary)" />
          </div>

          {/* 2-col image grid: tall left, stacked right */}
          <div className="w-full h-full grid grid-cols-2 gap-3 p-8 lg:pl-12 lg:pr-8 lg:py-12">
            {/* Tall left image */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15} className="relative row-span-2 overflow-hidden bg-(--dark-surface)" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/editorial-1.jpg" // replace with your image
                alt="Editorial image one"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Top-right image */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.25} className="relative overflow-hidden bg-(--dark-surface)" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/editorial-2.jpg" // replace with your image
                alt="Editorial image two"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom-right image */}
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.35} className="relative overflow-hidden bg-(--dark-surface)" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/editorial-3.jpg" // replace with your image
                alt="Editorial image three"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
