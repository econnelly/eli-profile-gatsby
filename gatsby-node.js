/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

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
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
      `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    // @ts-ignore
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

// @ts-ignore
exports.onCreateNode = ({ node, actions, getNode }) => {
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

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}
