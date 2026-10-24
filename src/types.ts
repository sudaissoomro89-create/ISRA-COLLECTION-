export type ProductCategory = 'all' | 'two-piece' | 'kurti' | 'fusion';

export type ProductFabric = 'All' | 'Lawn' | 'Pure Cotton' | 'Linen' | 'Viscose Silk' | 'Jacquard';

export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL';

export interface Product {
  id: string;
  title: string;
  category: 'two-piece' | 'kurti' | 'fusion';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  tag?: 'New In' | 'Best Seller' | 'Trending' | 'Festive Edit';
  fabric: 'Lawn' | 'Pure Cotton' | 'Linen' | 'Viscose Silk' | 'Jacquard';
  color: string;
  colorHex: string;
  sizes: ProductSize[];
  image: string;
  secondaryImage?: string;
  description: string;
  features: string[];
  care: string[];
  measurements: {
    bust: string;
    shirtLength: string;
    trouserLength?: string;
    shoulder: string;
  };
  rating: number;
  reviewsCount: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  selectedSize: ProductSize;
  quantity: number;
}

export interface CustomerOrder {
  orderId: string;
  date: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  notes?: string;
  paymentMethod: 'cod' | 'bank_transfer';
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}
