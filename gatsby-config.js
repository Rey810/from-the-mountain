module.exports = {
  siteMetadata: {
    title: `Home`,
    description: `Need a web developer? I'll build your idea of a perfect website. Come on in, let's have a chat about making that idea a reality.`,
    author: `Rey van den Berg`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`, // This path is relative to the root of the site.
        icon: `src/images/avatar.png`,
        icons: [
          {
            src: `/favicons/android-chrome-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
        ],
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
