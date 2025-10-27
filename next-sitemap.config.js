/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.abahlengi.co.za",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/thank-you"],
};

module.exports = config;
