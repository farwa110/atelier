"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";
import OrderSteps from "@/components/checkout/OrderSteps";

export default function PaymentPage() {
  const cart = useCartStore((state) => state.cart);

  const totalPrice = cart.reduce((total, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.]/g, ""));
    return total + numericPrice * item.quantity;
  }, 0);

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-5xl">
        <OrderSteps currentStep={1} />

        <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-[#c6a96b]">Secure Checkout</p>

        <h1 className="mb-12 font-serif text-[clamp(2.5rem,5vw,5rem)] font-light leading-none">Payment</h1>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <div>
              <h2 className="mb-4 font-serif text-2xl font-light">Contact Details</h2>

              <div className="grid gap-4">
                <input type="text" placeholder="Full name" className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35" />
                <input type="email" placeholder="Email address" className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35" />
              </div>
            </div>

            <div>
              <h2 className="mb-4 font-serif text-2xl font-light">Payment Details</h2>

              <div className="grid gap-4">
                <input type="text" placeholder="Card number" className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35" />
                <div className="grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="MM / YY" className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35" />
                  <input type="text" placeholder="CVC" className="border border-white/10 bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/35" />
                </div>
              </div>
            </div>
          </section>

          <aside className="h-fit border border-white/10 p-6">
            <h2 className="mb-6 font-serif text-2xl font-light">Order Summary</h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">{item.category}</p>
                    <h3 className="font-serif text-xl font-light">{item.name}</h3>
                    <p className="mt-1 text-white/55">
                      {item.price} × {item.quantity}
                    </p>
                  </div>

                  <p className="text-white/75">{item.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-lg text-white/70">Total</span>
              <span className="font-serif text-2xl">{totalPrice.toFixed(2)}</span>
            </div>

            <Link href="payment/success" className="mt-6 block w-full bg-white px-6 py-4 text-center text-[11px] uppercase tracking-[0.24em] text-black transition hover:bg-[#c6a96b]">
              Complete Payment
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
