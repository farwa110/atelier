export default function EssentialsIntro() {
  return (
    <section className="border-t border-white/10 px-6 py-20 md:px-10 lg:px-16 xl:px-20 xl:py-28 mt-8 mb-8">
      {/* <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24"> */}
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-28">
        <div className="max-w-120">
          <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">The Collection</p>

          <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] leading-[0.95] font-light text-white">A wardrobe of elevated essentials.</h2>
        </div>

        <div className="lg:pt-2">
          <p className="max-w-2xl text-[15px] leading-8 text-white/50 md:text-[16px]">Essentials reinterprets the foundations of the modern men&apos;s wardrobe through a quieter lens. Soft neutrals, thoughtful cuts, and premium fabrics shape a collection intended to be worn often and kept for years. Every piece is designed to move with ease between formal and relaxed settings.</p>
        </div>
      </div>
    </section>
  );
}
