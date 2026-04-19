import CollectionHero from "@/components/essentials/CollectionHero";
import FeaturedPieces from "@/components/essentials/FeaturedPieces";
import type { Product } from "@/components/essentials/FeaturedPieces";
import Perspective from "@/components/essentials/Perspective";
import Footer from "@/components/Footer";

const linenProducts = [
  {
    id: "linen-camp-shirt",
    name: "Linen Camp Shirt",
    category: "Shirting",
    price: "$140",
    image: "/white-front.png",
  },
  {
    id: "wide-linen-trouser",
    name: "Wide Linen Trouser",
    category: "Trousers",
    price: "$190",
    image: "/white-back.png",
  },
  {
    id: "soft-linen-blazer",
    name: "Soft Linen Blazer",
    category: "Tailoring",
    price: "$280",
    image: "/linen-five.png",
  },
  {
    id: "linen-drawstring",
    name: "Linen Drawstring Pant",
    category: "Casualwear",
    price: "$160",
    image: "/linen-girl.png",
  },
  {
    id: "open-back-linen",
    name: "Open-Back Linen Dress",
    category: "Dresses",
    price: "$210",
    image: "/linen-four.png",
  },
  {
    id: "ribbed-linen",
    name: "Ribbed Linen Dress",
    category: "Dresses",
    price: "$240",
    image: "/linen-three.png",
  },
];

export default function LinenPage() {
  return (
    <main className="bg-black text-white">
      <CollectionHero image="/linen-hero.png" alt="Linen collection" eyebrow="Spring / Summer 2026" title="Linen" description="Light, breathable silhouettes crafted for warm days, quiet luxury, and effortless movement." overlayClassName="bg-gradient-to-t from-black/30 via-black/10 to-transparent" imageClassName="object-cover object-top" eyebrowClassName="text-[#b08a52]" descriptionClassName="text-white/80" />

      <FeaturedPieces subtitle="Linen Collection" title="Lightweight pieces for warmer days" products={linenProducts} />
      <Perspective image="/linen-campaign.png" alt="Linen perspective" eyebrow="The Linen Collection" quote="Light, breathable silhouettes crafted for warm days, quiet luxury, and effortless movement." imageClassName="object-top" />

      {/* <Footer /> */}
    </main>
  );
}
