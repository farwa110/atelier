"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";

const navLinks = [
  { label: "Women", href: "/linen" },
  { label: "Men", href: "/essentials" },
  { label: "Accessories", href: "/accesories" },
  { label: "Outwear", href: "/outerwear" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#2e2c2a]/90 backdrop-blur-md">
        <div className="mx-auto grid h-19 max-w-400 grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 lg:px-16">
          {/* <Link href="/" className="font-serif text-[1.2rem] tracking-[0.34em] font-light text-white hover:text-[#c6a96b] transition">
            ATELIER
          </Link> */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-serif text-[1.2rem] tracking-[0.34em] font-light text-white hover:text-[#c6a96b] transition">ATELIER</span>
            <span className="mt-1 h-px w-10  bg-[#c6a96b]" />
          </Link>

          <nav className="hidden justify-center lg:flex">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative text-[10px] uppercase tracking-[0.22em] text-white/70
                    after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full transition hover:text-[#c6a96b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex justify-end gap-6">
            <button onClick={() => setOpen(true)} className="text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-white lg:hidden">
              Menu
            </button>

            <Link href="/cart" className="text-[10px] uppercase tracking-[0.22em] text-white/60 hover:text-white">
              Bag ({totalItems})
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 bg-black">
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.22em] text-white/70">
              Close
            </button>

            <div className="flex h-full flex-col items-center justify-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={link.href} className="font-serif text-[clamp(2rem,4vw,3rem)] text-white transition hover:text-[#c6a96b]" onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
