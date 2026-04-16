import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-190 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero-model.png" alt="Model wearing Atelier collection" fill priority className="object-cover object-[58%_center]" />
      </div>

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-20 flex h-full items-end">
        <div className="mx-auto w-full max-w-400 px-8 pb-20 md:px-12 lg:px-20">
          <div className="max-w-130">
            <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-[#d2ab67]">Spring / Summer 2026</p>

            <h1 className="mb-10 font-serif text-[clamp(4rem,8vw,7rem)] leading-[0.88] font-light tracking-[-0.03em] text-white">
              The New
              <br />
              Silhouette
            </h1>

            <Link href="#" className="inline-flex items-center border-b border-[#d2ab67] pb-1 text-[11px] uppercase tracking-[0.28em] text-[#d2ab67] transition hover:opacity-80">
              Explore Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
