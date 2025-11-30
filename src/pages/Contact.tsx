import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {t("footer.contactUs")}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {language === "en" 
                ? "Get in touch with our team for any questions or support."
                : "Ponte en contacto con nuestro equipo para cualquier pregunta o soporte."}
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <Phone className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {language === "en" ? "Phone" : "Teléfono"}
              </h3>
              <a href="tel:+1234567890" className="mt-2 text-muted-foreground hover:text-primary">
                +1 (234) 567-890
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <Mail className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {language === "en" ? "Email" : "Correo"}
              </h3>
              <a href="mailto:sales@example.com" className="mt-2 text-muted-foreground hover:text-primary">
                sales@example.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {language === "en" ? "Address" : "Dirección"}
              </h3>
              <p className="mt-2 text-muted-foreground">
                123 Business Street<br />
                New York, NY 10001
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
