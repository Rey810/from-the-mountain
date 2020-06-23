import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

export default function Template({ data, location }) {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.summary || post.excerpt}
        image={image}
        imageAltDescr={post.frontmatter.imageAlt}
        type={"article"}
        pathname={location.pathname}
        keywords={post.frontmatter.keywords}
      />
      <div className="blog-container">
        {/* <Link to="/blog">Go Back</Link>
        <hr /> */}
        <section className="blog pt-20 mx-auto px-4 sm:w-3/4 md:w-2/3 lg:w-1/2">
          <h1>{post.frontmatter.title}</h1>
          {/* <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        path
        title
        summary
        keywords
        imageAlt
        featuredImage {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
