// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // export type Product = {
// //   id: string;
// //   name: string;
// //   category: string;
// //   price: string;
// //   image: string;
// // };
// export type Product = {
//   id: string;
//   name: string;
//   category: string;
//   price: string;
//   image: string;
//   imagePosition?: string;
// };
// type FeaturedPiecesProps = {
//   title?: string;
//   subtitle?: string;
//   products: Product[];
// };

// export default function FeaturedPieces({ title = "Built for everyday refinement", subtitle = "Featured Pieces", products = [] }: FeaturedPiecesProps) {
//   const [showAll, setShowAll] = useState(false);

//   const visibleProducts: Product[] = showAll ? products : products.slice(0, 3);

//   return (
//     <section className="px-6  pt-10 pb-32 md:px-10 lg:px-16 xl:px-20 xl:pb-40">
//       <div className="mb-10 flex items-end justify-between gap-6">
//         <div>
//           <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">{subtitle}</p>
//           <h2 className="font-serif text-[clamp(2rem,3.6vw,3.5rem)] leading-none font-light text-white">{title}</h2>
//         </div>

//         {products.length > 3 && (
//           <button type="button" onClick={() => setShowAll(!showAll)} className="hidden border-b border-white/25 pb-1 text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:border-[#c6a96b] hover:text-[#c6a96b] md:inline-block">
//             {showAll ? "View Less" : "View All"}
//           </button>
//         )}
//       </div>

//       <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
//         {visibleProducts.map((product) => (
//           <article key={product.id} className="group">
//             {/* <div className="relative mb-5 overflow-hidden bg-[#111]">
//               <div className="relative aspect-4/5 w-full">
//                 <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" />
//               </div>
//             </div> */}
//             <div className="relative mb-5 overflow-hidden bg-[#111]">
//               <div className="relative aspect-4/5 w-full">
//                 <Image src={product.image} alt={product.name} fill className="object-cover transition duration-700 group-hover:scale-[1.02]" style={{ objectPosition: product.imagePosition || "center center" }} />
//               </div>
//             </div>

//             <div className="flex items-start justify-between gap-4">
//               <div>
//                 <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-white/35">{product.category}</p>
//                 <h3 className="font-serif text-[1.6rem] font-light text-white">{product.name}</h3>
//               </div>

//               <p className="pt-1 text-[13px] text-white/55">{product.price}</p>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  imagePosition?: string;
};

type FeaturedPiecesProps = {
  title?: string;
  subtitle?: string;
  products: Product[];
};

export default function FeaturedPieces({ title = "Built for everyday refinement", subtitle = "Featured Pieces", products = [] }: FeaturedPiecesProps) {
  const [showAll, setShowAll] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const visibleProducts: Product[] = showAll ? products : products.slice(0, 3);

  return (
    <section className="px-6 pt-10 pb-32 md:px-10 lg:px-16 xl:px-20 xl:pb-40">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">{subtitle}</p>
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.5rem)] leading-none font-light text-white">{title}</h2>
        </div>

        {products.length > 3 && (
          <button type="button" onClick={() => setShowAll(!showAll)} className="hidden border-b border-white/25 pb-1 text-[11px] uppercase tracking-[0.28em] text-white/65 transition hover:border-[#c6a96b] hover:text-[#c6a96b] md:inline-block">
            {showAll ? "View Less" : "View All"}
          </button>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <article key={product.id} className="group">
            <div className="relative mb-5 overflow-hidden bg-[#111]">
              <div className="relative aspect-4/5 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  style={{
                    objectPosition: product.imagePosition || "center center",
                  }}
                />
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-white/35">{product.category}</p>
                <h3 className="font-serif text-[1.6rem] font-light text-white">{product.name}</h3>
              </div>

              <p className="pt-1 text-[13px] text-white/55">{product.price}</p>
            </div>

            <button type="button" onClick={() => addToCart(product)} className="mt-4 w-full border border-white/20 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-[#c6a96b] hover:text-[#c6a96b]">
              Add to bag
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
