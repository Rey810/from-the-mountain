module.exports = {
  siteMetadata: {
    title: `From The Mountain`,
    description: `The official online destination for websites built by Rey van den Berg. This is also a place where he talks about his journey as a developer, traveller, and human.`,
    author: `@ReyTheDev`,
    keywords: `freelance, portfolio, developer, travel, freelance`,
    googleSiteVerification: "zUF4k-2XdAVgIl5-MbijxBudeCAmYgB5Q7CCojbrAOg",
    siteUrl: "https://www.fromthemountain.co.za",
    image: "laptop_patio.jpg",
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
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/avatar.jpg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-clicky`,
      options: {
        siteId: "101262924",
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-source-filesystem",
      options: { path: "src/data" },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: { typeName: "Tag", path: "src/data/convertkit-tags" },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "W6GPY",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
