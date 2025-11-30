const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = process.env.SITE_URL || 'https://prisekeys.com';

// Define all routes with their metadata
const routes = [
  // English routes
  { path: '/en', changefreq: 'daily', priority: 1.0 },
  { path: '/en/contact', changefreq: 'monthly', priority: 0.7 },
  { path: '/en/products', changefreq: 'weekly', priority: 0.9 },
  { path: '/en/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/en/help', changefreq: 'monthly', priority: 0.6 },
  
  // Spanish routes
  { path: '/es', changefreq: 'daily', priority: 1.0 },
  { path: '/es/contacto', changefreq: 'monthly', priority: 0.7 },
  { path: '/es/productos', changefreq: 'weekly', priority: 0.9 },
  { path: '/es/blog', changefreq: 'weekly', priority: 0.8 },
  { path: '/es/ayuda', changefreq: 'monthly', priority: 0.6 },
];

// Generate sitemap XML
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Group routes by base path for alternate language links
  const routePairs = {
    '': { en: '/en', es: '/es' },
    'contact': { en: '/en/contact', es: '/es/contacto' },
    'products': { en: '/en/products', es: '/es/productos' },
    'blog': { en: '/en/blog', es: '/es/blog' },
    'help': { en: '/en/help', es: '/es/ayuda' },
  };

  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    
    // Add alternate language links (hreflang)
    const lang = route.path.startsWith('/en') ? 'en' : 'es';
    const basePath = route.path.replace(/^\/(en|es)\/?/, '').split('/')[0] || '';
    const pair = routePairs[basePath];
    
    if (pair) {
      xml += `    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${pair.en}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="es" href="${SITE_URL}${pair.es}" />\n`;
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${pair.en}" />\n`;
    }
    
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

// Generate robots.txt
function generateRobots() {
  return `# robots.txt for ${SITE_URL}
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${SITE_URL}/sitemap.xml

# Disallow admin and API routes (if any)
Disallow: /api/
`;
}

// Main execution
const distPath = path.join(__dirname, '..', 'dist');

// Ensure dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

// Write sitemap.xml
const sitemapPath = path.join(distPath, 'sitemap.xml');
fs.writeFileSync(sitemapPath, generateSitemap());
console.log(`✅ Generated sitemap.xml at ${sitemapPath}`);

// Write robots.txt (update existing or create new)
const robotsPath = path.join(distPath, 'robots.txt');
fs.writeFileSync(robotsPath, generateRobots());
console.log(`✅ Generated robots.txt at ${robotsPath}`);

// Log summary
console.log(`\n📊 Sitemap Summary:`);
console.log(`   - Total URLs: ${routes.length}`);
console.log(`   - Languages: English (en), Spanish (es)`);
console.log(`   - Site URL: ${SITE_URL}`);
console.log(`\n💡 Remember to update SITE_URL in scripts/generate-sitemap.js with your actual domain!`);
