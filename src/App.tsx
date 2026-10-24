import React, { useState, useEffect, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product, ProductSize, CartItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { LookbookSection } from './components/LookbookSection';
import { SizeGuideModal } from './components/SizeGuideModal';
import { ReviewsSection } from './components/ReviewsSection';
import { StoreInfoSection } from './components/StoreInfoSection';
import { Footer } from './components/Footer';

export default function App() {
  // Catalog Filter State
  const [activeCategory, setActiveCategory] = useState<'all' | 'two-piece' | 'kurti' | 'fusion'>('all');
  const [selectedFabric, setSelectedFabric] = useState<string>('All');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Cart State (Persisted in LocalStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('isra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [discountCode, setDiscountCode] = useState<string>('');

  // Modals
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('isra_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Cart Handlers
  const handleAddToCart = (product: Product, size: ProductSize, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSize: size, quantity }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const handleRemoveFromCart = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
  };

  const handleApplyDiscount = (code: string): boolean => {
    const formatted = code.trim().toUpperCase();
    if (formatted === 'ISRA10' || formatted === 'ISRAFIRST') {
      setAppliedDiscount(10);
      setDiscountCode(formatted);
      return true;
    }
    return false;
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Fabric match
      if (selectedFabric !== 'All' && item.fabric !== selectedFabric) {
        return false;
      }
      // Size filter match
      if (selectedSizeFilter !== 'All' && !item.sizes.includes(selectedSizeFilter as ProductSize)) {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesFabric = item.fabric.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.categoryLabel.toLowerCase().includes(q);
        if (!matchesTitle && !matchesFabric && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [activeCategory, selectedFabric, selectedSizeFilter, searchQuery, sortBy]);

  // Reset filters
  const resetFilters = () => {
    setActiveCategory('all');
    setSelectedFabric('All');
    setSelectedSizeFilter('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  // Totals for drawer and checkout
  const FREE_SHIPPING_THRESHOLD = 3500;
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 250;
  const total = Math.max(0, subtotal - discountAmount + shipping);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col antialiased selection:bg-rose-200 selection:text-stone-900">
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Main Campaign Hero */}
      <Hero
        onShopNow={() => {
          setActiveCategory('all');
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreTwoPiece={() => {
          setActiveCategory('two-piece');
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Catalog Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-stone-200/80 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2">
              <span>Ready-to-Wear</span>
              <span aria-hidden="true">·</span>
              <span>Ages 15 – 35</span>
              <span aria-hidden="true">·</span>
              <span>New Drop</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-stone-900 tracking-tight">
              Curated Pret Collection
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span>Showing <strong className="font-mono tabular-nums text-stone-900 font-bold">{filteredProducts.length}</strong> items</span>
            <span aria-hidden="true">·</span>
            <span>Pre-shrunk pure fabrics</span>
          </div>
        </div>

        {/* Interactive Filter Toolbar */}
        <div className="space-y-4 mb-10">
          {/* Segmented Category Buttons (Functional filter bar) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl max-w-fit overflow-x-auto border border-stone-200/80">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Outfits
            </button>
            <button
              onClick={() => setActiveCategory('two-piece')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'two-piece'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Two-Piece Co-Ords
            </button>
            <button
              onClick={() => setActiveCategory('kurti')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'kurti'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Trendy Kurtis
            </button>
            <button
              onClick={() => setActiveCategory('fusion')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === 'fusion'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Fusion Pret
            </button>
          </div>

          {/* Sub-Filters: Search, Fabric, Size & Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search by title, color, lawn, linen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
              />
            </div>

            {/* Fabric Selector */}
            <div className="lg:col-span-3 flex items-center gap-2">
              <span className="text-xs text-stone-500 font-medium shrink-0">Fabric:</span>
              <select
                value={selectedFabric}
                onChange={(e) => setSelectedFabric(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="All">All Fabrics</option>
                <option value="Pure Cotton">Pure Cotton</option>
                <option value="Lawn">Summer Lawn</option>
                <option value="Linen">Textured Linen</option>
                <option value="Viscose Silk">Viscose Silk</option>
                <option value="Jacquard">Jacquard</option>
              </select>
            </div>

            {/* Size Filter */}
            <div className="lg:col-span-2 flex items-center gap-2">
              <span className="text-xs text-stone-500 font-medium shrink-0">Size:</span>
              <select
                value={selectedSizeFilter}
                onChange={(e) => setSelectedSizeFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="All">All Sizes</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>

            {/* Sort Selector */}
            <div className="lg:col-span-3 flex items-center gap-2">
              <span className="text-xs text-stone-500 font-medium shrink-0">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3 py-2 text-xs border border-stone-200 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated (4.9+)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid (3-column on desktop, 2-column on tablet as per e-commerce reference) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p, size) => handleAddToCart(p, size, 1)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="p-12 text-center bg-white rounded-2xl border border-stone-200/80 my-8">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-stone-900 mb-1">
              No matching outfits found
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
              We couldn't find any piece matching your active search or filters. Try choosing "All Outfits" or reset the filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </main>

      {/* Style Lookbook for 15-35 year olds */}
      <LookbookSection
        onSelectVibe={(cat) => {
          if (cat === 'two-piece' || cat === 'kurti' || cat === 'fusion') {
            setActiveCategory(cat);
          } else {
            setActiveCategory('all');
          }
        }}
      />

      {/* Verified Customer Reviews */}
      <ReviewsSection />

      {/* Local Boutique Storefront Info & Promise */}
      <StoreInfoSection />

      {/* Footer */}
      <Footer
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Modals & Drawers */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={(p, size, qty) => handleAddToCart(p, size, qty)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        discountCode={discountCode}
        appliedDiscount={appliedDiscount}
        onApplyDiscount={handleApplyDiscount}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        subtotal={subtotal}
        discount={discountAmount}
        shipping={shipping}
        total={total}
        onClearCart={handleClearCart}
      />

      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
