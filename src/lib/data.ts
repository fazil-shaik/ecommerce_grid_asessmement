
// Mocked product data for the e-commerce application

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  tags: string[];
  colors?: string[];
  sizes?: string[];
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  createdAt: Date;
};

export type Category = {
  id: string;
  name: string;
  count: number;
};

// Categories
export const categories: Category[] = [
  { id: "all", name: "All Products", count: 24 },
  { id: "clothing", name: "Clothing", count: 10 },
  { id: "accessories", name: "Accessories", count: 5 },
  { id: "footwear", name: "Footwear", count: 4 },
  { id: "electronics", name: "Electronics", count: 5 }
];

// Mock product data
export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Leather Backpack",
    description: "Crafted from premium leather, this minimalist backpack offers both style and functionality. Perfect for daily commutes, it features multiple compartments for organized storage and adjustable straps for comfortable carrying.",
    price: 129.99,
    discountedPrice: 99.99,
    rating: 4.8,
    reviewCount: 128,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "accessories",
    tags: ["leather", "backpack", "bag"],
    colors: ["#4A5568", "#A0AEC0", "#E2E8F0"],
    stock: 15,
    isNew: true,
    isFeatured: true,
    createdAt: new Date("2023-01-15")
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    description: "Experience immersive sound with these premium wireless headphones. Featuring active noise cancellation, Bluetooth 5.0 connectivity, and 30 hours of battery life.",
    price: 249.99,
    rating: 4.7,
    reviewCount: 203,
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["headphones", "wireless", "audio"],
    colors: ["#1A202C", "#F56565", "#4299E1"],
    stock: 8,
    isFeatured: true,
    createdAt: new Date("2023-03-10")
  },
  {
    id: 3,
    name: "Premium Cotton T-Shirt",
    description: "A comfortable everyday t-shirt made from 100% organic cotton. Features a classic fit, crew neck, and is pre-shrunk to maintain its shape.",
    price: 29.99,
    discountedPrice: 24.99,
    rating: 4.5,
    reviewCount: 318,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "clothing",
    tags: ["t-shirt", "cotton", "casual"],
    colors: ["#F7FAFC", "#2D3748", "#F56565", "#4299E1"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 50,
    createdAt: new Date("2023-01-05")
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    description: "Track your fitness goals with this advanced smart tracker. Features heart rate monitoring, sleep tracking, and 7-day battery life.",
    price: 79.99,
    rating: 4.3,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1575311373937-040b8e3fd3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1593871866540-9a92426f84e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["fitness", "smartwatch", "tracker"],
    colors: ["#2D3748", "#F56565", "#4299E1"],
    stock: 12,
    createdAt: new Date("2023-04-20")
  },
  {
    id: 5,
    name: "Slim Fit Denim Jeans",
    description: "Classic slim fit jeans made from premium stretch denim. Features a comfortable mid-rise waist and five pockets.",
    price: 59.99,
    rating: 4.6,
    reviewCount: 217,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "clothing",
    tags: ["jeans", "denim", "slim fit"],
    colors: ["#2D3748", "#4A5568"],
    sizes: ["28", "30", "32", "34", "36"],
    stock: 30,
    createdAt: new Date("2023-02-15")
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    description: "A compact, water-resistant Bluetooth speaker with 360° sound and 12 hours of playtime. Perfect for outdoor adventures.",
    price: 89.99,
    discountedPrice: 69.99,
    rating: 4.4,
    reviewCount: 98,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["speaker", "bluetooth", "audio"],
    colors: ["#1A202C", "#F56565", "#4299E1"],
    stock: 18,
    isNew: true,
    createdAt: new Date("2023-06-01")
  },
  {
    id: 7,
    name: "Premium Running Shoes",
    description: "Lightweight and responsive running shoes with cushioned midsole and breathable upper. Designed for performance and comfort.",
    price: 119.99,
    rating: 4.7,
    reviewCount: 175,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "footwear",
    tags: ["shoes", "running", "athletic"],
    colors: ["#F56565", "#4299E1", "#48BB78"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    stock: 22,
    isFeatured: true,
    createdAt: new Date("2023-01-25")
  },
  {
    id: 8,
    name: "Designer Sunglasses",
    description: "Stylish polarized sunglasses with UV protection and lightweight frame. Perfect for both casual and formal outfits.",
    price: 149.99,
    discountedPrice: 129.99,
    rating: 4.5,
    reviewCount: 82,
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "accessories",
    tags: ["sunglasses", "polarized", "uv protection"],
    colors: ["#1A202C", "#A0AEC0"],
    stock: 10,
    createdAt: new Date("2023-05-10")
  },
  {
    id: 9,
    name: "Winter Parka Jacket",
    description: "A warm and waterproof winter jacket with premium down insulation. Features multiple pockets and a detachable hood.",
    price: 199.99,
    rating: 4.8,
    reviewCount: 112,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "clothing",
    tags: ["jacket", "winter", "waterproof"],
    colors: ["#1A202C", "#4A5568", "#F56565"],
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
    createdAt: new Date("2023-06-15")
  },
  {
    id: 10,
    name: "Classic Leather Wallet",
    description: "A slim and stylish wallet crafted from genuine leather. Features multiple card slots and RFID protection.",
    price: 49.99,
    rating: 4.6,
    reviewCount: 205,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "accessories",
    tags: ["wallet", "leather", "rfid"],
    colors: ["#1A202C", "#4A5568", "#A0AEC0"],
    stock: 25,
    createdAt: new Date("2023-03-01")
  },
  {
    id: 11,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with active noise cancellation, touch controls, and up to 24 hours of battery life with the charging case.",
    price: 129.99,
    discountedPrice: 99.99,
    rating: 4.5,
    reviewCount: 163,
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605464073-696a92598107?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "electronics",
    tags: ["earbuds", "wireless", "audio"],
    colors: ["#1A202C", "#F56565", "#4299E1"],
    stock: 8,
    isNew: true,
    createdAt: new Date("2023-07-05")
  },
  {
    id: 12,
    name: "Casual Canvas Sneakers",
    description: "Comfortable and stylish canvas sneakers with cushioned insole and durable rubber outsole. Perfect for everyday wear.",
    price: 59.99,
    rating: 4.4,
    reviewCount: 147,
    images: [
      "https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "footwear",
    tags: ["sneakers", "canvas", "casual"],
    colors: ["#F7FAFC", "#1A202C", "#F56565", "#4299E1"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    stock: 20,
    createdAt: new Date("2023-02-10")
  },
];

// Helper function to filter products based on filters
export const filterProducts = (
  products: Product[],
  filters: {
    category: string;
    priceRange: [number, number];
    sortBy: string;
    search: string;
  }
) => {
  let filtered = [...products];
  
  // Filter by category
  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter(product => product.category === filters.category);
  }
  
  // Filter by price range
  filtered = filtered.filter(product => {
    const productPrice = product.discountedPrice || product.price;
    return productPrice >= filters.priceRange[0] && productPrice <= filters.priceRange[1];
  });
  
  // Filter by search query
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(
      product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }
  
  // Sort products
  switch (filters.sortBy) {
    case "price-low-to-high":
      filtered.sort((a, b) => (a.discountedPrice || a.price) - (b.discountedPrice || b.price));
      break;
    case "price-high-to-low":
      filtered.sort((a, b) => (b.discountedPrice || b.price) - (a.discountedPrice || a.price));
      break;
    case "newest":
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Default sort: featured first, then newest
      filtered.sort((a, b) => {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return b.createdAt.getTime() - a.createdAt.getTime();
      });
  }
  
  return filtered;
};
