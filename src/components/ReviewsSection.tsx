import React from 'react';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
              <span>Customer Voices</span>
              <span aria-hidden="true">·</span>
              <span>Verified Purchases</span>
              <span aria-hidden="true">·</span>
              <span>Ages 18 – 35</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
              Loved by Young Trendsetters
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-stone-50 px-4 py-3 rounded-xl border border-stone-200 self-start md:self-auto">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-stone-700">
              <strong className="font-mono tabular-nums text-stone-900 text-sm">4.9 / 5.0</strong> rating based on <strong className="font-mono tabular-nums text-stone-900">180+</strong> verified reviews
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-[#faf8f5] rounded-2xl border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-stone-400 font-mono">{review.date}</span>
                </div>

                <h3 className="text-sm font-semibold text-stone-900 mb-2">
                  "{review.title}"
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {review.comment}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-900">
                    <span>{review.name}</span>
                    <span className="text-stone-400 font-normal">({review.age} yrs)</span>
                  </div>
                  <div className="text-[11px] text-stone-500">
                    <span>{review.location}</span>
                    <span className="mx-1">·</span>
                    <span className="italic text-stone-600">{review.productName}</span>
                  </div>
                </div>
                <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1" title="Verified Customer">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
