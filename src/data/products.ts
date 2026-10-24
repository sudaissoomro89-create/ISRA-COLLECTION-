import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'isra-tp-01',
    title: 'Lilac Embroidered Co-Ord Set',
    category: 'two-piece',
    categoryLabel: 'Two-Piece Co-Ord',
    price: 4450,
    originalPrice: 5200,
    tag: 'Trending',
    fabric: 'Pure Cotton',
    color: 'Pastel Lilac',
    colorHex: '#C8B6D6',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/src/assets/images/isra_hero_fashion_model_1792877563783.jpg',
    description: 'An ethereal pastel lilac two-piece suit crafted in breathable pure cotton. Features subtle artisanal tonal floral thread embroidery on the split-collar tunic paired with effortless straight-leg relaxed trousers.',
    features: [
      '2-Piece: Embroidered Tunic Shirt & Matching Straight Trousers',
      'Intricate floral embroidery along yoke and sleeve hems',
      'Breathable pre-shrunk cotton weave for all-day comfort',
      'High-waist elasticated back trousers with functional side pockets'
    ],
    care: [
      'Gentle hand wash or delicate machine wash in cold water',
      'Dry in shade to preserve vibrant pastel tones',
      'Warm iron inside out'
    ],
    measurements: {
      bust: '38" (Size S)',
      shirtLength: '36"',
      trouserLength: '38"',
      shoulder: '14.5"'
    },
    rating: 4.9,
    reviewsCount: 42,
    inStock: true
  },
  {
    id: 'isra-tp-02',
    title: 'Sage Garden Linen Co-Ord',
    category: 'two-piece',
    categoryLabel: 'Two-Piece Co-Ord',
    price: 4850,
    originalPrice: 5600,
    tag: 'Best Seller',
    fabric: 'Linen',
    color: 'Sage Green',
    colorHex: '#8A9A86',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/src/assets/images/isra_product_two_piece_sage_1792877565080.jpg',
    description: 'Our top-rated modern minimalist two-piece in earthy sage green. Tailored with a smart button-down lapel collar, micro-floral embroidery sprigs, and ankle-length tailored trousers. Perfect for university and casual office wear.',
    features: [
      '2-Piece: Button-Front Shirt Tunic & Cigarette Trousers',
      'Delicate micro-floral embroidery scattered on shirt body',
      'Premium breathable linen blend that resists creasing',
      'Cuffed sleeves with tonal button fastenings'
    ],
    care: [
      'Dry clean recommended or cold hand wash',
      'Do not bleach',
      'Medium steam iron'
    ],
    measurements: {
      bust: '39" (Size S)',
      shirtLength: '34"',
      trouserLength: '37"',
      shoulder: '14.5"'
    },
    rating: 5.0,
    reviewsCount: 68,
    inStock: true
  },
  {
    id: 'isra-kt-01',
    title: 'Crimson Kashmiri Thread Kurti',
    category: 'kurti',
    categoryLabel: 'Trendy Kurti',
    price: 2950,
    originalPrice: 3450,
    tag: 'Festive Edit',
    fabric: 'Pure Cotton',
    color: 'Crimson Red',
    colorHex: '#9E2A2B',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/src/assets/images/isra_product_kurti_crimson_1792877565035.jpg',
    description: 'A striking crimson red festive kurti inspired by traditional Kashmiri neckline embroidery. Rendered with ivory cross-stitch thread work and finished with delicate side slits. Pairs effortlessly with white culottes or classic raw silk trousers.',
    features: [
      'Single Kurti Tunic with Embroidered Yoke & Border Cuffs',
      'Ivory resham embroidery on deep festive crimson canvas',
      'Comfort-fit straight silhouette with side slits for mobility',
      'Mother-of-pearl accent buttons along placket'
    ],
    care: [
      'Separate cold wash',
      'Do not soak for long durations',
      'Iron on reverse embroidery side'
    ],
    measurements: {
      bust: '37.5" (Size S)',
      shirtLength: '38"',
      shoulder: '14"'
    },
    rating: 4.8,
    reviewsCount: 31,
    inStock: true
  },
  {
    id: 'isra-tp-03',
    title: 'Nocturne Noir Split-Cuff Co-Ord',
    category: 'two-piece',
    categoryLabel: 'Two-Piece Co-Ord',
    price: 4950,
    originalPrice: 5800,
    tag: 'New In',
    fabric: 'Linen',
    color: 'Jet Black',
    colorHex: '#1C1917',
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/src/assets/images/isra_product_two_piece_black_1792877566324.jpg',
    description: 'An architectural statement in deep noir. Features a modern wide boat neckline, split flared cuff sleeves, and wide-leg palazzo pants in premium heavy linen. Effortlessly transitions from daytime meetings to chic evening dinner dates.',
    features: [
      '2-Piece: Boat-Neck Tunic & Relaxed Wide-Leg Trousers',
      'Sculptural sleeve split cuffs for a contemporary flair',
      'Premium breathable linen with elegant natural drape',
      'Concealed back zip closure for an immaculate tailored fit'
    ],
    care: [
      'Dry clean or gentle machine wash inside out',
      'Steam iron for crisp edges'
    ],
    measurements: {
      bust: '38" (Size S)',
      shirtLength: '35"',
      trouserLength: '39"',
      shoulder: '14.5"'
    },
    rating: 4.9,
    reviewsCount: 27,
    inStock: true
  },
  {
    id: 'isra-kt-02',
    title: 'Breeze Printed Lawn Kurti',
    category: 'kurti',
    categoryLabel: 'Trendy Kurti',
    price: 2450,
    originalPrice: 2850,
    tag: 'Best Seller',
    fabric: 'Lawn',
    color: 'Powder Blue',
    colorHex: '#A2C2E1',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/src/assets/images/isra_product_kurti_powder_blue_1792877565815.jpg',
    description: 'Light-as-air summer lawn kurti with geometric terracotta borders and delicate floral motif patterns. Engineered for hot days, university classes, and daily errands. Tailored in an easy A-line cut.',
    features: [
      '100% Superfine combed lawn with high color fastness',
      'Mandarin collar with pearl loop buttons',
      'Contrasting hem border and cuff prints',
      'Flattering relaxed A-line silhouette'
    ],
    care: [
      'Machine wash gentle cycle',
      'Dry in partial shade to retain colors',
      'Medium heat iron'
    ],
    measurements: {
      bust: '38" (Size S)',
      shirtLength: '37"',
      shoulder: '14.5"'
    },
    rating: 4.7,
    reviewsCount: 54,
    inStock: true
  },
  {
    id: 'isra-fs-01',
    title: 'Terracotta Fusion Short Kurti',
    category: 'fusion',
    categoryLabel: 'Fusion Pret',
    price: 2650,
    originalPrice: 3100,
    tag: 'Trending',
    fabric: 'Pure Cotton',
    color: 'Warm Terracotta',
    colorHex: '#C86D51',
    sizes: ['S', 'M', 'L'],
    image: '/src/assets/images/isra_product_kurti_crimson_1792877565035.jpg',
    description: 'A contemporary short fusion kurti designed to be paired with wide-leg denim jeans, bell-bottoms, or flared culottes. Features a notched neckline with wooden statement buttons and rolled 3/4 sleeves.',
    features: [
      'Modern short length (32 inches) designed specifically for denim pairing',
      'Textured slub cotton with soft hand feel',
      'Flap pocket accent and contrast stitching',
      'Ideal for university, hangout, and casual workdays'
    ],
    care: [
      'Machine wash cold with like colors',
      'Tumble dry low or air dry'
    ],
    measurements: {
      bust: '38.5" (Size S)',
      shirtLength: '32"',
      shoulder: '14.5"'
    },
    rating: 4.9,
    reviewsCount: 39,
    inStock: true
  },
  {
    id: 'isra-tp-04',
    title: 'Emerald Mirror-Work Festive Two-Piece',
    category: 'two-piece',
    categoryLabel: 'Two-Piece Co-Ord',
    price: 5250,
    originalPrice: 6200,
    tag: 'Festive Edit',
    fabric: 'Viscose Silk',
    color: 'Emerald Green',
    colorHex: '#1B4D3E',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/src/assets/images/isra_product_two_piece_sage_1792877565080.jpg',
    description: 'Jewel-toned emerald green two-piece crafted in premium fluid viscose silk. Embellished with delicate hand-set mirror accents and golden zari threadwork along the neckline, paired with tapered straight trousers.',
    features: [
      '2-Piece: Embroidered Viscose Tunic & Tapered Trousers',
      'Artisanal mirror-work neckline with zari accents',
      'Silky fluid drape with subtle lustrous finish',
      'Comfort-fit waistband with side pockets'
    ],
    care: [
      'Dry clean only',
      'Do not iron directly over mirror embellishments'
    ],
    measurements: {
      bust: '38" (Size S)',
      shirtLength: '37"',
      trouserLength: '38"',
      shoulder: '14.5"'
    },
    rating: 5.0,
    reviewsCount: 19,
    inStock: true
  },
  {
    id: 'isra-kt-03',
    title: 'Chalk White Jacquard Minimalist Kurti',
    category: 'kurti',
    categoryLabel: 'Trendy Kurti',
    price: 2750,
    originalPrice: 3200,
    tag: 'New In',
    fabric: 'Jacquard',
    color: 'Chalk White',
    colorHex: '#F5F5F0',
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/src/assets/images/isra_hero_fashion_model_1792877563783.jpg',
    description: 'A versatile wardrobe essential in self-textured jacquard weave. Clean tailored collar, subtle lace insertions on sleeve edges, and classic silhouette. Effortlessly styled with colorful dupattas, statement earrings, or worn standalone.',
    features: [
      'Self-woven subtle floral jacquard texture',
      'Lace trim detailing on cuff and hemline',
      'Comes with full soft cotton inner lining',
      'Breathable all-weather fabric'
    ],
    care: [
      'Hand wash recommended with mild detergent',
      'Steam iron to enhance jacquard texture'
    ],
    measurements: {
      bust: '37.5" (Size S)',
      shirtLength: '38"',
      shoulder: '14"'
    },
    rating: 4.8,
    reviewsCount: 22,
    inStock: true
  }
];

