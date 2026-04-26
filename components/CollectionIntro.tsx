"use client";

import { motion } from "framer-motion";
type CollectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function CollectionIntro({ eyebrow, title, description }: CollectionIntroProps) {
  return (
    <section className="bg-black border-t border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28 mt-8 mb-8">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-28">
        {/* LEFT */}
        <motion.div className="max-w-120" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true }}>
          <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">{eyebrow}</p>

          <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] font-light text-white">{title}</h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="lg:pt-2" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} viewport={{ once: true }}>
          <p className="max-w-2xl text-[15px] leading-8 text-white/50 md:text-[16px]">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
