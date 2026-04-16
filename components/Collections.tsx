import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Essentials",
    subtitle: "Autumn / Winter 2026",
    image: "/collection-1.jpg",
    href: "#",
    position: "object-[center_top]",
  },
  {
    title: "Linen Edit",
    subtitle: "Effortless Elegance",
    image: "/collection-2.jpg",
    href: "#",
    position: "object-center",
  },
];

export default function Collections() {
  return (
    <section className="bg-black px-8 py-8 md:px-12 md:py-10 lg:px-16 xl:px-20">
      <div className="mb-8">
        <p className="text-[11px] uppercase tracking-[0.34em] text-[#b89652]">Collections</p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {collections.map((item) => (
          <Link key={item.title} href={item.href} className="group relative block overflow-hidden bg-neutral-900">
            <div className="relative aspect-4/5 w-full">
              {/* <Image src={item.image} alt={item.title} fill className="object-cover object-center transition duration-700 group-hover:scale-[1.03]" /> */}
              <Image src={item.image} alt={item.title} fill priority className={`${item.position} object-cover transition duration-700 group-hover:scale-[1.03]`} />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/55">{item.subtitle}</p>
              <h2 className="font-serif text-[2rem] leading-none font-light text-white md:text-[2.4rem]">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
