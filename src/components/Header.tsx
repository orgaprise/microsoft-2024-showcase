import { motion } from "framer-motion";
import { ShoppingCart, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import LanguageCurrencySelector from "./LanguageCurrencySelector";

const Header = () => {
  const { t, localizedPath, language } = useLanguage();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+1 (234) 567-890</span>
            </a>
            <a href="mailto:sales@example.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">sales@example.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link to={localizedPath("/blog")} className="hover:opacity-80 transition-opacity hidden sm:inline">
              {t("header.blog")}
            </Link>
            <div className="h-3 w-px bg-primary-foreground/30 hidden sm:block" />
            <Link to={localizedPath("/help")} className="hover:opacity-80 transition-opacity hidden sm:inline">
              {t("header.helpCenter")}
            </Link>
            <div className="h-3 w-px bg-primary-foreground/30" />
            <LanguageCurrencySelector />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to={localizedPath("/")} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/25">
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
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-foreground leading-tight">
                SoftwareStore
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
                {t("header.partner")}
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href={`/${language}#products`}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {t("header.products")}
            </a>
            <a
              href={`/${language}#features`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("header.whyChooseUs")}
            </a>
            <Link
              to={localizedPath("/contact")}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("header.contact")}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                0
              </span>
            </button>
            <a
              href={`/${language}#products`}
              className="hidden sm:inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
            >
              {t("header.shopNow")}
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
