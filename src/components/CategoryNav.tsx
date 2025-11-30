import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Menu, 
  ChevronDown, 
  FileText, 
  Package, 
  Server, 
  Monitor, 
  Gift 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CategoryNav = () => {
  const { t, language } = useLanguage();

  const categories = [
    { 
      id: "microsoft-office", 
      label: "MICROSOFT OFFICE", 
      icon: FileText,
      href: `/${language}/products?category=productivity`
    },
    { 
      id: "office-products", 
      label: "OFFICE PRODUCTS", 
      icon: Package,
      href: `/${language}/products?category=productivity`
    },
    { 
      id: "windows-servers", 
      label: "WINDOWS SERVERS", 
      icon: Server,
      href: `/${language}/products?category=cloud`
    },
    { 
      id: "operating-system", 
      label: "OPERATING SYSTEM", 
      icon: Monitor,
      href: `/${language}/products?category=operating-system`
    },
    { 
      id: "bundles", 
      label: "BUNDLES", 
      icon: Gift,
      href: `/${language}/products?category=business`
    },
  ];

  return (
    <div className="border-b border-border/50 bg-secondary/30">
      <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Browse Categories Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-12 items-center gap-2 border-r border-border/50 pr-4 text-sm font-semibold text-foreground transition-colors hover:text-primary focus:outline-none">
            <Menu className="h-4 w-4" />
            <span className="hidden sm:inline">BROWSE CATEGORIES</span>
            <span className="sm:hidden">CATEGORIES</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-background border border-border shadow-lg z-50">
            {categories.map((category) => (
              <DropdownMenuItem key={category.id} asChild>
                <Link 
                  to={category.href}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category Links */}
        <nav className="flex items-center overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="flex h-12 items-center gap-2 whitespace-nowrap px-4 text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              <category.icon className="h-4 w-4 flex-shrink-0" />
              <span className="hidden lg:inline">{category.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategoryNav;
