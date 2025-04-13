
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { RatingStars } from "@/components/rating-stars";
import { PriceTag } from "@/components/price-tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/client/Product/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Find product by ID
  const product = products.find(p => p.id === Number(id));
  
  // State for selected options and quantity
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // If product not found, redirect to 404
  useEffect(() => {
    if (!product && id) {
      navigate("/not-found");
    }
  }, [product, id, navigate]);
  
  if (!product) {
    return null;
  }
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container pt-6">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-4 flex items-center gap-1"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
      </div>
      
      {/* Product details */}
      <div className="container pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Product images */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg border">
              <img
                src={product.images[activeImageIndex]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative h-16 w-16 overflow-hidden rounded-md border ${
                      activeImageIndex === index ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center">
                  <RatingStars rating={product.rating} starSize={18} />
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({product.reviewCount} reviews)
                  </span>
                </div>
                
                {product.stock <= 5 && (
                  <span className="text-sm text-destructive">
                    Only {product.stock} left in stock
                  </span>
                )}
              </div>
              
              <div className="mt-4">
                <PriceTag
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                  className="text-2xl"
                />
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                <p>{product.description}</p>
              </div>
            </div>
            
            {/* Product options */}
            <div className="space-y-6">
              {/* Color options */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-medium">Color</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`h-8 w-8 rounded-full border p-0.5 ${
                          selectedColor === color ? "ring-2 ring-primary" : ""
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Color: ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size options */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="mb-3 text-sm font-medium">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`flex h-9 min-w-[2.5rem] items-center justify-center rounded-md border px-3 text-sm ${
                          selectedSize === size
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-input bg-background"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity */}
              <div>
                <h3 className="mb-3 text-sm font-medium">Quantity</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="mx-4 w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={incrementQuantity}
                    disabled={quantity >= product.stock}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                className="flex-1 gap-2"
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </Button>
              
              <Button variant="outline" size="icon" aria-label="Add to wishlist">
                <Heart className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon" aria-label="Share product">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <div className="prose dark:prose-invert max-w-none">
                <p>{product.description}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do 
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <div className="prose dark:prose-invert max-w-none">
                <ul>
                  <li>Category: {product.category}</li>
                  <li>Tags: {product.tags.join(", ")}</li>
                  <li>In Stock: {product.stock} units</li>
                  {product.sizes && <li>Available Sizes: {product.sizes.join(", ")}</li>}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <div className="prose dark:prose-invert max-w-none">
                <div className="flex items-center gap-2">
                  <RatingStars rating={product.rating} starSize={20} />
                  <span className="text-lg font-medium">{product.rating.toFixed(1)}</span>
                  <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
                </div>
                <p className="mt-4">
                  Reviews are currently being loaded. Please check back later.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related products section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </div>
      
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

export default ProductDetailPage;
