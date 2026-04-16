"use client";

const items = ["Timeless Silhouettes", "Modern Wardrobe", "Spring — Summer 2026", "Effortless Elegance", "Considered Materials"];

export default function MarqueeBanner() {
  return (
    <section className="overflow-hidden border-y bg-black">
      <div className="flex min-w-max whitespace-nowrap py-10" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center px-14 font-serif text-4xl italic leading-none text-white/20">
            {item}
            <span className="ml-10 text-[#c6a96b]/80">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}
