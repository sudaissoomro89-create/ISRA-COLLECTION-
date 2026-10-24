import React from 'react';
import { MapPin, Clock, MessageCircle, Phone, Sparkles, RefreshCcw, ShieldCheck } from 'lucide-react';

export const StoreInfoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#faf8f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Local Studio Story & Promise */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500">
              <span>Local Boutique Passion</span>
              <span aria-hidden="true">·</span>
              <span>Karachi Studio</span>
              <span aria-hidden="true">·</span>
              <span>Nationwide Doorstep Delivery</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
              Crafted Locally with Modern Sensibilities for Today's Young Women.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              ISRA Collection was born out of a desire for trendy, breathable, and well-tailored everyday wear. Too often, young women between 15 and 35 are stuck between overpriced luxury brands and ill-fitting mass-market kurtis. We combine contemporary cuts—from split sleeves and smart boat necks to relaxed cigarette pants—with premium breathable textiles suited for our local climate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200">
              <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <MapPin className="w-4 h-4 text-stone-700" />
                  <span>Studio & Pickup Counter</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Shop #14, Fashion Avenue, Phase 5 DHA, Karachi. Doorstep pickup available on appointment.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-1">
                  <Clock className="w-4 h-4 text-stone-700" />
                  <span>Timings & WhatsApp Concierge</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Mon - Sat: 11:00 AM – 9:00 PM<br />
                  WhatsApp response usually within 15 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Order & Support Card */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-700 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-stone-800" />
                <span>Boutique Guarantee</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Need Help with Sizing or Custom Inquiries?
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Our design team is available on WhatsApp to advise on the right fit, provide real video clips of garments before dispatch, and facilitate quick swaps.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/923001234567?text=Hi%20ISRA%20Collection,%20I'd%20like%20to%20know%20more%20about%20your%20trendy%20two-pieces%20and%20kurtis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Directly on WhatsApp (+92 300 1234567)</span>
              </a>

              <a
                href="tel:+923001234567"
                className="w-full py-2.5 px-4 bg-stone-50 hover:bg-stone-100 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Customer Helpline</span>
              </a>
            </div>

            <div className="pt-4 border-t border-stone-100 grid grid-cols-2 gap-3 text-[11px] text-stone-500">
              <div className="flex items-center gap-1.5">
                <RefreshCcw className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>7-Day Return / Exchange</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-700 shrink-0" />
                <span>Verified Pre-Shrunk Fabric</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
