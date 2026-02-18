// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://micasahome.my',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: [], // Add paths to exclude if needed
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};