
import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

const FilterSidebar = ({
  categories,
  activeCategory,
  priceRange,
  maxPrice,
  onCategoryChange,
  onPriceRangeChange,
  className,
}) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Format price to always show 2 decimal places and add $ symbol
  const formatPrice = (value) => {
    return `$${value.toFixed(2)}`;
  };
  
  const handlePriceChange = (values) => {
    onPriceRangeChange([values[0], values[1]]);
  };
  
  const Filters = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-medium">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <button
                className={cn(
                  "w-full rounded-md px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "text-foreground"
                )}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name}
                <span className="ml-1 text-xs">({category.count})</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="mb-4 text-lg font-medium">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={maxPrice}
            step={1}
            value={priceRange}
            onValueChange={handlePriceChange}
          />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{formatPrice(priceRange[0])}</span>
            <span className="text-sm font-medium">{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <>
      {/* Desktop sidebar */}
      <div className={cn("hidden md:block", className)}>
        <Filters />
      </div>
      
      {/* Mobile filter dialog */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </Button>
        
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs rounded-l-lg border bg-background p-6 shadow-lg animate-slide-up-fade">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="h-[calc(100vh-8rem)] overflow-y-auto pb-20">
                <Filters />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 border-t bg-background p-4">
                <Button 
                  className="w-full"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterSidebar;
