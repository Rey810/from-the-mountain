import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import Subscribe from "../components/subscribe"

const BlogPage = ({ data }) => (
  <Layout canSeeHeader={true}>
    <SEO
      title="Blog Posts"
      description="A blog for Rey van den Berg's, From The Mountain, freelance web develpoment site. He writes about developer well-being and happiness, how to form better everyday work habits, and general mindfulness tips for busy people."
      keywords="blog, developer happiness, developer well-being, coding blog, programming blog, developer zen habits, Rey van den Berg's blog, From The Mountain blog, thoughts on developer well-being, thoughts on developer mental health, how to become a better developer, Cape Town developer blog, Cape Town freelance developer"
    />
    <section class="px-4 md:px-8 lg:px-12 xl:px-16 mt-10">
      <h1 className="pt-12">Latest Posts</h1>
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
          {data.allMarkdownRemark.edges.map(post => (
            <div className="blog-post-card p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Img
                  fluid={
                    post.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  alt={post.node.frontmatter.imageAlt}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium  mb-1">
                    {post.node.frontmatter.category}
                  </h2>
                  <h1 className="title-font text-lg font-medium  mb-3">
                    {post.node.frontmatter.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {post.node.frontmatter.summary}
                  </p>
                  <div className="flex justify-between items-center flex-wrap ">
                    <Link to={post.node.frontmatter.path}>
                      <a className="read-more-link inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>
                    <div className="card-icons-container">
                      <span className="inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm py-1 border-gray-300 italic">
                        {post.node.fields.readingTime.text}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Subscribe theme={"dark"} />
    <Footer />
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            category
            summary
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

export default BlogPage
