import Image from "next/image";

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white px-6 py-20 md:px-16">
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        {/* Left text */}
        <div className="lg:sticky lg:top-24">
          <p className="text-[#b9a77c] uppercase tracking-[0.35em] text-xs mb-6">The Journal</p>

          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Notes on
            <br />
            timeless
            <br />
            <span className="italic text-[#c7b891]">living</span>
          </h1>

          <p className="text-neutral-300 leading-8 max-w-md">A curated space for quiet luxury, considered wardrobes, and intentional everyday rituals. Discover stories shaped by simplicity, quality, and lasting elegance.</p>
        </div>

        {/* Journal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="group">
            <div className="aspect-4/5 bg-neutral-800 overflow-hidden mb-5">
              <Image src="/journal/journal-one.png" alt="Minimal wardrobe" width={400} height={500} className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-700" />
            </div>

            <p className="text-[#b9a77c] uppercase tracking-[0.25em] text-xs mb-3">Wardrobe</p>

            <h2 className="font-serif text-3xl mb-3">The art of buying less, but better</h2>

            <p className="text-neutral-400 leading-7">How refined essentials create a wardrobe that feels effortless, personal, and enduring.</p>
          </article>

          <article className="group md:mt-24">
            <div className="aspect-4/5 bg-neutral-800 overflow-hidden mb-5">
              <Image src="/journal/journal-two.png" alt="Elegant fashion details" width={400} height={500} className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-700" />
            </div>

            <p className="text-[#b9a77c] uppercase tracking-[0.25em] text-xs mb-3">Details</p>

            <h2 className="font-serif text-3xl mb-3">Quiet details that define elegance</h2>

            <p className="text-neutral-400 leading-7">From texture to silhouette, discover how small choices create a lasting impression.</p>
          </article>

          <article className="group md:col-span-2">
            <div className="aspect-16/7 bg-neutral-800 overflow-hidden mb-5">
              <Image src="/journal/journal-three.png" alt="Natural materials" width={800} height={350} className="h-full w-full object-cover opacity-90 group-hover:scale-105 transition duration-700" />
            </div>

            <p className="text-[#b9a77c] uppercase tracking-[0.25em] text-xs mb-3">Materials</p>

            <h2 className="font-serif text-4xl mb-3">Designed with purpose, made to last</h2>

            <p className="text-neutral-400 leading-7 max-w-2xl">A reflection on thoughtful materials, slow design, and the beauty of pieces that become part of your everyday rhythm.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
