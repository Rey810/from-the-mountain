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
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-catch-links",
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
    `gatsby-transformer-sharp`,
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
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 50,
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
    // "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
    // {
    //   resolve: `gatsby-plugin-clicky`,
    //   options: {
    //     siteId: '101262924',
    //   },
    // },
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "src/data" },
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
    // {
    //   resolve: `gatsby-plugin-fullstory`,
    //   options: {
    //     fs_org: "W6GPY",
    //   },
    // },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`],
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
