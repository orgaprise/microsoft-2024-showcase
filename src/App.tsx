import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import LanguageLayout from "./layouts/LanguageLayout";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CurrencyProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Redirect root to default language */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English routes */}
            <Route path="/en" element={<LanguageLayout />}>
              <Route index element={<Index />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products" element={<Index />} />
              <Route path="blog" element={<Index />} />
              <Route path="help" element={<Index />} />
            </Route>
            
            {/* Spanish routes */}
            <Route path="/es" element={<LanguageLayout />}>
              <Route index element={<Index />} />
              <Route path="contacto" element={<Contact />} />
              <Route path="productos" element={<Index />} />
              <Route path="blog" element={<Index />} />
              <Route path="ayuda" element={<Index />} />
            </Route>
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CurrencyProvider>
  </QueryClientProvider>
);

export default App;
