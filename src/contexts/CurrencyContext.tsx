import { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "EUR" | "GBP";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (usdPrice: number) => string;
  convertPrice: (usdPrice: number) => number;
}

// Exchange rates relative to USD (approximate)
const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
};

const currencySymbols: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
  GBP: "£",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convertPrice = (usdPrice: number): number => {
    return usdPrice * exchangeRates[currency];
  };

  const formatPrice = (usdPrice: number): string => {
    const convertedPrice = convertPrice(usdPrice);
    const symbol = currencySymbols[currency];
    return `${symbol}${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
