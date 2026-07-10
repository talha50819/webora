"use client";

import { useMemo, useState } from "react";
import { Heart, Search, ShoppingCart, Star } from "lucide-react";

type Product = {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
};

const products: Product[] = [
  {
    name: "Skye Lounge Chair",
    category: "Chairs",
    price: 429,
    originalPrice: 549,
    rating: 5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Amara Sofa",
    category: "Sofas",
    price: 1299,
    rating: 4,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Willow Velvet Chair",
    category: "Chairs",
    price: 389,
    rating: 5,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nordic Lounge Chair",
    category: "Chairs",
    price: 459,
    originalPrice: 520,
    rating: 4,
    reviews: 41,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Birch Loveseat",
    category: "Sofas",
    price: 899,
    rating: 5,
    reviews: 73,
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Haven Floor Lamp",
    category: "Lighting",
    price: 189,
    rating: 4,
    reviews: 55,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Terra Ceramic Planter",
    category: "Decor",
    price: 58,
    originalPrice: 72,
    rating: 5,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Oslo Console Table",
    category: "Tables",
    price: 349,
    rating: 4,
    reviews: 38,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
  },
];

const categories = ["All", "Chairs", "Sofas", "Lighting", "Tables", "Decor"];

export default function EcommerceStorefrontDemo() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? products
        : products.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  function addToCart(name: string) {
    setCartCount((c) => c + 1);
    setJustAdded(name);
    setTimeout(() => setJustAdded((current) => (current === name ? null : current)), 1200);
  }

  return (
    <div className="bg-white">
      <header className="border-b border-neutral-100">
        <div className="flex items-center gap-4 px-4 py-3 @lg:px-8">
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide text-[var(--foreground)]">
            MERIDIAN
          </span>
          <div className="hidden flex-1 @sm:block">
            <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-400">
              <Search className="h-4 w-4 shrink-0" /> Search home goods…
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Heart className="h-5 w-5 text-neutral-400" />
            <div className="relative">
              <ShoppingCart className="h-5 w-5 text-neutral-600" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3 @lg:px-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "border-primary-600 bg-primary-600 text-white"
                  : "border-neutral-200 text-neutral-500 hover:border-primary-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
      </header>

      <div className="relative m-4 overflow-hidden rounded-2xl @lg:m-8">
        <img
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80"
          alt="Living room with Meridian furniture"
          className="h-40 w-full object-cover @lg:h-64"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center gap-2 px-6 @lg:gap-3 @lg:px-12">
          <span className="w-fit rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wide text-primary-700 uppercase @lg:text-xs">
            Fall collection
          </span>
          <h2 className="max-w-xs text-xl font-bold text-white @lg:max-w-sm @lg:text-4xl">
            Up to 40% off seasonal favorites
          </h2>
          <button
            type="button"
            className="gradient-brand w-fit rounded-full px-4 py-2 text-xs font-semibold text-white @lg:px-5 @lg:py-2.5 @lg:text-sm"
          >
            Shop the sale
          </button>
        </div>
      </div>

      <div className="px-4 pb-10 @lg:px-8">
        <h3 className="mb-4 text-base font-bold text-[var(--foreground)] @lg:text-lg">
          {activeCategory === "All" ? "Best sellers" : activeCategory}
        </h3>
        <div className="grid grid-cols-2 gap-4 @2xl:grid-cols-3 @5xl:grid-cols-4">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-xl border border-neutral-100"
            >
              <div className="aspect-square overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-0.5 text-accent-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < p.rating ? "fill-current" : "fill-neutral-200 text-neutral-200"}`}
                    />
                  ))}
                  <span className="ml-1 text-[11px] text-neutral-400">({p.reviews})</span>
                </div>
                <p className="mt-1 truncate text-sm font-semibold text-[var(--foreground)]">
                  {p.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold text-primary-600">${p.price}</p>
                  {p.originalPrice && (
                    <p className="text-xs text-neutral-400 line-through">
                      ${p.originalPrice}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => addToCart(p.name)}
                  className={`mt-2 w-full rounded-full border py-1.5 text-xs font-semibold transition-colors ${
                    justAdded === p.name
                      ? "border-primary-600 bg-primary-600 text-white"
                      : "border-primary-200 text-primary-700 hover:bg-primary-50"
                  }`}
                >
                  {justAdded === p.name ? "Added ✓" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-neutral-100 px-4 py-6 text-center text-[11px] text-neutral-400 @lg:px-8">
        © 2026 Meridian Home Goods · Free shipping over $75 · 30-day returns
      </div>
    </div>
  );
}
