import Link from "next/link";

const navLinks = [
  { label: "New In", href: "#" },
  { label: "Women", href: "#" },
  { label: "Men", href: "#" },
  { label: "Accessories", href: "#" },
  { label: "Sale", href: "#" },
];

const actionLinks = [
  { label: "Search", href: "#" },
  { label: "Bag (0)", href: "#" },
];

export default function Navbar() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-[#2e2c2a]/90 backdrop-blur-sm">
      <div className="mx-auto grid h-19 w-full max-w-400 grid-cols-[auto_1fr_auto] items-center px-8 md:px-12 lg:px-20">
        <div>
          <Link href="/" className="block font-serif text-[20px] tracking-[0.32em] text-white transition hover:opacity-80">
            ATELIER
          </Link>
        </div>

        <nav className="hidden md:flex justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-8">
          {actionLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