export const SIZE_CHART = [
  { size: 'XS', bustInches: '34 - 36', bustCm: '86 - 91', waistInches: '26 - 28', waistCm: '66 - 71', hipInches: '36 - 38', hipCm: '91 - 96', kurtiLength: '36"', trouserLength: '37"' },
  { size: 'S', bustInches: '37 - 38', bustCm: '94 - 97', waistInches: '29 - 31', waistCm: '73 - 79', hipInches: '39 - 41', hipCm: '99 - 104', kurtiLength: '37"', trouserLength: '38"' },
  { size: 'M', bustInches: '39 - 41', bustCm: '99 - 104', waistInches: '32 - 34', waistCm: '81 - 86', hipInches: '42 - 44', hipCm: '106 - 112', kurtiLength: '38"', trouserLength: '38.5"' },
  { size: 'L', bustInches: '42 - 44', bustCm: '106 - 112', waistInches: '35 - 37', waistCm: '89 - 94', hipInches: '45 - 47', hipCm: '114 - 119', kurtiLength: '39"', trouserLength: '39"' },
  { size: 'XL', bustInches: '45 - 47', bustCm: '114 - 119', waistInches: '38 - 40', waistCm: '96 - 101', hipInches: '48 - 50', hipCm: '122 - 127', kurtiLength: '40"', trouserLength: '39.5"' },
];

