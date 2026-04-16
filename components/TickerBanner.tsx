"use client";

const items = ["New Arrivals", "Complimentary Shipping Over €150", "Spring / Summer 2026 Now Live", "Sustainable Materials", "Free Returns"];

export default function TickerBanner() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black">
      <div className="flex min-w-max animate-[ticker_28s_linear_infinite] whitespace-nowrap py-5">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="px-10 text-[10px] uppercase tracking-[0.34em] text-white/45">
            {item}
            <span className="ml-4 text-[#d2ab67]">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
