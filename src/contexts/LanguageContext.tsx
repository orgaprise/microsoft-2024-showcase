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
    "/help": "/en/help",
  },
  es: {
    "/": "/es",
    "/contact": "/es/contacto",
    "/products": "/es/productos",
    "/blog": "/es/blog",
    "/help": "/es/ayuda",
  },
};

// Reverse mapping to find base path from localized path
export const reverseRouteMappings: Record<string, { lang: Language; basePath: string }> = {
  "/en": { lang: "en", basePath: "/" },
  "/en/contact": { lang: "en", basePath: "/contact" },
  "/en/products": { lang: "en", basePath: "/products" },
  "/en/blog": { lang: "en", basePath: "/blog" },
  "/en/help": { lang: "en", basePath: "/help" },
  "/es": { lang: "es", basePath: "/" },
  "/es/contacto": { lang: "es", basePath: "/contact" },
  "/es/productos": { lang: "es", basePath: "/products" },
  "/es/blog": { lang: "es", basePath: "/blog" },
  "/es/ayuda": { lang: "es", basePath: "/help" },
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
