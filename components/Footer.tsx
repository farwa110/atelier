import Link from "next/link";

const footerLinks = ["Shop", "About", "Contact", "Privacy"];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-10 lg:px-16 xl:px-20">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="inline-block font-serif text-[clamp(1.6rem,3vw,2.4rem)] tracking-[0.18em] text-white">
            ATELIER
          </Link>

          <p className="mt-3 max-w-104 text-[14px] leading-7 text-white/40">Considered fashion for the modern wardrobe.</p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link key={link} href="#" className="text-[14px] text-white/40 transition hover:text-white/70">
              {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6">
        <p className="text-[13px] text-white/25">© 2026 Atelier. All rights reserved.</p>
      </div>
    </footer>
  );
}

// import Link from "next/link";

// const shopLinks = ["New In", "Women", "Men", "Accessories", "Sale"];
// const helpLinks = ["Shipping", "Returns", "Size Guide", "Contact", "FAQs"];
// const aboutLinks = ["Our Story", "Sustainability", "Careers", "Press", "Journal"];
// const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Settings", "Accessibility"];
// const bottomLinks = ["Privacy", "Terms", "Cookies"];
// const socials = ["IG", "PT", "TK", "YT"];

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/10 bg-black px-8 py-20 md:px-12 lg:px-16 xl:px-20">
//       <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
//         <div>
//           <Link href="/" className="inline-block font-serif text-[clamp(2rem,4vw,3.25rem)] tracking-[0.28em] text-white">
//             ATELIER
//           </Link>

//           <p className="mt-8 max-w-[320px] text-[15px] leading-8 text-white/45">Considered fashion for the modern wardrobe. Designed with purpose, crafted to last.</p>

//           <div className="mt-10 flex gap-4">
//             {socials.map((item) => (
//               <Link key={item} href="#" className="flex h-11 w-11 items-center justify-center border border-white/10 text-[11px] uppercase tracking-[0.2em] text-white/55 transition hover:border-[#c6a96b]/40 hover:text-[#c6a96b]">
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>

//         <FooterColumn title="Shop" links={shopLinks} />
//         <FooterColumn title="Help" links={helpLinks} />
//         <FooterColumn title="About" links={aboutLinks} />
//         <FooterColumn title="Legal" links={legalLinks} />
//       </div>

//       <div className="mt-16 border-t border-white/10 pt-10">
//         <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
//           <p className="text-[14px] text-white/28">© 2026 Atelier. All rights reserved.</p>

//           <div className="flex gap-8">
//             {bottomLinks.map((item) => (
//               <Link key={item} href="#" className="text-[14px] text-white/28 transition hover:text-white/50">
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// type FooterColumnProps = {
//   title: string;
//   links: string[];
// };

// function FooterColumn({ title, links }: FooterColumnProps) {
//   return (
//     <div>
//       <p className="mb-8 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">{title}</p>

//       <div className="space-y-5">
//         {links.map((link) => (
//           <Link key={link} href="#" className="block text-[15px] text-white/45 transition hover:text-white/75">
//             {link}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
