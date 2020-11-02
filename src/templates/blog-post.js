import React from "react"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
import Subscribe from "../components/blog/subscribe/subscribe"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import BackButton from "../components/general/BackButton/BackButton"
import Img from "gatsby-image"
import Footer from "../components/general/footer"
import Avatar from "../components/images/avatar"
// WEB MENTIONS
import WebMentions from "../components/webMentions/webMentions"

export default function Template(props) {
  const post = props.data.markdownRemark
  const webMentions = props.data.allWebMentionEntry
  // const siteTitle = data.site.siteMetadata.title
  const image = post.frontmatter.featuredImage
    ? post.frontmatter.featuredImage.childImageSharp.resize
    : null

  // uses a date that exists. If the post has been updated, that date will be used
  let date = post.frontmatter.lastUpdated || post.frontmatter.date
  let dateType = post.frontmatter.lastUpdated ? "Last Updated" : "Published"

  // converts human-readable date into machine-readable date to be used in "Published..."
  const ISOdateString = new Date(date).toISOString()

  console.log("props", props)

  return (
    <Layout location={"blog"} usesInPostHeader>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.summary || post.excerpt}
        image={image}
        imageAltDescr={post.frontmatter.imageAlt}
        type={"article"}
        pathname={props.location.pathname}
        keywords={post.frontmatter.keywords}
      />
      <div className="blog-container">
        <section className="blog mx-auto px-4 sm:w-10/12 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <BackButton to="/blog" theme="dark">
            Back to All Articles
          </BackButton>
          <div className="blog-header-container lg:-mx-12">
          <h1 className="blog-header">{post.frontmatter.title}</h1>
          <div className="subheader-container pt-4 pb-2 flex flex-row items-center">
            <div className="avatar-container flex justify-center h-10 lg:h-12 xl:h-16 mr-2">
              <div className="avater-image-container relative w-10 lg:w-12 xl:w-16">
                <Avatar />
              </div>
            </div>
            <div className="subheader-info flex flex-col uppercase text-xs sm:text-sm">
              <div>
                <span>{post.frontmatter.author}</span>
              </div>
              <div className="opacity-75 text-xs">
                <span className="absolute invisible">{dateType}</span>
                <time datetime={ISOdateString}>{date}</time>
              </div>
            </div>
          </div>
          <div className="twitter-follow-button-container pb-4 xl:pb-8">
            <a
              id="alwaysVisible"
              href="https://twitter.com/ReyTheDev?ref_src=twsrc%5Etfw"
              className="twitter-follow-button"
              data-show-screen-name="false"
              data-show-count="true"
              title="Follow Rey on Twitter"
            >
              Follow
            </a>
          </div>
          </div>
          <div className="h-full md:rounded-lg overflow-hidden -mx-4 md:-mx-40 md:border-2">
            <Img
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
              alt={post.frontmatter.imageAlt}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <WebMentions {...webMentions} postTitle={post.frontmatter.title} location={props.location}/>
        </section>
        <div className="share-buttons-wrapper fixed z-10 w-full bottom-0 p-3 flex justify-center sm:z-0 md:block md:left-0 md:w-0 md:top-1/3 md:p-6">
          <div className="twitter-share-button-container text-center mx-4 md:mx-0 md:mb-6">
            <a
              title="Share on Twitter"
              id="alwaysVisible"
              className="custom-twitter-share-button"
              href={`https://twitter.com/share?text=${post.frontmatter.title} via @ReyTheDev&url=https://www.fromthemountain.co.za/${props.location.pathname}`}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="facebook-share-button-container text-center mx-4 md:mx-0">
            <a
              title="Share on Facebook"
              id="alwaysVisible"
              className="custom-twitter-share-button"
              href={`https://www.facebook.com/sharer.php?u=https://www.fromthemountain.co.za/${props.location.pathname}`}
            >
              <FontAwesomeIcon icon={faFacebookF} />
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
  query BlogPostByPath($path: String!, $permalink: String) {
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
        lastUpdated
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
    allWebMentionEntry(filter: { wmTarget: { eq: $permalink } }) {
      edges {
        node {
          id
          author {
            name
            photo
            url
          }
          likeOf
          wmTarget
          wmSource
          wmProperty
          wmId
          content {
            text
          }
        }
      }
    }
  }
`
