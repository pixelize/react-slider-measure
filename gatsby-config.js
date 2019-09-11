
module.exports = {
  pathPrefix: "/react-slider-measure",
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/gatsby/pages`,
      },
    },
  ],
}
