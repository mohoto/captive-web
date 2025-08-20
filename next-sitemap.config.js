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
  },
} 