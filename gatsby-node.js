const path = require("path")
// registers my posts so that I can use those urls
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}

// here types are created the Tag so you can get them via GraphQL later:
exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Tag implements Node @dontInfer {
      id: ID!
      name: String!
    }
  `)
}
