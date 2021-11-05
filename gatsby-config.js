module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Uloax",
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckvcspzv91b3701y0djc6a31b/master"
      }
    }

],
};
