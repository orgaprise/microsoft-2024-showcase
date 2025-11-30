import { Shield, Truck, CreditCard, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: Shield, labelKey: "hero.genuineLicense", descKey: "hero.authentic" },
    { icon: Truck, labelKey: "hero.instantDelivery", descKey: "hero.digitalDownload" },
    { icon: CreditCard, labelKey: "hero.securePayment", descKey: "hero.sslProtected" },
    { icon: Headphones, labelKey: "hero.support", descKey: "hero.expertHelp" },
  ];

  return (
    <section className="relative overflow-hidden bg-hero py-10 md:py-14">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Partner Badge */}
          <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-card px-5 py-2 shadow-sm animate-fade-in-up">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {t("hero.badge")}
            </span>
            <div className="h-4 w-px bg-primary/30" />
            <span className="text-sm text-muted-foreground">
              {t("hero.genuine")}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">{t("hero.title1")}</span>
            <span className="block text-gradient mt-2">{t("hero.title2")}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-lg font-medium text-primary md:text-xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            Official Windows & Office Keys
          </p>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>

          {/* Trust Badges */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {trustBadges.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-semibold text-foreground text-sm">{t(item.labelKey)}</p>
                <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
