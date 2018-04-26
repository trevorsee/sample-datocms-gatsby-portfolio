require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `The Independent Group`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "The Independent Group",
      short_name: "IG",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "#3152e5",
      display: "minimal-ui",
      icon: "src/assets/favicon.png",
    },
  },
  `gatsby-plugin-offline`
  ],
}
