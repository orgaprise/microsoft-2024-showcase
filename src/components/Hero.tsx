import { motion } from "framer-motion";
import { Shield, Truck, CreditCard, Headphones } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Partner Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Authorized Microsoft Partner
            </span>
            <div className="h-4 w-px bg-primary/30" />
            <span className="text-sm text-muted-foreground">
              100% Genuine Licenses
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Premium Microsoft
            <span className="block text-gradient mt-2">Software Store</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Get genuine Microsoft software with instant digital delivery. 
            Trusted by thousands of businesses worldwide with 24/7 support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
            >
              Browse Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-8 py-4 font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
            >
              Why Choose Us
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6"
          >
            {[
              { icon: Shield, label: "Genuine License", desc: "100% Authentic" },
              { icon: Truck, label: "Instant Delivery", desc: "Digital Download" },
              { icon: CreditCard, label: "Secure Payment", desc: "SSL Protected" },
              { icon: Headphones, label: "24/7 Support", desc: "Expert Help" },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;