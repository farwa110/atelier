"use client";

export default function NewsletterSection() {
  return (
    <section className="border-t border-white/10 bg-black px-8 py-20 md:px-12 lg:px-16 xl:px-20">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="mb-6 text-[11px] uppercase tracking-[0.34em] text-white/55">Stay Connected</p>

          <h2 className="mb-8 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[0.92] font-light text-white">
            Join the
            <br />
            <span className="italic text-[#c6a96b]">Inner Circle</span>
          </h2>

          <p className="max-w-[420px] text-[15px] leading-8 text-white/45">Be the first to discover new collections, exclusive events, and editorial stories from Atelier.</p>

          <div className="mt-10 border-t border-white/10 pt-10">
            <div className="grid max-w-[540px] grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">12K+</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Members</p>
              </div>

              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">4</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Collections / Year</p>
              </div>

              <div>
                <p className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-none font-light text-[#c6a96b]">48h</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-white/40">Early Access</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-16">
          <p className="mb-10 text-[11px] uppercase tracking-[0.34em] text-white/55">Exclusive Access. No Noise.</p>

          <form className="space-y-8">
            <div className="border-b border-white/10 pb-4">
              <input type="text" placeholder="First name" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/45 focus:outline-none" />
            </div>

            <div className="flex items-end gap-6 border-b border-white/10 pb-4">
              <input type="email" placeholder="Email address" className="w-full bg-transparent text-[15px] text-white placeholder:text-white/45 focus:outline-none" />
              <button type="submit" className="shrink-0 text-[11px] uppercase tracking-[0.3em] text-[#c6a96b] transition hover:opacity-80">
                Subscribe
              </button>
            </div>

            <p className="max-w-[620px] text-[14px] leading-7 text-white/30">By subscribing you agree to our privacy policy. We&apos;ll never share your details or spam your inbox.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
