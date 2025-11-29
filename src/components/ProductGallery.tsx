import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import ImageLightbox from "./ImageLightbox";

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

const products = [
  {
    image: product1,
    title: "Microsoft Office 365",
    description: "Complete productivity suite with Word, Excel, PowerPoint and more for modern professionals.",
  },
  {
    image: product2,
    title: "Windows 11 Pro",
    description: "The most advanced Windows operating system with enhanced security and performance.",
  },
  {
    image: product3,
    title: "Visual Studio 2024",
    description: "Professional IDE for developers with advanced debugging and collaboration tools.",
  },
  {
    image: product4,
    title: "Microsoft Azure",
    description: "Enterprise cloud computing platform for building, deploying, and managing applications.",
  },
  {
    image: product5,
    title: "Microsoft Teams Premium",
    description: "Advanced collaboration and communication platform for modern workplaces.",
  },
  {
    image: product6,
    title: "Power BI Pro",
    description: "Business analytics solution for data visualization and intelligent insights.",
  },
  {
    image: product7,
    title: "Dynamics 365",
    description: "Enterprise resource planning and CRM solution for business transformation.",
  },
  {
    image: product8,
    title: "SQL Server 2024",
    description: "Industry-leading database platform with AI-powered analytics capabilities.",
  },
  {
    image: product9,
    title: "SharePoint 2024",
    description: "Collaborative content management and document sharing platform.",
  },
  {
    image: product10,
    title: "Microsoft Copilot",
    description: "AI-powered assistant revolutionizing productivity across Microsoft 365 apps.",
  },
];

const ProductGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Product Gallery
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">
            Click any image to view in full resolution
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
