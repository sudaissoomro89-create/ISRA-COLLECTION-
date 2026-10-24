import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LOOKBOOKS } from '../data/products';

interface LookbookSectionProps {
  onSelectVibe: (category: string) => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({ onSelectVibe }) => {
  return (
    <section id="lookbook-section" className="py-16 sm:py-20 bg-[#f7f4ef] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
            <span>Styling Edit</span>
            <span aria-hidden="true">·</span>
            <span>Ages 15 – 35</span>
            <span aria-hidden="true">·</span>
            <span>Curated Vibe Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight [text-wrap:balance]">
            Dressed for Every Chapter of Your Day
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Whether you are stepping into a university lecture, meeting best friends for afternoon tea, or dressing up for a festive dinner with relatives.
          </p>
        </div>

        {/* Lookbook 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOOKBOOKS.map((look) => (
            <div
              key={look.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <img
                  src={look.heroImage}
                  alt={look.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif text-base font-semibold leading-tight">
                    {look.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed mb-3">
                    {look.subtitle}
                  </p>

                  {/* Clean unboxed tags with subtle separators */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500 mb-4">
                    {look.tags.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span>{t}</span>
                        {idx < look.tags.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (look.id === 'lb-1') onSelectVibe('kurti');
                    else if (look.id === 'lb-2') onSelectVibe('two-piece');
                    else if (look.id === 'lb-3') onSelectVibe('festive');
                    else onSelectVibe('all');

                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2 px-3 text-xs font-semibold text-stone-900 bg-stone-50 hover:bg-stone-900 hover:text-white rounded-lg border border-stone-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Shop This Vibe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
