"use client";

import Image from "next/image";
import { MaterialIcon } from "@/components/ui/material-icon";
import { SHOP_CATEGORIES, SHOP_PRODUCTS } from "@/data/shop";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ShopContent() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <main className="mx-auto flex w-full max-w-container-max flex-grow gap-8 px-4 py-16 md:px-margin-desktop md:py-margin-desktop">
      <aside className="sticky top-[120px] hidden h-fit w-64 shrink-0 rounded-sm border border-white/5 bg-charcoal-grey p-6 lg:block">
        <h3 className="text-headline-md mb-6 border-b border-white/10 pb-4">
          Categories
        </h3>
        <div className="space-y-4 font-sans text-base text-on-surface-variant">
          {SHOP_CATEGORIES.map((cat) => (
            <label
              key={cat}
              className="group flex cursor-pointer items-center gap-3"
            >
              <input
                type="checkbox"
                checked={activeCategory === cat}
                onChange={() => setActiveCategory(cat)}
                className="rounded-sm border-outline bg-surface-container text-electric-blue focus:ring-electric-blue"
              />
              <span className="transition-colors group-hover:text-secondary">
                {cat}
              </span>
            </label>
          ))}
        </div>
        <h3 className="text-headline-md mb-6 mt-8 border-b border-white/10 pb-4">
          Price Range
        </h3>
        <input
          type="range"
          min={0}
          max={200}
          defaultValue={100}
          className="h-1 w-full appearance-none rounded-full bg-surface-container accent-neon-green outline-none"
        />
        <div className="mt-4 flex justify-between text-sm">
          <span>$0</span>
          <span>$200+</span>
        </div>
      </aside>

      <section className="flex-grow">
        <div className="relative mb-12 overflow-hidden rounded-lg border border-white/5 bg-charcoal-grey p-8 md:p-12">
          <div className="absolute inset-0 bg-electric-blue/10 blur-[100px]" />
          <div className="relative z-10">
            <h1 className="text-display-lg mb-4 uppercase text-secondary">
              Fuel Your <br />
              <span className="italic text-electric-blue">Momentum</span>
            </h1>
            <p className="max-w-2xl font-sans text-lg text-on-surface-variant">
              High-performance nutrition engineered for elite athletes. Push
              past your limits with our scientifically formulated supplements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {SHOP_PRODUCTS.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.06}>
              <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-charcoal-grey shadow-lg transition-all duration-300 hover:border-electric-blue">
                {product.badge && (
                  <div className="absolute left-4 top-4 z-10">
                    <span
                      className={cn(
                        "px-3 py-1 text-label-caps shadow-[0_0_10px_rgba(204,255,0,0.3)]",
                        product.badgeClass
                      )}
                    >
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="relative h-64 overflow-hidden bg-surface">
                  <div className="absolute inset-0 z-10 bg-electric-blue/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center opacity-80 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-pure-black/40 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <button
                      type="button"
                      className="border-2 border-electric-blue px-6 py-2 text-label-caps uppercase text-electric-blue transition-colors hover:bg-electric-blue hover:text-pure-black"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-headline-md mb-2 tracking-tight text-white transition-colors group-hover:text-electric-blue">
                    {product.name}
                  </h4>
                  <p className="mb-4 font-sans text-base text-on-surface-variant">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-headline-md font-bold text-neon-green">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className="flex items-center justify-center rounded-full bg-neon-green p-3 text-pure-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(204,255,0,0.6)] active:scale-95"
                      aria-label="Add to cart"
                    >
                      <MaterialIcon name="shopping_cart" />
                    </button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="border-2 border-electric-blue px-8 py-4 text-label-caps uppercase tracking-widest text-electric-blue transition-all hover:bg-electric-blue hover:text-pure-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            Load More Products
          </button>
        </div>
      </section>
    </main>
  );
}
