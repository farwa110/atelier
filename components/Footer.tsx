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

          {/* <span className="mt-3 block h-px w-10 bg-[#c6a96b]" /> */}
          <span className="mt-3 block h-px w-12 bg-linear-to-r from-[#c6a96b] to-transparent" />

          <p className="mt-4 max-w-104 text-[14px] leading-7 text-white/40">Considered fashion for the modern wardrobe.</p>
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
