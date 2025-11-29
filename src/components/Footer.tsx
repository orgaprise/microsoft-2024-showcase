import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-card">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <svg
                  viewBox="0 0 23 23"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect width="10" height="10" fill="hsl(var(--primary-foreground))" />
                  <rect x="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
                  <rect y="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
                  <rect x="12" y="12" width="10" height="10" fill="hsl(var(--primary-foreground))" />
                </svg>
              </div>
              <div>
                <span className="font-display text-lg font-bold text-foreground">
                  SoftwareStore
                </span>
                <p className="text-xs text-muted-foreground">Microsoft Certified Partner</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Your trusted source for genuine Microsoft software. Instant delivery, 24/7 support, and competitive prices.
            </p>
            
            {/* Partner Badge */}
            <div className="mt-4">
              <img 
                src="https://img.shields.io/badge/Microsoft-Certified_Partner-0078D4?style=flat&logo=microsoft&logoColor=white" 
                alt="Microsoft Certified Partner"
                className="h-6"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {["Products", "Why Choose Us", "Contact Us", "Terms of Service", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-foreground">Products</h4>
            <ul className="mt-4 space-y-3">
              {["Microsoft Office 365", "Windows 11 Pro", "Visual Studio", "Microsoft Azure", "Power BI Pro"].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground">Contact Us</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@example.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  sales@example.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>
                    123 Business Street<br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { name: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { name: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} SoftwareStore. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <img 
                src="https://img.shields.io/badge/SSL-Secured-green?style=flat&logo=letsencrypt" 
                alt="SSL Secured"
                className="h-5"
              />
              <img 
                src="https://img.shields.io/badge/PayPal-Accepted-00457C?style=flat&logo=paypal&logoColor=white" 
                alt="PayPal"
                className="h-5"
              />
              <img 
                src="https://img.shields.io/badge/Visa-Accepted-1A1F71?style=flat&logo=visa&logoColor=white" 
                alt="Visa"
                className="h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;