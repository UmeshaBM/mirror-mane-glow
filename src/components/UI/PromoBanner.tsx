import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-secondary-light/20"></div>
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <Sparkles className="h-5 w-5 text-secondary-dark animate-pulse" />
          <span className="font-medium text-sm md:text-base">
            🎉 Special Offer: <strong>20% OFF</strong> on your first haircut - Limited Time!
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button asChild size="sm" className="bg-secondary-dark hover:bg-secondary-dark/90 text-white text-xs px-3 py-1">
            <Link to="/booking">Book Now</Link>
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded hover:bg-white/20 transition-colors"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;