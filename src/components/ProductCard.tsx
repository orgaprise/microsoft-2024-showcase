import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  buyLink: string;
  index: number;
  onClick: () => void;
}

const ProductCard = ({ 
  image, 
  title, 
  description, 
  price, 
  originalPrice, 
  badge,
  buyLink,
  index, 
  onClick 
}: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 shadow-card transition-all duration-500 hover:shadow-card-hover hover:border-primary/20">
        {/* Badge */}
        {badge && (
          <div className="absolute left-3 top-3 z-10">
            <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground shadow-lg">
              {badge}
            </span>
          </div>
        )}

        {/* Image Container */}
        <div 
          className="relative aspect-[4/3] overflow-hidden bg-secondary/30 cursor-pointer"
          onClick={onClick}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Quick View */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-card/95 shadow-lg backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </motion.div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary line-clamp-1">
            {title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 min-h-[40px]">
            {description}
          </p>

          {/* Price */}
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>

          {/* Buy Button */}
          <a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
          >
            <ShoppingCart className="h-4 w-4" />
            Buy Now
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
