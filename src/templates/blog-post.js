import React from "react"
import { Link } from "gatsby"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
import Subscribe from "../components/blog/subscribe/subscribe"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import Img from "gatsby-image"
import Footer from "../components/general/footer"

export default function Template({ data, location }) {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  // converts human-readable date into machine-readable date to be used in "Published..."
  const ISOdateString = new Date(post.frontmatter.date).toISOString()

  return (
    <Layout location={"blog"} usesInPostHeader={true}>
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
        <section className="blog mx-auto px-4 sm:w-10/12 md:w-2/3 lg:w-1/2">
          <div className="header-container pt-6"></div>
          <Link to="/blog" className="text-xl p-2 pl-0">
            <FontAwesomeIcon
              className="blog-back-arrow"
              icon={faLongArrowAltLeft}
            />
          </Link>
          <h1 className="text-4xl">{post.frontmatter.title}</h1>
          <div className="subheader-container sm:flex sm:flex-row sm:items-center">
            <div className="publish-date">
              Published{" "}
              <time datetime={ISOdateString}>{post.frontmatter.date}</time> by{" "}
              {post.frontmatter.author}
            </div>
            <div className="twitter-follow-button-container sm:mt-0 sm:mx-2">
              <a
                id="alwaysVisible"
                href="https://twitter.com/ReyTheDev?ref_src=twsrc%5Etfw"
                className="twitter-follow-button"
                data-show-screen-name="false"
                data-show-count="false"
              >
                Follow
              </a>
            </div>
          </div>
          <div className="h-full border-2 rounded-lg overflow-hidden">
            <Img
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
              alt={post.frontmatter.imageAlt}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
        <div className="twitter-share-button-wrapper fixed z-10 w-full bottom-0 p-3 sm:z-0 md:left-0 md:w-0 md:top-1/2 md:p-6">
          <div className="twitter-share-button-container text-center">
            <a
              id="alwaysVisible"
              className="custom-twitter-share-button"
              href={`https://twitter.com/share?text=${post.frontmatter.title} via @ReyTheDev&url=https://www.fromthemountain.co.za/${location.pathname}`}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        path
        title
        author
        date
        summary
        keywords
        imageAlt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1600, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
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
