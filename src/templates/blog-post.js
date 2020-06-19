import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div>
        {/* <Link to="/blog">Go Back</Link>
        <hr /> */}
        <section className="post-container pt-20 mx-auto px-4 md:w-2/3 lg:w-1/2">
          <h1 className="blog-header__main">{post.frontmatter.title}</h1>
          {/* <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4> */}
          <div
            className="blog py-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
