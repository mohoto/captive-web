module.exports = {
  siteUrl: process.env.SITE_URL || 'https://captive-web.fr',
  generateRobotsTxt: true, 
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://captive-web.fr/sitemap.xml',
    ],
  },
  // Personnalisation par page
  transform: async (config, path) => {
    // Configuration spécifique par route
    const customConfig = {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }

    // Page d'accueil - Priorité maximale
    if (path === '/') {
      return {
        ...customConfig,
        priority: 1.0,
        changefreq: 'weekly',
      }
    }

    // Services principaux - Haute priorité
    if (['/site-vitrine', '/e-commerce', '/application-web'].includes(path)) {
      return {
        ...customConfig,
        priority: 0.9,
        changefreq: 'monthly',
      }
    }

    // Pages commerciales importantes
    if (['/tarifs', '/contact'].includes(path)) {
      return {
        ...customConfig,
        priority: 0.8,
        changefreq: 'monthly',
      }
    }

    // Blog et articles
    if (path.startsWith('/blog')) {
      return {
        ...customConfig,
        priority: path === '/blog' ? 0.6 : 0.5,
        changefreq: 'weekly',
      }
    }

    // Pages légales - Priorité très faible
    if (['/conditions-generales-vente', '/politique-confidentialite'].includes(path)) {
      return {
        ...customConfig,
        priority: 0.1,
        changefreq: 'yearly',
      }
    }

    // Configuration par défaut pour autres pages
    return customConfig
  },
} 