import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Collections from "@/components/Collections";
import TickerBanner from "@/components/TickerBanner";
import FeaturedEditorial from "@/components/FeaturedEditorial";
import MarqueeBanner from "@/components/MarqueeBanner";
import EditorialSplit from "@/components/Editorialsplit ";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <TickerBanner />
      <FeaturedEditorial />
      <MarqueeBanner />
      <EditorialSplit />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
