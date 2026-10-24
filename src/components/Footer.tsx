import React from 'react';
import { MessageCircle, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide: () => void;
  onSelectCategory: (cat: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSizeGuide, onSelectCategory }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-wider text-white">
              ISRA <span className="font-sans text-xs tracking-[0.25em] font-normal uppercase text-stone-400 ml-1.5 align-middle">Collection</span>
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Contemporary ready-to-wear boutique dedicated to young girls and women aged 15–35. Specialized in comfortable two-piece co-ord suits, fusion tunics, and handcrafted embroidered kurtis.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-emerald-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-rose-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Shop Collections
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('all');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  All Outfits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('two-piece');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Two-Piece Co-Ords
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('kurti');
                    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Trendy Kurtis
                </button>
              </li>
              <li>
                <a
                  href="#lookbook-section"
                  className="hover:text-white transition-colors"
                >
                  Style Lookbook
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Customer Support
            </h4>
            <ul className="text-xs space-y-2 text-stone-400">
              <li>
                <button onClick={onOpenSizeGuide} className="hover:text-white transition-colors">
                  Size Guide & Measurements
                </button>
              </li>
              <li>
                <span className="text-stone-400">7-Day Return Policy</span>
              </li>
              <li>
                <span className="text-stone-400">Cash on Delivery (COD)</span>
              </li>
              <li>
                <span className="text-stone-400">Order Tracking</span>
              </li>
            </ul>
          </div>

          {/* Contact Studio */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-white">
              Karachi Boutique Studio
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Shop 14, Phase 5 DHA, Karachi, Pakistan.
            </p>
            <p className="text-xs text-stone-400">
              WhatsApp: +92 300 1234567<br />
              Email: care@isracollection.com
            </p>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} ISRA Collection. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for 15-35 Year Old Modern Wardrobes</span>
            <span aria-hidden="true">·</span>
            <span>Ethically Tailored</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
