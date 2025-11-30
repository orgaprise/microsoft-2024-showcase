import { createContext, useContext, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  localizedPath: (path: string) => string;
}

// Route mappings for each language
export const routeMappings: Record<Language, Record<string, string>> = {
  en: {
    "/": "/en",
    "/contact": "/en/contact",
    "/products": "/en/products",
    "/blog": "/en/blog",
  },
  es: {
    "/": "/es",
    "/contact": "/es/contacto",
    "/products": "/es/productos",
    "/blog": "/es/blog",
  },
};

// Reverse mapping to find base path from localized path
export const reverseRouteMappings: Record<string, { lang: Language; basePath: string }> = {
  "/en": { lang: "en", basePath: "/" },
  "/en/contact": { lang: "en", basePath: "/contact" },
  "/en/products": { lang: "en", basePath: "/products" },
  "/en/blog": { lang: "en", basePath: "/blog" },
  "/es": { lang: "es", basePath: "/" },
  "/es/contacto": { lang: "es", basePath: "/contact" },
  "/es/productos": { lang: "es", basePath: "/products" },
  "/es/blog": { lang: "es", basePath: "/blog" },
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "header.blog": "Blog",
    "header.helpCenter": "Help Center",
    "header.partner": "Microsoft Partner",
    "header.products": "Products",
    "header.whyChooseUs": "Why Choose Us",
    "header.contact": "Contact",
    "header.shopNow": "Shop Now",
    
    // Hero
    "hero.badge": "Authorized Microsoft Partner",
    "hero.genuine": "100% Genuine Licenses",
    "hero.title1": "Premium Microsoft",
    "hero.title2": "Software Store",
    "hero.description": "Get genuine Microsoft software with instant digital delivery. Trusted by thousands of businesses worldwide with 24/7 support.",
    "hero.browseProducts": "Browse Products",
    "hero.whyChooseUs": "Why Choose Us",
    "hero.genuineLicense": "Genuine License",
    "hero.authentic": "100% Authentic",
    "hero.instantDelivery": "Instant Delivery",
    "hero.digitalDownload": "Digital Download",
    "hero.securePayment": "Secure Payment",
    "hero.sslProtected": "SSL Protected",
    "hero.support": "24/7 Support",
    "hero.expertHelp": "Expert Help",
    
    // Products
    "products.badge": "Our Products",
    "products.title": "Microsoft Software Collection",
    "products.description": "Genuine licenses with instant digital delivery. Click any product to view details or buy now to purchase.",
    "products.buyNow": "Buy Now",
    "products.quickView": "Quick View",
    
    // Products Page
    "products.page.badge": "Product Catalog",
    "products.page.title": "All Microsoft Products",
    "products.page.description": "Browse our complete collection of genuine Microsoft software licenses with instant digital delivery.",
    "products.search.placeholder": "Search products...",
    "products.filter.category": "Category",
    "products.filter.all": "All Categories",
    "products.filter.productivity": "Productivity",
    "products.filter.os": "Operating Systems",
    "products.filter.developer": "Developer Tools",
    "products.filter.cloud": "Cloud Services",
    "products.filter.business": "Business Solutions",
    "products.sort.label": "Sort by",
    "products.sort.default": "Featured",
    "products.sort.priceAsc": "Price: Low to High",
    "products.sort.priceDesc": "Price: High to Low",
    "products.sort.name": "Name A-Z",
    "products.results.showing": "Showing",
    "products.results.products": "products",
    "products.noResults": "No products found matching your criteria.",
    "products.clearFilters": "Clear Filters",
    
    // Product titles and descriptions
    "product.office365.title": "Microsoft Office 365",
    "product.office365.description": "Complete productivity suite with Word, Excel, PowerPoint and more for modern professionals.",
    "product.windows11.title": "Windows 11 Pro",
    "product.windows11.description": "The most advanced Windows operating system with enhanced security and performance.",
    "product.visualstudio.title": "Visual Studio 2024",
    "product.visualstudio.description": "Professional IDE for developers with advanced debugging and collaboration tools.",
    "product.azure.title": "Microsoft Azure",
    "product.azure.description": "Enterprise cloud computing platform for building, deploying, and managing applications.",
    "product.teams.title": "Microsoft Teams Premium",
    "product.teams.description": "Advanced collaboration and communication platform for modern workplaces.",
    "product.powerbi.title": "Power BI Pro",
    "product.powerbi.description": "Business analytics solution for data visualization and intelligent insights.",
    "product.dynamics.title": "Dynamics 365",
    "product.dynamics.description": "Enterprise resource planning and CRM solution for business transformation.",
    "product.sqlserver.title": "SQL Server 2024",
    "product.sqlserver.description": "Industry-leading database platform with AI-powered analytics capabilities.",
    "product.sharepoint.title": "SharePoint 2024",
    "product.sharepoint.description": "Collaborative content management and document sharing platform.",
    "product.copilot.title": "Microsoft Copilot",
    "product.copilot.description": "AI-powered assistant revolutionizing productivity across Microsoft 365 apps.",
    
    // Badges
    "badge.bestSeller": "Best Seller",
    "badge.popular": "Popular",
    "badge.enterprise": "Enterprise",
    "badge.new": "New",
    
    // Features
    "features.badge": "Why Choose Us",
    "features.title1": "The Trusted Choice for",
    "features.title2": "Microsoft Software",
    "features.description": "As a certified Microsoft Partner, we provide genuine software with unmatched service and support.",
    "features.genuine.title": "100% Genuine Licenses",
    "features.genuine.description": "All our products are sourced directly from Microsoft. Every license is authentic and fully supported.",
    "features.instant.title": "Instant Digital Delivery",
    "features.instant.description": "Get your license key within seconds after purchase. No waiting, start using your software immediately.",
    "features.support.title": "24/7 Customer Support",
    "features.support.description": "Our expert team is available around the clock to help with installation, activation, and any questions.",
    "features.trustedPartners": "Trusted Security & Payment Partners",
    
    // Testimonials
    "testimonials.badge": "Customer Reviews",
    "testimonials.title1": "What Our Customers",
    "testimonials.title2": "Say About Us",
    "testimonials.description": "Join thousands of satisfied customers who trust us for their Microsoft software needs.",
    "testimonials.1.name": "Michael Chen",
    "testimonials.1.role": "IT Director",
    "testimonials.1.company": "TechFlow Solutions",
    "testimonials.1.content": "Outstanding service! The instant delivery saved us hours during a critical project deadline. The license keys worked flawlessly and the support team was incredibly helpful.",
    "testimonials.2.name": "Sarah Rodriguez",
    "testimonials.2.role": "Operations Manager",
    "testimonials.2.company": "Global Ventures Inc.",
    "testimonials.2.content": "We've been purchasing all our Microsoft licenses here for 3 years. The prices are competitive, delivery is instant, and we've never had a single issue with authenticity.",
    "testimonials.3.name": "David Thompson",
    "testimonials.3.role": "CEO",
    "testimonials.3.company": "StartUp Labs",
    "testimonials.3.content": "As a startup, we needed affordable but genuine software. This store delivered exactly that. Professional service, genuine products, and excellent customer support.",
    "testimonials.stats.customers": "Happy Customers",
    "testimonials.stats.satisfaction": "Satisfaction Rate",
    "testimonials.stats.rating": "Average Rating",
    "testimonials.stats.support": "Expert Support",
    
    // Blog
    "blog.badge": "Our Blog",
    "blog.title": "Latest News & Tips",
    "blog.description": "Stay updated with the latest Microsoft software news, tips, and best practices.",
    "blog.featured": "Featured",
    "blog.readMore": "Read More",
    "blog.readTime": "read",
    "blog.category.productivity": "Productivity",
    "blog.category.os": "Operating Systems",
    "blog.category.cloud": "Cloud",
    "blog.category.ai": "AI & Innovation",
    "blog.category.security": "Security",
    "blog.post1.title": "10 Essential Office 365 Tips to Boost Your Productivity",
    "blog.post1.excerpt": "Discover powerful features in Office 365 that can help you work smarter and save hours every week.",
    "blog.post2.title": "What's New in Windows 11: A Complete Guide",
    "blog.post2.excerpt": "Explore the latest features, improvements, and tips for getting the most out of Windows 11.",
    "blog.post3.title": "Why Businesses Are Moving to Azure Cloud",
    "blog.post3.excerpt": "Learn how Microsoft Azure is transforming businesses with scalable cloud solutions.",
    "blog.post4.title": "Microsoft Copilot: The Future of AI-Powered Productivity",
    "blog.post4.excerpt": "Discover how Microsoft Copilot is revolutionizing the way we work with AI assistance.",
    "blog.post5.title": "Getting Started with Microsoft Teams Premium",
    "blog.post5.excerpt": "A beginner's guide to maximizing collaboration with Microsoft Teams Premium features.",
    "blog.post6.title": "Cybersecurity Best Practices for Microsoft 365",
    "blog.post6.excerpt": "Protect your organization with these essential security tips for Microsoft 365.",
    
    // Footer
    "footer.description": "Your trusted source for genuine Microsoft software. Instant delivery, 24/7 support, and competitive prices.",
    "footer.quickLinks": "Quick Links",
    "footer.products": "Products",
    "footer.whyChooseUs": "Why Choose Us",
    "footer.contactUs": "Contact Us",
    "footer.termsOfService": "Terms of Service",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.allRightsReserved": "All rights reserved.",
  },
  es: {
    // Header
    "header.blog": "Blog",
    "header.helpCenter": "Centro de Ayuda",
    "header.partner": "Partner de Microsoft",
    "header.products": "Productos",
    "header.whyChooseUs": "Por Qué Elegirnos",
    "header.contact": "Contacto",
    "header.shopNow": "Comprar Ahora",
    
    // Hero
    "hero.badge": "Partner Autorizado de Microsoft",
    "hero.genuine": "Licencias 100% Originales",
    "hero.title1": "Tienda Premium de",
    "hero.title2": "Software Microsoft",
    "hero.description": "Obtén software genuino de Microsoft con entrega digital instantánea. Confianza de miles de empresas en todo el mundo con soporte 24/7.",
    "hero.browseProducts": "Ver Productos",
    "hero.whyChooseUs": "Por Qué Elegirnos",
    "hero.genuineLicense": "Licencia Original",
    "hero.authentic": "100% Auténtico",
    "hero.instantDelivery": "Entrega Instantánea",
    "hero.digitalDownload": "Descarga Digital",
    "hero.securePayment": "Pago Seguro",
    "hero.sslProtected": "Protegido con SSL",
    "hero.support": "Soporte 24/7",
    "hero.expertHelp": "Ayuda Experta",
    
    // Products
    "products.badge": "Nuestros Productos",
    "products.title": "Colección de Software Microsoft",
    "products.description": "Licencias genuinas con entrega digital instantánea. Haz clic en cualquier producto para ver detalles o comprar ahora.",
    "products.buyNow": "Comprar",
    "products.quickView": "Vista Rápida",
    
    // Products Page
    "products.page.badge": "Catálogo de Productos",
    "products.page.title": "Todos los Productos Microsoft",
    "products.page.description": "Explora nuestra colección completa de licencias de software Microsoft genuino con entrega digital instantánea.",
    "products.search.placeholder": "Buscar productos...",
    "products.filter.category": "Categoría",
    "products.filter.all": "Todas las Categorías",
    "products.filter.productivity": "Productividad",
    "products.filter.os": "Sistemas Operativos",
    "products.filter.developer": "Herramientas de Desarrollo",
    "products.filter.cloud": "Servicios en la Nube",
    "products.filter.business": "Soluciones Empresariales",
    "products.sort.label": "Ordenar por",
    "products.sort.default": "Destacados",
    "products.sort.priceAsc": "Precio: Menor a Mayor",
    "products.sort.priceDesc": "Precio: Mayor a Menor",
    "products.sort.name": "Nombre A-Z",
    "products.results.showing": "Mostrando",
    "products.results.products": "productos",
    "products.noResults": "No se encontraron productos que coincidan con tus criterios.",
    "products.clearFilters": "Limpiar Filtros",
    
    // Product titles and descriptions
    "product.office365.title": "Microsoft Office 365",
    "product.office365.description": "Suite de productividad completa con Word, Excel, PowerPoint y más para profesionales modernos.",
    "product.windows11.title": "Windows 11 Pro",
    "product.windows11.description": "El sistema operativo Windows más avanzado con seguridad y rendimiento mejorados.",
    "product.visualstudio.title": "Visual Studio 2024",
    "product.visualstudio.description": "IDE profesional para desarrolladores con herramientas avanzadas de depuración y colaboración.",
    "product.azure.title": "Microsoft Azure",
    "product.azure.description": "Plataforma de computación en la nube empresarial para crear, implementar y administrar aplicaciones.",
    "product.teams.title": "Microsoft Teams Premium",
    "product.teams.description": "Plataforma avanzada de colaboración y comunicación para lugares de trabajo modernos.",
    "product.powerbi.title": "Power BI Pro",
    "product.powerbi.description": "Solución de análisis empresarial para visualización de datos e información inteligente.",
    "product.dynamics.title": "Dynamics 365",
    "product.dynamics.description": "Solución de planificación de recursos empresariales y CRM para la transformación empresarial.",
    "product.sqlserver.title": "SQL Server 2024",
    "product.sqlserver.description": "Plataforma de base de datos líder en la industria con capacidades de análisis impulsadas por IA.",
    "product.sharepoint.title": "SharePoint 2024",
    "product.sharepoint.description": "Plataforma colaborativa de gestión de contenido y uso compartido de documentos.",
    "product.copilot.title": "Microsoft Copilot",
    "product.copilot.description": "Asistente impulsado por IA que revoluciona la productividad en las aplicaciones de Microsoft 365.",
    
    // Badges
    "badge.bestSeller": "Más Vendido",
    "badge.popular": "Popular",
    "badge.enterprise": "Empresarial",
    "badge.new": "Nuevo",
    
    // Features
    "features.badge": "Por Qué Elegirnos",
    "features.title1": "La Elección Confiable para",
    "features.title2": "Software Microsoft",
    "features.description": "Como Partner Certificado de Microsoft, proporcionamos software genuino con servicio y soporte inigualables.",
    "features.genuine.title": "Licencias 100% Originales",
    "features.genuine.description": "Todos nuestros productos provienen directamente de Microsoft. Cada licencia es auténtica y tiene soporte completo.",
    "features.instant.title": "Entrega Digital Instantánea",
    "features.instant.description": "Obtén tu clave de licencia en segundos después de la compra. Sin esperas, comienza a usar tu software inmediatamente.",
    "features.support.title": "Soporte al Cliente 24/7",
    "features.support.description": "Nuestro equipo experto está disponible las 24 horas para ayudar con la instalación, activación y cualquier pregunta.",
    "features.trustedPartners": "Partners de Seguridad y Pago Confiables",
    
    // Testimonials
    "testimonials.badge": "Opiniones de Clientes",
    "testimonials.title1": "Lo Que Dicen Nuestros",
    "testimonials.title2": "Clientes Sobre Nosotros",
    "testimonials.description": "Únete a miles de clientes satisfechos que confían en nosotros para sus necesidades de software Microsoft.",
    "testimonials.1.name": "Michael Chen",
    "testimonials.1.role": "Director de TI",
    "testimonials.1.company": "TechFlow Solutions",
    "testimonials.1.content": "¡Servicio excepcional! La entrega instantánea nos ahorró horas durante un plazo crítico del proyecto. Las claves de licencia funcionaron perfectamente y el equipo de soporte fue increíblemente útil.",
    "testimonials.2.name": "Sarah Rodriguez",
    "testimonials.2.role": "Gerente de Operaciones",
    "testimonials.2.company": "Global Ventures Inc.",
    "testimonials.2.content": "Hemos estado comprando todas nuestras licencias de Microsoft aquí durante 3 años. Los precios son competitivos, la entrega es instantánea y nunca hemos tenido ningún problema con la autenticidad.",
    "testimonials.3.name": "David Thompson",
    "testimonials.3.role": "CEO",
    "testimonials.3.company": "StartUp Labs",
    "testimonials.3.content": "Como startup, necesitábamos software asequible pero genuino. Esta tienda entregó exactamente eso. Servicio profesional, productos genuinos y excelente atención al cliente.",
    "testimonials.stats.customers": "Clientes Felices",
    "testimonials.stats.satisfaction": "Tasa de Satisfacción",
    "testimonials.stats.rating": "Calificación Promedio",
    "testimonials.stats.support": "Soporte Experto",
    
    // Blog
    "blog.badge": "Nuestro Blog",
    "blog.title": "Últimas Noticias y Consejos",
    "blog.description": "Mantente actualizado con las últimas noticias, consejos y mejores prácticas de software Microsoft.",
    "blog.featured": "Destacado",
    "blog.readMore": "Leer Más",
    "blog.readTime": "lectura",
    "blog.category.productivity": "Productividad",
    "blog.category.os": "Sistemas Operativos",
    "blog.category.cloud": "Nube",
    "blog.category.ai": "IA e Innovación",
    "blog.category.security": "Seguridad",
    "blog.post1.title": "10 Consejos Esenciales de Office 365 para Aumentar tu Productividad",
    "blog.post1.excerpt": "Descubre funciones poderosas en Office 365 que pueden ayudarte a trabajar de manera más inteligente y ahorrar horas cada semana.",
    "blog.post2.title": "Novedades de Windows 11: Una Guía Completa",
    "blog.post2.excerpt": "Explora las últimas características, mejoras y consejos para aprovechar al máximo Windows 11.",
    "blog.post3.title": "Por Qué las Empresas Están Migrando a Azure Cloud",
    "blog.post3.excerpt": "Aprende cómo Microsoft Azure está transformando las empresas con soluciones escalables en la nube.",
    "blog.post4.title": "Microsoft Copilot: El Futuro de la Productividad con IA",
    "blog.post4.excerpt": "Descubre cómo Microsoft Copilot está revolucionando la forma en que trabajamos con asistencia de IA.",
    "blog.post5.title": "Comenzando con Microsoft Teams Premium",
    "blog.post5.excerpt": "Una guía para principiantes para maximizar la colaboración con las funciones de Microsoft Teams Premium.",
    "blog.post6.title": "Mejores Prácticas de Ciberseguridad para Microsoft 365",
    "blog.post6.excerpt": "Protege tu organización con estos consejos esenciales de seguridad para Microsoft 365.",
    
    // Footer
    "footer.description": "Tu fuente confiable de software genuino de Microsoft. Entrega instantánea, soporte 24/7 y precios competitivos.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.products": "Productos",
    "footer.whyChooseUs": "Por Qué Elegirnos",
    "footer.contactUs": "Contáctanos",
    "footer.termsOfService": "Términos de Servicio",
    "footer.privacyPolicy": "Política de Privacidad",
    "footer.allRightsReserved": "Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  lang: Language;
}

export const LanguageProvider = ({ children, lang }: LanguageProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const language: Language = lang === "es" ? "es" : "en";

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const localizedPath = (basePath: string): string => {
    return routeMappings[language][basePath] || `/${language}${basePath}`;
  };

  const setLanguage = (newLang: Language) => {
    // Find current base path from the URL
    const currentPath = location.pathname;
    const routeInfo = reverseRouteMappings[currentPath];
    
    if (routeInfo) {
      // Navigate to the same page in the new language
      const newPath = routeMappings[newLang][routeInfo.basePath];
      navigate(newPath);
    } else {
      // Default to home page in new language
      navigate(routeMappings[newLang]["/"]);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
