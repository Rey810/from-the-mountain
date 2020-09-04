const path = require("path")
// registers my posts so that I can use those urls
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/blog-post.js")
  const caseStudyTemplate = path.resolve("src/templates/caseStudy.js")

  // POSTS GRAPHQL QUERY
  const posts = await graphql(`
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
    } else {
      return res.data
    }
  })

  // creates post pagges from data contained in 'posts'
  posts.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate,
    })
  })

  // CASE STUDY GRAPHQL QUERY
  const caseStudies = await graphql(`
    {
      allProjectDataJson {
        nodes {
          projectType
          linkName
          siteURL
          codeURL
          title
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    } else {
      return res.data
    }
  })

  // creates post pagges from data contained in 'posts'
  caseStudies.allProjectDataJson.nodes.forEach(obj => {
    createPage({
      path: obj.linkName,
      component: caseStudyTemplate,
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
