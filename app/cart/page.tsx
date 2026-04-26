"use client";

import Image from "next/image";
import { useCartStore } from "@/app/store/cartStore";
import Link from "next/link";
import { X } from "lucide-react";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const totalPrice = cart.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <section className="px-6 py-20 md:px-10 lg:px-16 xl:px-20 bg-black text-white min-h-screen">
      <h1 className="mb-10 font-serif text-4xl text-white">Your Selection</h1>

      {cart.length === 0 ? (
        <p className="text-white/70">Your bag is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <article key={item.id} className="flex gap-4 border-b border-white/10 pb-6">
              <div className="relative h-32 w-24 overflow-hidden bg-[#111]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: item.imagePosition || "center center",
                  }}
                />
              </div>

              <div className="flex flex-1 items-start justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">{item.category}</p>
                  <h2 className="font-serif text-md text-white md:text-2xl">{item.name}</h2>
                  <p className="mt-2 text-white/60">{item.price}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <button onClick={() => decreaseQuantity(item.id)} className="border border-white/20 px-3 py-1 text-white">
                      -
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="border border-white/20 px-3 py-1 text-white">
                      +
                    </button>
                  </div>
                </div>

                {/* <button onClick={() => removeFromCart(item.id)} className="text-sm  upercase tracking-[0.2em] text-white/55 hover:text-[#c6a96b]">
                  Remove
                </button> */}
                <button onClick={() => removeFromCart(item.id)} className="uppercase tracking-[0.18em] text-white/40 hover:text-[#c6a96b] text-[10px] md:text-[11px]">
                  <span className="md:hidden">
                    <X size={14} />
                  </span>
                  <X className="hidden md:inline" size={16} />
                  <span className="hidden md:inline">Remove</span>
                </button>
              </div>
            </article>
          ))}

          <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
            <h2 className="text-xl text-white">Total: {totalPrice.toFixed(2)}</h2>

            {/* <button className="border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-[#c6a96b] hover:text-[#c6a96b]">Pay Now</button> */}
            <Link href="/payment" className="bg-white px-6 py-3 text-[11px] uppercase tracking-[0.24em] text-black transition hover:bg-[#c6a96b] hover:text-black disabled:bg-white/30 disabled:text-black/50 disabled:cursor-not-allowed">
              Pay Now
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
