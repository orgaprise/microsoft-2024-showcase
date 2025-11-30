import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ImageLightbox from "./ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";

// Import all product images
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";
import product7 from "@/assets/product-7.png";
import product8 from "@/assets/product-8.png";
import product9 from "@/assets/product-9.png";
import product10 from "@/assets/product-10.png";

interface ProductData {
  image: string;
  titleKey: string;
  descriptionKey: string;
  priceUSD: number;
  originalPriceUSD?: number;
  badgeKey?: string;
  buyLink: string;
}

const productsData: ProductData[] = [
  {
    image: product1,
    titleKey: "product.office365.title",
    descriptionKey: "product.office365.description",
    priceUSD: 99.99,
    originalPriceUSD: 149.99,
    badgeKey: "badge.bestSeller",
    buyLink: "#",
  },
  {
    image: product2,
    titleKey: "product.windows11.title",
    descriptionKey: "product.windows11.description",
    priceUSD: 199.99,
    originalPriceUSD: 259.99,
    badgeKey: "badge.popular",
    buyLink: "#",
  },
  {
    image: product3,
    titleKey: "product.visualstudio.title",
    descriptionKey: "product.visualstudio.description",
    priceUSD: 499.99,
    buyLink: "#",
  },
  {
    image: product4,
    titleKey: "product.azure.title",
    descriptionKey: "product.azure.description",
    priceUSD: 299.99,
    badgeKey: "badge.enterprise",
    buyLink: "#",
  },
  {
    image: product5,
    titleKey: "product.teams.title",
    descriptionKey: "product.teams.description",
    priceUSD: 149.99,
    originalPriceUSD: 199.99,
    buyLink: "#",
  },
  {
    image: product6,
    titleKey: "product.powerbi.title",
    descriptionKey: "product.powerbi.description",
    priceUSD: 249.99,
    buyLink: "#",
  },
  {
    image: product7,
    titleKey: "product.dynamics.title",
    descriptionKey: "product.dynamics.description",
    priceUSD: 399.99,
    badgeKey: "badge.enterprise",
    buyLink: "#",
  },
  {
    image: product8,
    titleKey: "product.sqlserver.title",
    descriptionKey: "product.sqlserver.description",
    priceUSD: 899.99,
    buyLink: "#",
  },
  {
    image: product9,
    titleKey: "product.sharepoint.title",
    descriptionKey: "product.sharepoint.description",
    priceUSD: 179.99,
    buyLink: "#",
  },
  {
    image: product10,
    titleKey: "product.copilot.title",
    descriptionKey: "product.copilot.description",
    priceUSD: 349.99,
    badgeKey: "badge.new",
    buyLink: "#",
  },
];

const ProductGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % productsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  // Transform products for display with translated content
  const products = productsData.map((product) => ({
    image: product.image,
    title: t(product.titleKey),
    description: t(product.descriptionKey),
    price: formatPrice(product.priceUSD),
    originalPrice: product.originalPriceUSD ? formatPrice(product.originalPriceUSD) : undefined,
    badge: product.badgeKey ? t(product.badgeKey) : undefined,
    buyLink: product.buyLink,
  }));

  return (
    <section id="products" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
            {t("products.badge")}
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t("products.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {t("products.description")}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              originalPrice={product.originalPrice}
              badge={product.badge}
              buyLink={product.buyLink}
              index={index}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {/* Lightbox */}
        <ImageLightbox
          images={products}
          currentIndex={currentIndex}
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      </div>
    </section>
  );
};

export default ProductGallery;
