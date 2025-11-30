import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, CheckCircle, Building } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10K+", label: t("about.stats.customers") },
    { value: "99.9%", label: t("about.stats.satisfaction") },
    { value: "24/7", label: t("about.stats.support") },
    { value: "5+", label: t("about.stats.years") },
  ];

  const values = [
    {
      icon: Shield,
      title: t("about.values.trust.title"),
      description: t("about.values.trust.description"),
    },
    {
      icon: Award,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Users,
      title: t("about.values.customer.title"),
      description: t("about.values.customer.description"),
    },
    {
      icon: Clock,
      title: t("about.values.speed.title"),
      description: t("about.values.speed.description"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                {t("about.badge")}
              </span>
              <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
                {t("about.title")}
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                {t("about.description")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  {t("about.mission.title")}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t("about.mission.description1")}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t("about.mission.description2")}
                </p>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl">
                  <Building className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground">{t("about.partner.title")}</div>
                    <div className="text-sm text-muted-foreground">{t("about.partner.description")}</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {[
                  t("about.benefits.1"),
                  t("about.benefits.2"),
                  t("about.benefits.3"),
                  t("about.benefits.4"),
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("about.values.title")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("about.values.description")}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background rounded-2xl p-6 shadow-sm border border-border/50"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default About;
