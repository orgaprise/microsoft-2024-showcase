import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonials.1.name",
      roleKey: "testimonials.1.role",
      companyKey: "testimonials.1.company",
      contentKey: "testimonials.1.content",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      nameKey: "testimonials.2.name",
      roleKey: "testimonials.2.role",
      companyKey: "testimonials.2.company",
      contentKey: "testimonials.2.content",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    },
    {
      nameKey: "testimonials.3.name",
      roleKey: "testimonials.3.role",
      companyKey: "testimonials.3.company",
      contentKey: "testimonials.3.content",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
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
            {t("testimonials.badge")}
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t("testimonials.title1")}
            <span className="text-gradient"> {t("testimonials.title2")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            {t("testimonials.description")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute -right-4 -top-4 opacity-10">
                <Quote className="h-24 w-24 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed relative z-10">
                "{t(testimonial.contentKey)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.avatar}
                  alt={t(testimonial.nameKey)}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {t(testimonial.nameKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(testimonial.roleKey)}, {t(testimonial.companyKey)}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -right-20 -bottom-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50,000+", labelKey: "testimonials.stats.customers" },
            { value: "98%", labelKey: "testimonials.stats.satisfaction" },
            { value: "4.9/5", labelKey: "testimonials.stats.rating" },
            { value: "24/7", labelKey: "testimonials.stats.support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {t(stat.labelKey)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
