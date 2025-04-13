
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";
import { PriceTag } from "@/components/price-tag";
import { cn } from "@/lib/utils";
import { products } from "@/lib/data";

const ProductCard = ({ product, className }) => {
  return (
    <div 
      className={cn(
        "group h-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm product-card-hover",
        className
      )}
    >
      <div className="relative h-64 overflow-hidden">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute right-3 top-3 bg-white/80 hover:bg-white dark:bg-gray-900/80 dark:hover:bg-gray-900 h-8 w-8 rounded-full"
          aria-label="Add to wishlist"
        >
          <Heart className="h-4 w-4" />
        </Button>
        
        {product.isNew && (
          <span className="absolute left-0 top-3 bg-primary px-2 py-1 text-xs font-medium text-white">
            NEW
          </span>
        )}
        
        {product.discountedPrice && (
          <span className="absolute left-0 top-3 bg-destructive px-2 py-1 text-xs font-medium text-white">
            SALE
          </span>
        )}
      </div>
      
      <div className="flex flex-col p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="line-clamp-1 font-medium hover:text-primary">{product.name}</h3>
        </Link>
        
        <div className="mt-1 flex items-center">
          <RatingStars rating={product.rating} />
          <span className="ml-1 text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        
        <div className="mt-2">
          <PriceTag price={product.price} discountedPrice={product.discountedPrice} />
        </div>
        
        <div className="mt-4 flex-grow flex items-end">
          <Button 
            className="w-full transition-colors"
            size="sm"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
