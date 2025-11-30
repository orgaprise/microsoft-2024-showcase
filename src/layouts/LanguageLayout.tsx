import { Outlet, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

const LanguageLayout = () => {
  const location = useLocation();
  // Extract language from the first segment of the path
  const lang = location.pathname.split('/')[1] as "en" | "es";
  
  return (
    <LanguageProvider lang={lang}>
      <Outlet />
    </LanguageProvider>
  );
};

export default LanguageLayout;
