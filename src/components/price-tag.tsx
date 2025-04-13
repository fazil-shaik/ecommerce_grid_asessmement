
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  discountedPrice?: number;
  className?: string;
}

export function PriceTag({ price, discountedPrice, className }: PriceTagProps) {
  // Format price to always show 2 decimal places and add $ symbol
  const formatPrice = (value: number) => {
    return `$${value.toFixed(2)}`;
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {discountedPrice ? (
        <>
          <span className="font-semibold">{formatPrice(discountedPrice)}</span>
          <span className="text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
        </>
      ) : (
        <span className="font-semibold">{formatPrice(price)}</span>
      )}
    </div>
  );
}
