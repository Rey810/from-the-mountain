module.exports = {
  siteMetadata: {
    title: `Web Designer & Developer`,
    description: `From The Mountain designs & develops fast, excellent websites and apps that work. Affordable and professional design, development, e-commerce & SEO.`,
    author: `Rey van den Berg`,
    twitterAuthor: `@ReyTheDev`,
    keywords: `freelance, portfolio, developer, freelancer, web developer, coder, programmer, javascript developer, react developer, rails developer, business, web consultant, website builder, need website`,
    googleSiteVerification: "zUF4k-2XdAVgIl5-MbijxBudeCAmYgB5Q7CCojbrAOg",
    siteUrl: "https://www.fromthemountain.co.za",
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.fromthemountain.co.za`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // ...
          "gatsby-remark-a11y-emoji",
          `gatsby-remark-reading-time`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `From The Mountain`,
        short_name: `FTM`,
        start_url: `/`,
        background_color: `hsla(0, 0%, 12%)`,
        theme_color: `#ec4e20`,
        display: `standalone`, // This path is relative to the root of the site.
        icon: `src/images/avatar.png`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "src/data" },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "src/assets/illustrations" },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: { typeName: "Tag", path: "src/data/convertkit-tags" },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/projects`,
      },
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": [`Referrer-Policy: origin-when-cross-origin`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`, `/projects/*`],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "server",
        analyzerPort: "8888",
        defaultSizes: "gzip",
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "www.fromthemountain.co.za", 
        identity: {
          github: "rey810",
          twitter: "reythedev", 
        },
        mentions: true,
        pingbacks: true,
        domain: "www.fromthemountain.co.za",
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
  ],
}
