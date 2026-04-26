"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import OrderSteps from "@/components/checkout/OrderSteps";
import { useCartStore } from "@/app/store/cartStore";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-5xl">
        <OrderSteps currentStep={2} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="flex flex-col justify-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">Payment Confirmed</p>

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#c6a96b] bg-[#c6a96b] text-black">
              <Check size={28} strokeWidth={2} />
            </div>

            <h1 className="mb-6 font-serif text-[clamp(2.8rem,6vw,5rem)] leading-none font-light">Order Placed</h1>

            <p className="max-w-2xl text-[15px] leading-8 text-white/65 md:text-[16px]">Thank you for your purchase. Your order has been successfully placed and is now being prepared. You will receive an update as it moves through the next stage.</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="bg-white px-6 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-black transition hover:bg-[#c6a96b]">
                Continue Shopping
              </Link>

              <Link href="/cart" className="border border-white/15 px-6 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-white transition hover:border-[#c6a96b] hover:text-[#c6a96b]">
                Back to Bag
              </Link>
            </div>
          </section>

          <aside className="h-fit border border-white/10 p-6">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-white/35">Order Summary</p>

            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">{item.category}</p>
                    <h2 className="font-serif text-[1.4rem] font-light text-white">{item.name}</h2>
                    <p className="mt-1 text-white/55">
                      {item.price} × {item.quantity}
                    </p>
                  </div>

                  <p className="pt-1 text-white/70">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-white/60">Total</span>
              <span className="font-serif text-2xl text-white">{totalPrice.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
