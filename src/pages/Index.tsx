
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";
import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { useTheme } from "@/context/theme-provider";
import { filterProducts, products, categories } from "@/lib/data";

const Index = () => {
  // Maximum price from all products
  const maxPrice = Math.max(...products.map(p => p.price));
  
  // Filter states
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Apply filters
  const filteredProducts = filterProducts(products, {
    category,
    priceRange,
    sortBy,
    search: searchQuery,
  });
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Aura</span>
          </Link>
          
          <div className="hidden md:flex md:flex-1 md:justify-center md:px-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex md:hidden">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <ModeToggle />
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile search (only shown on smaller screens) */}
      <div className="container my-4 flex md:hidden">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Main content */}
      <main className="container py-8">
        <div className="flex flex-col space-y-8">
          {/* Page header */}
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
            <p className="text-muted-foreground">
              Discover our collection of products curated just for you.
            </p>
          </div>
          
          {/* Filters and products */}
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-64 lg:w-72 mb-8 md:mb-0">
              <FilterSidebar
                categories={categories}
                activeCategory={category}
                priceRange={priceRange}
                maxPrice={maxPrice}
                onCategoryChange={setCategory}
                onPriceRangeChange={setPriceRange}
              />
            </div>
            
            {/* Products */}
            <div className="flex-1">
              {/* Sort controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <Select 
                    value={sortBy} 
                    onValueChange={setSortBy}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Default" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Featured</SelectItem>
                      <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                      <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="text-lg font-medium">No products found</p>
                  <p className="text-muted-foreground mt-1">
                    Try adjusting your filters or search query
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Aura Commerce. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Terms</Button>
            <Button variant="ghost" size="sm">Privacy</Button>
            <Button variant="ghost" size="sm">Contact</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