export const LOOKBOOKS = [
  {
    id: 'lb-1',
    title: 'University & Campus Days',
    subtitle: 'Breathable, low-maintenance fusion & short kurtis with jeans or straight trousers for long lecture hours.',
    tags: ['Daily Casual', '100% Cotton', 'Effortless Fit'],
    items: ['Breeze Printed Lawn Kurti', 'Terracotta Fusion Short Kurti'],
    heroImage: '/src/assets/images/isra_product_kurti_powder_blue_1792877565815.jpg'
  },
  {
    id: 'lb-2',
    title: 'Brunch & Café Outings',
    subtitle: 'Matching pastel two-piece co-ords that look polished in sunlight without feeling tight or stuffy.',
    tags: ['Co-ord Magic', 'Soft Pastels', 'Instagrammable'],
    items: ['Lilac Embroidered Co-Ord Set', 'Sage Garden Linen Co-Ord'],
    heroImage: '/src/assets/images/isra_hero_fashion_model_1792877563783.jpg'
  },
  {
    id: 'lb-3',
    title: 'Festive Evenings & Family Dawats',
    subtitle: 'Rich jewel tones, delicate thread embroidery and resham accents paired with traditional jhumkas.',
    tags: ['Festive Pret', 'Artisanal Neckline', 'Celebration Ready'],
    items: ['Crimson Kashmiri Thread Kurti', 'Emerald Mirror-Work Festive Two-Piece'],
    heroImage: '/src/assets/images/isra_product_kurti_crimson_1792877565035.jpg'
  },
  {
    id: 'lb-4',
    title: 'Minimalist Workspace & Internships',
    subtitle: 'Clean lines, monochrome palettes, and structured linen tailored for modern working women.',
    tags: ['Tailored Fit', 'Linen Blend', 'Timeless Noir'],
    items: ['Nocturne Noir Split-Cuff Co-Ord', 'Chalk White Jacquard Minimalist Kurti'],
    heroImage: '/src/assets/images/isra_product_two_piece_black_1792877566324.jpg'
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Ayesha Khan',
    age: '22',
    location: 'Karachi',
    rating: 5,
    title: 'Perfect fit for my uni classes!',
    comment: 'I ordered the Lilac Embroidered Co-Ord set. The fabric is so breathable in this humid weather and the straight trousers fit comfortably without being see-through. Received so many compliments on campus!',
    productName: 'Lilac Embroidered Co-Ord Set',
    date: '3 days ago'
  },
  {
    id: 'rev-2',
    name: 'Zainab Noor',
    age: '28',
    location: 'Lahore',
    rating: 5,
    title: 'Stitching and finish is boutique grade',
    comment: 'Usually readymade kurtis have loose threads or weird collar sizes, but ISRA collection has immaculate finishing. The Crimson Kashmiri kurti embroidery looks like custom designer pret.',
    productName: 'Crimson Kashmiri Thread Kurti',
    date: '1 week ago'
  },
  {
    id: 'rev-3',
    name: 'Hira Tariq',
    age: '31',
    location: 'Islamabad',
    rating: 5,
    title: 'The Black Co-Ord is stunning',
    comment: 'The split cuff detail on the Nocturne Noir set is so stylish! Wore it to a client lunch and then an evening dinner. Quick delivery and helpful WhatsApp team.',
    productName: 'Nocturne Noir Split-Cuff Co-Ord',
    date: '2 weeks ago'
  }
];
