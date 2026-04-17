"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function NewsletterSection() {
  return (
    <section className="border-t border-white/10 bg-black px-8 py-20 md:px-12 lg:px-16 xl:px-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32">
        {/* LEFT */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-white/55">Stay Connected</p>

          <h2 className="mb-8 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] font-light text-white">
            Join the
            <br />
            <span className="italic text-[#c6a96b]">Inner Circle</span>
          </h2>

          <p className="max-w-136 text-[15px] leading-8 text-white/45">Be the first to discover new collections, exclusive events, and editorial stories from Atelier.</p>

          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="grid max-w-2xl grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">
                  <CountUp to={12} suffix="K+" />
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-white/40">Members</p>
              </div>

              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">
                  <CountUp to={4} />
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-white/40">Collections / Year</p>
              </div>

              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">
                  <CountUp to={48} suffix="h" />
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-white/40">Early Access</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="lg:pt-16">
          <div className="max-w-216 rounded-[28px] border border-white/10 bg-white/2 p-6 sm:p-8 lg:p-10">
            <p className="mb-10 text-[11px] uppercase tracking-[0.34em] text-white/55">Exclusive Access. No Noise.</p>

            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group border-b border-white/10 pb-4 transition-colors focus-within:border-[#c6a96b]">
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/35">First name</label>
                  <input type="text" placeholder="Your first name" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/35 focus:outline-none" />
                </div>

                <div className="group border-b border-white/10 pb-4 transition-colors focus-within:border-[#c6a96b]">
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-white/35">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/35 focus:outline-none" />
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-6 pt-2 sm:flex-row sm:items-center">
                <p className="max-w-152 text-[14px] leading-7 text-white/30">By subscribing you agree to our privacy policy. We&apos;ll never share your details or spam your inbox.</p>

                <button type="submit" className="inline-flex min-w-42.5 items-center justify-center rounded-full border border-[#c6a96b]/40 px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-[#c6a96b] transition duration-300 hover:border-[#c6a96b] hover:bg-[#c6a96b] hover:text-black">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// export default function NewsletterSection() {
//   return (
//     <section className="border-t border-white/10 bg-black px-8 py-20 md:px-12 lg:px-16 xl:px-20">
//       <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
//         <div>
//           <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-white/55">Stay Connected</p>

//           <h2 className="mb-8 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] font-light text-white">
//             Join the
//             <br />
//             <span className="italic text-[#c6a96b]">Inner Circle</span>
//           </h2>

//           <p className="max-w-105 text-[15px] leading-8 text-white/45">Be the first to discover new collections, exclusive events, and editorial stories from Atelier.</p>

//           <div className="mt-10 border-t border-white/10 pt-10">
//             <div className="grid max-w-135 grid-cols-3 gap-8">
//               <div>
//                 <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">12K+</p>
//                 <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Members</p>
//               </div>

//               <div>
//                 <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">4</p>
//                 <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Collections / Year</p>
//               </div>

//               <div>
//                 <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">48h</p>
//                 <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Early Access</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:pt-16">
//           <p className="mb-10 text-[11px] uppercase tracking-[0.34em] text-white/55">Exclusive Access. No Noise.</p>

//           <form className="space-y-8">
//             <div className="border-b border-white/10 pb-4">
//               <input type="text" placeholder="First name" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/45 focus:outline-none" />
//             </div>

//             <div className="flex items-end gap-6 border-b border-white/10 pb-4">
//               <input type="email" placeholder="Email address" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/45 focus:outline-none" />
//               <button type="submit" className="shrink-0 text-[11px] uppercase tracking-[0.3em] text-[#c6a96b] transition hover:opacity-80">
//                 Subscribe
//               </button>
//             </div>

//             <p className="max-w-155 text-[14px] leading-7 text-white/30">By subscribing you agree to our privacy policy. We&apos;ll never share your details or spam your inbox.</p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
