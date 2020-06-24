import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"
import Subscribe from "../components/subscribe"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Template({ data, location }) {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null
  return (
    <Layout location={"blog"}>
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
        <section className="blog mx-auto px-4 sm:w-10/12 md:w-2/3 lg:w-1/2">
          <h1>{post.frontmatter.title}</h1>
          {/* <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4> */}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
        <div className="twitter-share-button-wrapper fixed w-full bottom-0 p-3 md:left-0 md:w-0 md:top-1/2 md:p-6">
          <div className="twitter-share-button-container text-center">
            <a
              className="custom-twitter-share-button"
              href="https://twitter.com/share?text=3%20Wellbeing%20Focused%20Ways%20to%20be%20a%20Better%20Developer via @ReyTheDev&url=https://www.fromthemountain.co.za/blog/3-wellbeing-focused-ways-to-be-a-better-developer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
        </div>
        <Subscribe />
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
