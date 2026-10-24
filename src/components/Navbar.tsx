import React, { useState } from 'react';
import { ShoppingBag, X, MessageCircle, Menu } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSizeGuide: () => void;
  activeCategory: string;
  onSelectCategory: (cat: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenSizeGuide,
  activeCategory,
  onSelectCategory,
}) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf8f5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim Dismissible Promotional Strip (<= 40px) */}
      {showAnnouncement && (
        <div className="bg-stone-900 text-stone-100 text-xs py-2 px-4 flex items-center justify-between text-center border-b border-stone-800">
          <div className="flex-1 text-center font-medium tracking-wide">
            <span>Free Delivery on orders above Rs. 3,500</span>
            <span className="mx-2 text-stone-500">·</span>
            <span className="hidden sm:inline">Cash on Delivery Available</span>
            <span className="mx-2 text-stone-500 hidden sm:inline">·</span>
            <a
              href="https://wa.me/923001234567?text=Hi%20ISRA%20Collection,%20I%20have%20an%20inquiry%20about%20your%20trendy%20clothes"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-stone-500 underline-offset-2 hover:text-rose-200 transition-colors"
            >
              Order via WhatsApp: +92 300 1234567
            </a>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            aria-label="Dismiss announcement"
            className="text-stone-400 hover:text-stone-100 p-1 shrink-0 ml-2"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Contract (1 Row, 3 Zones separated by gap-8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-stone-900 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          ISRA <span className="font-sans text-xs tracking-[0.25em] font-normal uppercase text-stone-500 ml-1.5 align-middle">Collection</span>
        </a>

        {/* Zone 2: 4-5 single-line clean text links with hover underline */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600 whitespace-nowrap">
          <button
            onClick={() => {
              onSelectCategory('all');
              const el = document.getElementById('catalog-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors py-1 hover:text-stone-900 border-b-2 ${
              activeCategory === 'all' ? 'border-stone-900 text-stone-900' : 'border-transparent'
            }`}
          >
            All Outfits
          </button>
          <button
            onClick={() => {
              onSelectCategory('two-piece');
              const el = document.getElementById('catalog-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors py-1 hover:text-stone-900 border-b-2 ${
              activeCategory === 'two-piece' ? 'border-stone-900 text-stone-900' : 'border-transparent'
            }`}
          >
            Two-Piece Sets
          </button>
          <button
            onClick={() => {
              onSelectCategory('kurti');
              const el = document.getElementById('catalog-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`transition-colors py-1 hover:text-stone-900 border-b-2 ${
              activeCategory === 'kurti' ? 'border-stone-900 text-stone-900' : 'border-transparent'
            }`}
          >
            Trendy Kurtis
          </button>
          <a
            href="#lookbook-section"
            className="transition-colors py-1 hover:text-stone-900 text-stone-600"
          >
            Lookbook
          </a>
          <button
            onClick={onOpenSizeGuide}
            className="transition-colors py-1 hover:text-stone-900 text-stone-600 cursor-pointer"
          >
            Size Guide
          </button>
          <a
            href="#reviews-section"
            className="transition-colors py-1 hover:text-stone-900 text-stone-600"
          >
            Reviews
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (Bag Trigger) + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/923001234567?text=Hi%20ISRA%20Collection,%20I'm%20looking%20for%20trendy%20two-pieces%20and%20kurtis"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-wide text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-colors whitespace-nowrap"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shopping Bag</span>
            <span className="font-mono tabular-nums text-xs bg-stone-700 px-1.5 py-0.5 rounded text-stone-100">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900"
            aria-label="Toggle mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 py-3 space-y-2">
          <button
            onClick={() => {
              onSelectCategory('all');
              setMobileMenuOpen(false);
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            All Outfits
          </button>
          <button
            onClick={() => {
              onSelectCategory('two-piece');
              setMobileMenuOpen(false);
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Two-Piece Sets (Co-Ords)
          </button>
          <button
            onClick={() => {
              onSelectCategory('kurti');
              setMobileMenuOpen(false);
              document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Trendy Kurtis & Fusion
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('lookbook-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Style Lookbook
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSizeGuide();
            }}
            className="block w-full text-left py-2 text-sm font-medium text-stone-700 hover:text-stone-900"
          >
            Size Chart & Guide
          </button>
          <a
            href="https://wa.me/923001234567?text=Hi%20ISRA%20Collection,%20I'm%20looking%20for%20trendy%20clothes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-800"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Direct WhatsApp Order (+92 300 1234567)</span>
          </a>
        </div>
      )}
    </header>
  );
};
