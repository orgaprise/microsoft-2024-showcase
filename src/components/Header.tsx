import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <svg
              viewBox="0 0 23 23"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <rect width="10" height="10" fill="hsl(var(--primary-foreground))" />
              <rect x="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
              <rect y="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
              <rect x="12" y="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
            </svg>
          </div>
          <span className="font-display text-lg font-semibold text-foreground">
            Microsoft Gallery
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#products"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          View Gallery
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
