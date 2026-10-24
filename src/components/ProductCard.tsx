import React, { useState } from 'react';
import { Eye, ShoppingBag, MessageCircle, Star, Check } from 'lucide-react';
import { Product, ProductSize } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: ProductSize) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0] || 'M');
  const [imageError, setImageError] = useState(false);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const generateWhatsAppUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Hi ISRA Collection! I want to order the "${product.title}" in size ${selectedSize} (Price: Rs. ${product.price.toLocaleString()}). Please share availability and delivery details.`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      {/* Product Image Slot (65%-75% visual prominence) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center bg-stone-100 p-6 text-stone-400">
            <span className="font-serif text-2xl font-bold text-stone-300">ISRA</span>
            <span className="text-xs text-stone-500 mt-2 font-medium">{product.title}</span>
          </div>
        )}

        {/* Quiet Editorial Tag (Max 1 subtle text tag, NOT a pill badge sandwich) */}
        {product.tag && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-stone-900 text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs">
            {product.tag}
          </div>
        )}

        {/* Quick View Floating Overlay Trigger on Desktop */}
        <div className="absolute inset-0 bg-stone-900/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="px-4 py-2 bg-white/95 backdrop-blur-xs text-stone-900 text-xs font-semibold rounded-lg shadow-sm hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View & Details</span>
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Quiet Unboxed Metadata (NO PILLS) */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5">
            <span className="uppercase tracking-wider font-medium text-[11px]">{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{product.fabric}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-0.5 text-stone-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-mono tabular-nums text-[11px] font-semibold">{product.rating}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-sm font-semibold text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-1 mb-2">
            {product.title}
          </h3>

          {/* Price with Tabular Numerals */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-mono tabular-nums text-base font-bold text-stone-900">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="font-mono tabular-nums text-xs text-stone-400 line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Interactive Controls: Size selector & Action Buttons */}
        <div className="pt-3 border-t border-stone-100 space-y-2.5">
          {/* Size Pill Selectors */}
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-stone-500 font-medium">Size:</span>
            <div className="flex items-center gap-1">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`px-1.5 py-0.5 text-[11px] font-mono rounded border transition-colors ${
                    selectedSize === size
                      ? 'bg-stone-900 text-white border-stone-900 font-semibold'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons: Bag Add + WhatsApp Direct */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleQuickAdd}
              className={`w-full py-2 px-2 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </>
              )}
            </button>

            <button
              onClick={generateWhatsAppUrl}
              title="Order directly on WhatsApp"
              className="w-full py-2 px-2 text-xs font-semibold rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 flex items-center justify-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
