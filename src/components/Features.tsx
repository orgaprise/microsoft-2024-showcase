import { motion } from "framer-motion";
import { Shield, Zap, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Genuine Licenses",
    description: "All our products are sourced directly from Microsoft. Every license is authentic and fully supported.",
  },
  {
    icon: Zap,
    title: "Instant Digital Delivery",
    description: "Get your license key within seconds after purchase. No waiting, start using your software immediately.",
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Our expert team is available around the clock to help with installation, activation, and any questions.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            The Trusted Choice for
            <span className="text-gradient"> Microsoft Software</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            As a certified Microsoft Partner, we provide genuine software with unmatched service and support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {feature.description}
              </p>
              
              {/* Decorative gradient */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Trust Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-border/50 bg-card p-8"
        >
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
              Trusted Security & Payment Partners
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <img 
                src="https://img.shields.io/badge/SSL-Secured-green?style=for-the-badge&logo=letsencrypt&logoColor=white" 
                alt="SSL Secured"
                className="h-8"
              />
              <img 
                src="https://img.shields.io/badge/Microsoft-Partner-0078D4?style=for-the-badge&logo=microsoft&logoColor=white" 
                alt="Microsoft Partner"
                className="h-8"
              />
              <img 
                src="https://img.shields.io/badge/PayPal-Accepted-00457C?style=for-the-badge&logo=paypal&logoColor=white" 
                alt="PayPal Accepted"
                className="h-8"
              />
              <img 
                src="https://img.shields.io/badge/Visa-Accepted-1A1F71?style=for-the-badge&logo=visa&logoColor=white" 
                alt="Visa Accepted"
                className="h-8"
              />
              <img 
                src="https://img.shields.io/badge/Mastercard-Accepted-EB001B?style=for-the-badge&logo=mastercard&logoColor=white" 
                alt="Mastercard Accepted"
                className="h-8"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;