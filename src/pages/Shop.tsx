import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import { useLanguage } from "@/contexts/LanguageContext";

const Shop = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                {t("shop.badge")}
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
                {t("shop.title")}
              </h1>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                {t("shop.description")}
              </p>
            </div>
          </div>
        </section>
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
