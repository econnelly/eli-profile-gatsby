/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// @ts-ignore
exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: "jQuery", // important: 'Q' capitalized
    },
    resolve: {
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        path: require.resolve("path-browserify"),
      },
    },
  })
}

// @ts-ignore
exports.onCreateNode = ({ node, actions }) => {
  // destructures the needed action
  const { createNodeField } = actions
  //
  // checks the gatsby node type
  // in this case we are looking for the json content that exists and transformed by the gatsby-transformer-json plugin
  if (node.internal.type === "ProjectsJson") {
    // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
    createNodeField({
      node, // the current node
      name: `portfolioImage`, // defines a name for the new element being added.
      value: `../../images/portfolio/${node.image}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images/portfolio
    })
  }
  // if (node.internal.type === "OtherJson") {
  //   // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
  //   createNodeField({
  //     node, // the current node
  //     name: `otherImage`, // defines a name for the new element being added.
  //     value: `../images/${node.image.src}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
  //   })
  // }
}
