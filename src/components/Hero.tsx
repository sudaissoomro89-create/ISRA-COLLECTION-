import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
  onExploreTwoPiece: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNow, onExploreTwoPiece }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f5] to-[#f4eee6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Quiet Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              <span>Ready-To-Wear Pret</span>
              <span aria-hidden="true">·</span>
              <span>Spring / Summer 2026</span>
              <span aria-hidden="true">·</span>
              <span>Ages 15 – 35</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-semibold tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Effortless Two-Pieces & Trendy Kurtis for Your Everyday Glow.
            </h1>

            {/* Body Copy */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-2xl">
              Curated for girls and young women who crave chic silhouettes without compromising comfort. Explore breezy college lawn kurtis, flattering linen co-ord sets, and statement festive pret tailored with meticulous boutique finesse.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onShopNow}
                className="px-6 py-3.5 bg-stone-900 text-stone-50 text-sm font-semibold rounded-lg hover:bg-stone-800 transition-all shadow-sm hover:shadow active:scale-[0.99] whitespace-nowrap"
              >
                Explore Latest Collection
              </button>
              <button
                onClick={onExploreTwoPiece}
                className="px-6 py-3.5 bg-white border border-stone-300 text-stone-800 text-sm font-semibold rounded-lg hover:bg-stone-50 hover:border-stone-400 transition-all whitespace-nowrap"
              >
                Browse Co-Ord Sets
              </button>
            </div>

            {/* Quiet Metrics & Adjacency Proof */}
            <div className="pt-6 border-t border-stone-200/90 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-stone-900 font-mono tabular-nums">15,000+</span>
                <span>Happy Girls & Women</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-stone-900 font-mono tabular-nums">4.9 / 5</span>
                <span>Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl font-bold text-stone-900">48h</span>
                <span>Express City Dispatch</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Campaign Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-full min-h-[460px] rounded-2xl overflow-hidden shadow-lg border border-stone-200/60 bg-stone-100 group">
              <img
                src="/src/assets/images/isra_hero_fashion_model_1792877563783.jpg"
                alt="Model wearing ISRA Collection pastel lilac embroidered two-piece co-ord set"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

              {/* Editorial Image Overlay Tag */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs font-medium tracking-wide uppercase text-rose-200 mb-1">
                  Spotlight Pick
                </div>
                <div className="font-serif text-lg font-semibold tracking-wide">
                  Lilac Embroidered Co-Ord Set
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/20 text-xs text-stone-200">
                  <span className="font-mono tabular-nums">Rs. 4,450 PKR</span>
                  <button
                    onClick={onShopNow}
                    className="underline underline-offset-4 hover:text-white font-medium"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adjacency Trust Strip (Full-Width Row Below Hero Split) */}
        <div className="mt-14 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-800">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-stone-100 rounded-lg text-stone-900 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">100% Breathable Fabrics</h4>
              <p className="text-xs text-stone-500 mt-0.5">Combed lawn, pure cotton & fine textured linen.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-stone-100 rounded-lg text-stone-900 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Trendy Cut & Silhouette</h4>
              <p className="text-xs text-stone-500 mt-0.5">Designed specifically for girls aged 15 to 35.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-stone-100 rounded-lg text-stone-900 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">7-Day Doorstep Exchange</h4>
              <p className="text-xs text-stone-500 mt-0.5">Hassle-free size and style replacement.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-stone-100 rounded-lg text-stone-900 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-900">Cash on Delivery</h4>
              <p className="text-xs text-stone-500 mt-0.5">Pay safely when you receive your parcel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
