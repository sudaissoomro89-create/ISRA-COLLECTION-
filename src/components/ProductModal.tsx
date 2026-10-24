import React, { useState } from 'react';
import { X, Star, ShoppingBag, MessageCircle, Ruler, Truck, RotateCcw, Check, Heart, ShieldCheck } from 'lucide-react';
import { Product, ProductSize } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: ProductSize, quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'care'>('details');

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hi ISRA Collection! I would like to order:
- Item: ${product.title}
- Category: ${product.categoryLabel}
- Size: ${selectedSize}
- Quantity: ${quantity}
- Total: Rs. ${(product.price * quantity).toLocaleString()}
Please confirm delivery timeline and address requirements.`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-white shadow-sm transition-all"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto md:max-h-none">
          {/* Gallery / Image Column (Left 5 Cols) */}
          <div className="md:col-span-5 bg-stone-100 relative min-h-[360px] md:min-h-full">
            <img
              src={product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-stone-900 text-stone-50 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">
                {product.tag}
              </span>
            )}
          </div>

          {/* Contiguous Purchase Module (Right 7 Cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-semibold uppercase tracking-wider text-stone-700">{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Fabric: {product.fabric}</span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1 text-stone-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-mono tabular-nums font-semibold">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </span>
              </div>

              {/* Title & Price */}
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight mb-3">
                {product.title}
              </h2>

              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-mono tabular-nums text-2xl font-bold text-stone-900">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="font-mono tabular-nums text-sm text-stone-400 line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock · Ready to Dispatch
                </span>
              </div>

              {/* Short Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                    Select Size:
                  </label>
                  <button
                    type="button"
                    onClick={onOpenSizeGuide}
                    className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1 underline underline-offset-2"
                  >
                    <Ruler className="w-3 h-3" />
                    <span>View Measurements</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 py-2 px-3 text-xs font-mono font-semibold rounded-lg border transition-all ${
                        selectedSize === size
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Buy Action Module */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <div className="flex items-center gap-3">
                  {/* Quantity */}
                  <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-stone-700 hover:bg-stone-200 text-sm font-semibold transition-colors"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-mono tabular-nums font-semibold text-stone-900 min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-stone-700 hover:bg-stone-200 text-sm font-semibold transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Primary Add to Bag CTA */}
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={`flex-1 py-3 px-4 text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all ${
                      isAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-900 text-white hover:bg-stone-800 active:scale-[0.99]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Shopping Bag!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag · Rs. {(product.price * quantity).toLocaleString()}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Instant WhatsApp Order */}
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Order Directly via WhatsApp Concierge</span>
                </button>
              </div>
            </div>

            {/* Product Specifications & Care Tabs */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center gap-4 text-xs font-medium border-b border-stone-200 pb-2 mb-3">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-1 transition-colors ${
                    activeTab === 'details'
                      ? 'text-stone-900 font-semibold border-b-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Highlights
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-1 transition-colors ${
                    activeTab === 'specs'
                      ? 'text-stone-900 font-semibold border-b-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Measurements ({selectedSize})
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-1 transition-colors ${
                    activeTab === 'care'
                      ? 'text-stone-900 font-semibold border-b-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Fabric & Wash
                </button>
              </div>

              {activeTab === 'details' && (
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                  {product.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-200">
                  <div>
                    <span className="text-stone-500">Bust:</span>{' '}
                    <span className="font-mono font-semibold">{product.measurements.bust}</span>
                  </div>
                  <div>
                    <span className="text-stone-500">Shirt Length:</span>{' '}
                    <span className="font-mono font-semibold">{product.measurements.shirtLength}</span>
                  </div>
                  {product.measurements.trouserLength && (
                    <div>
                      <span className="text-stone-500">Trouser Length:</span>{' '}
                      <span className="font-mono font-semibold">{product.measurements.trouserLength}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-stone-500">Shoulder:</span>{' '}
                    <span className="font-mono font-semibold">{product.measurements.shoulder}</span>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                  {product.care.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Quick Guarantees Footer */}
            <div className="flex items-center justify-between text-[11px] text-stone-500 pt-3 border-t border-stone-100">
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-stone-700" />
                <span>Doorstep COD</span>
              </span>
              <span className="flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-stone-700" />
                <span>7-Day Easy Exchange</span>
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-stone-700" />
                <span>Original ISRA Quality</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
