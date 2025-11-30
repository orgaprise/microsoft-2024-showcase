import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, SortAsc } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ImageLightbox from "@/components/ImageLightbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  category: string;
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
    category: "productivity",
  },
  {
    image: product2,
    titleKey: "product.windows11.title",
    descriptionKey: "product.windows11.description",
    priceUSD: 199.99,
    originalPriceUSD: 259.99,
    badgeKey: "badge.popular",
    buyLink: "#",
    category: "operating-system",
  },
  {
    image: product3,
    titleKey: "product.visualstudio.title",
    descriptionKey: "product.visualstudio.description",
    priceUSD: 499.99,
    buyLink: "#",
    category: "developer",
  },
  {
    image: product4,
    titleKey: "product.azure.title",
    descriptionKey: "product.azure.description",
    priceUSD: 299.99,
    badgeKey: "badge.enterprise",
    buyLink: "#",
    category: "cloud",
  },
  {
    image: product5,
    titleKey: "product.teams.title",
    descriptionKey: "product.teams.description",
    priceUSD: 149.99,
    originalPriceUSD: 199.99,
    buyLink: "#",
    category: "productivity",
  },
  {
    image: product6,
    titleKey: "product.powerbi.title",
    descriptionKey: "product.powerbi.description",
    priceUSD: 249.99,
    buyLink: "#",
    category: "business",
  },
  {
    image: product7,
    titleKey: "product.dynamics.title",
    descriptionKey: "product.dynamics.description",
    priceUSD: 399.99,
    badgeKey: "badge.enterprise",
    buyLink: "#",
    category: "business",
  },
  {
    image: product8,
    titleKey: "product.sqlserver.title",
    descriptionKey: "product.sqlserver.description",
    priceUSD: 899.99,
    buyLink: "#",
    category: "developer",
  },
  {
    image: product9,
    titleKey: "product.sharepoint.title",
    descriptionKey: "product.sharepoint.description",
    priceUSD: 179.99,
    buyLink: "#",
    category: "productivity",
  },
  {
    image: product10,
    titleKey: "product.copilot.title",
    descriptionKey: "product.copilot.description",
    priceUSD: 349.99,
    badgeKey: "badge.new",
    buyLink: "#",
    category: "productivity",
  },
];

const Products = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const { t } = useLanguage();
  const { formatPrice } = useCurrency();

  const categories = [
    { value: "all", labelKey: "products.filter.all" },
    { value: "productivity", labelKey: "products.filter.productivity" },
    { value: "operating-system", labelKey: "products.filter.os" },
    { value: "developer", labelKey: "products.filter.developer" },
    { value: "cloud", labelKey: "products.filter.cloud" },
    { value: "business", labelKey: "products.filter.business" },
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.map((product) => ({
      ...product,
      title: t(product.titleKey),
      description: t(product.descriptionKey),
      price: formatPrice(product.priceUSD),
      originalPrice: product.originalPriceUSD ? formatPrice(product.originalPriceUSD) : undefined,
      badge: product.badgeKey ? t(product.badgeKey) : undefined,
    }));

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case "price-desc":
        result.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [searchQuery, categoryFilter, sortBy, t, formatPrice]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredAndSortedProducts.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredAndSortedProducts.length) % filteredAndSortedProducts.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              {t("products.page.badge")}
            </span>
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {t("products.page.title")}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
              {t("products.page.description")}
            </p>
          </div>

          {/* Filters Bar */}
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("products.search.placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder={t("products.filter.category")} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {t(cat.labelKey)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SortAsc className="mr-2 h-4 w-4" />
                  <SelectValue placeholder={t("products.sort.label")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">{t("products.sort.default")}</SelectItem>
                  <SelectItem value="price-asc">{t("products.sort.priceAsc")}</SelectItem>
                  <SelectItem value="price-desc">{t("products.sort.priceDesc")}</SelectItem>
                  <SelectItem value="name">{t("products.sort.name")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <p className="mb-6 text-sm text-muted-foreground">
            {t("products.results.showing")} {filteredAndSortedProducts.length} {t("products.results.products")}
          </p>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAndSortedProducts.map((product, index) => (
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
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">{t("products.noResults")}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("all");
                }}
              >
                {t("products.clearFilters")}
              </Button>
            </div>
          )}

          {/* Lightbox */}
          <ImageLightbox
            images={filteredAndSortedProducts}
            currentIndex={currentIndex}
            isOpen={lightboxOpen}
            onClose={closeLightbox}
            onNext={goToNext}
            onPrev={goToPrev}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
