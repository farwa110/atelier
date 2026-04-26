import Hero from "@/components/Hero";

import Collections from "@/components/Collections";
import TickerBanner from "@/components/TickerBanner";
import FeaturedEditorial from "@/components/FeaturedEditorial";
import MarqueeBanner from "@/components/MarqueeBanner";
import EditorialSplit from "@/components/Editorialsplit ";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Collections id="Collections" />
      <TickerBanner />
      <FeaturedEditorial />
      <MarqueeBanner />
      <EditorialSplit />
      <NewsletterSection />
    </main>
  );
}
