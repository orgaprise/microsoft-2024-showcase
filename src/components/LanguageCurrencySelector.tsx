import { useLanguage, Language } from "@/contexts/LanguageContext";
import { useCurrency, Currency } from "@/contexts/CurrencyContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, DollarSign } from "lucide-react";

const languages: { value: Language; label: string; flag: string }[] = [
  { value: "en", label: "EN", flag: "🇺🇸" },
  { value: "es", label: "ES", flag: "🇪🇸" },
];

const currencies: { value: Currency; label: string; symbol: string }[] = [
  { value: "USD", label: "USD", symbol: "$" },
  { value: "EUR", label: "EUR", symbol: "€" },
  { value: "GBP", label: "GBP", symbol: "£" },
];

const LanguageCurrencySelector = () => {
  const { language, setLanguage } = useLanguage();
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="flex items-center gap-2">
      {/* Language Selector */}
      <Select value={language} onValueChange={(value: Language) => setLanguage(value)}>
        <SelectTrigger className="h-7 w-[70px] border-0 bg-transparent text-xs text-primary-foreground hover:bg-primary-foreground/10 focus:ring-0 focus:ring-offset-0 px-2">
          <Globe className="h-3 w-3 mr-1" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.value} value={lang.value}>
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="h-3 w-px bg-primary-foreground/30" />

      {/* Currency Selector */}
      <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
        <SelectTrigger className="h-7 w-[75px] border-0 bg-transparent text-xs text-primary-foreground hover:bg-primary-foreground/10 focus:ring-0 focus:ring-offset-0 px-2">
          <DollarSign className="h-3 w-3 mr-1" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((curr) => (
            <SelectItem key={curr.value} value={curr.value}>
              <span className="flex items-center gap-2">
                <span>{curr.symbol}</span>
                <span>{curr.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageCurrencySelector;
