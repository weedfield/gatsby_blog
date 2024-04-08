/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */


module.exports = {
  siteMetadata: {
    title: "Sample Blog",
    description: "Gatsbyで作成したサンプルサイト。",
    author: "Yuki"
  },
  // ローダー関連はこのファイルで定義する。gatsbyはプラグインが多いから、大体すぐ導入できそう。
  plugins: [`gatsby-plugin-sass`],
}
