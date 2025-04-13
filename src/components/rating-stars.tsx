
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  className?: string;
  starSize?: number;
}

export function RatingStars({ rating, className, starSize = 14 }: RatingStarsProps) {
  // Generate an array of 5 elements
  const stars = Array.from({ length: 5 }, (_, i) => {
    // Determine fill level for each star
    let fillLevel = 0;
    if (i < Math.floor(rating)) {
      // Full star
      fillLevel = 100;
    } else if (i === Math.floor(rating) && rating % 1 !== 0) {
      // Partial star (uses the decimal part of the rating)
      fillLevel = Math.round((rating % 1) * 100);
    }
    
    return { fillLevel };
  });

  return (
    <div className={cn("flex items-center", className)}>
      {stars.map((star, index) => (
        <span key={index} className="relative">
          <Star
            size={starSize}
            className="text-gray-300 dark:text-gray-600"
            fill="currentColor"
          />
          <span 
            className="absolute inset-0 overflow-hidden" 
            style={{ width: `${star.fillLevel}%` }}
          >
            <Star
              size={starSize}
              className="text-yellow-400"
              fill="currentColor"
            />
          </span>
        </span>
      ))}
    </div>
  );
}
