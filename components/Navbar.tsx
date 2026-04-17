// // import Link from "next/link";

// // const navLinks = [
// //   { label: "New In", href: "#" },
// //   { label: "Women", href: "#" },
// //   { label: "Men", href: "#" },
// //   { label: "Accessories", href: "#" },
// //   { label: "Sale", href: "#" },
// // ];

// // const actionLinks = [
// //   { label: "Search", href: "#" },
// //   { label: "Bag (0)", href: "#" },
// // ];

// // export default function Navbar() {
// //   return (
// //     <header className="sticky inset-x-0 top-0 z-50 bg-[#2e2c2a]/90 backdrop-blur-sm">
// //       <div className="mx-auto grid h-19 w-full max-w-400 grid-cols-[auto_1fr_auto] items-center px-8 md:px-12 lg:px-20">
// //         <div>
// //           <Link href="/" className="block font-serif text-[20px] tracking-[0.32em] text-white transition hover:opacity-80">
// //             ATELIER
// //           </Link>
// //         </div>

// //         <nav className="hidden md:flex justify-center">
// //           <ul className="flex items-center gap-10">
// //             {navLinks.map((link) => (
// //               <li key={link.label}>
// //                 <Link href={link.href} className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white">
// //                   {link.label}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>

// //         <div className="flex items-center justify-end gap-8">
// //           {actionLinks.map((link) => (
// //             <Link key={link.label} href={link.href} className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white">
// //               {link.label}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// import Link from "next/link";

// const navLinks = [
//   { label: "New In", href: "#" },
//   { label: "Women", href: "#" },
//   { label: "Men", href: "#" },
//   { label: "Accessories", href: "#" },
//   { label: "Sale", href: "#" },
// ];

// export default function Navbar() {
//   return (
//     <header className="sticky inset-x-0 top-0 z-50 border-b border-white/8 bg-[#2e2c2a]/88 backdrop-blur-md">
//       <div className="mx-auto grid h-19 w-full max-w-400 grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 lg:px-16 xl:px-20">
//         {/* Logo */}
//         <div>
//           <Link href="/" className="block font-serif text-[1.25rem] tracking-[0.28em] text-white transition-opacity duration-300 hover:opacity-80">
//             ATELIER
//           </Link>
//         </div>

//         {/* Desktop nav */}
//         <nav className="hidden lg:flex justify-center">
//           <ul className="flex items-center gap-8 xl:gap-10">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link href={link.href} className="relative text-[10px] uppercase tracking-[0.22em] text-white/68 transition-colors duration-300 hover:text-white">
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right side */}
//         <div className="flex items-center justify-end gap-5 md:gap-7">
//           <Link href="#" className="hidden sm:inline-block text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-white">
//             Search
//           </Link>

//           <Link href="#" className="text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 hover:text-white">
//             Bag (0)
//           </Link>

//           <button className="lg:hidden text-[10px] uppercase tracking-[0.22em] text-white/75 transition-colors duration-300 hover:text-white">Menu</button>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "New In", href: "#" },
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Sale", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#2e2c2a]/90 backdrop-blur-md">
        <div className="mx-auto grid h-19 max-w-400 grid-cols-[auto_1fr_auto] items-center px-6 md:px-10 lg:px-16">
          <Link href="/" className="font-serif text-[1.25rem] tracking-[0.28em] text-white">
            ATELIER
          </Link>

          {/* desktop nav */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="relative text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-white
                    after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* right side */}
          <div className="flex justify-end gap-6">
            <button onClick={() => setOpen(true)} className="lg:hidden text-[10px] uppercase tracking-[0.22em] text-white/70 hover:text-white">
              Menu
            </button>

            <Link href="#" className="text-[10px] uppercase tracking-[0.22em] text-white/60">
              Bag (0)
            </Link>
          </div>
        </div>
      </header>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-100 bg-black">
            {/* CLOSE BUTTON */}
            <button onClick={() => setOpen(false)} className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.22em] text-white/70">
              Close
            </button>

            {/* MENU LINKS */}
            <div className="flex h-full flex-col items-center justify-center gap-10">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={link.href} className="font-serif text-[clamp(2rem,4vw,3rem)] text-white hover:text-[#c6a96b] transition" onClick={() => setOpen(false)}>
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
