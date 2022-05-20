import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
import BlogCard from "../components/blog/blogCard"
// import Subscribe from "../components/blog/subscribe/subscribe"
// import Footer from "../components/general/footer"

const BlogPage = ({ data }) => (
  <Layout canSeeHeader>
    <SEO
      title="Blog"
      description="A blog for Rey van den Berg's, From The Mountain, freelance web develpoment site. He writes about developer well-being and happiness, how to form better everyday work habits, and general mindfulness tips for busy people."
      keywords="blog, developer happiness, developer well-being, coding blog, programming blog, developer zen habits, Rey van den Berg's blog, From The Mountain blog, thoughts on developer well-being, thoughts on developer mental health, how to become a better developer, Cape Town developer blog, Cape Town freelance developer"
    />
    <div className="sticky-footer-wrapper">
      <div className="blog-content">
        <section class="px-4 mt-10">
          <h1 className="pt-12 text-5xl font-bold text-center">Latest Posts</h1>
          <div class="py-12">
            <div class="flex flex-wrap lg:justify-center">
              {data.allMarkdownRemark.edges.map(post => (
                <BlogCard
                  title={post.node.frontmatter.title}
                  cardTitle={post.node.frontmatter.cardTitle}
                  image={
                    post.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                  imageAlt={post.node.frontmatter.imageAlt}
                  category={post.node.frontmatter.category}
                  summary={post.node.frontmatter.summary}
                  path={post.node.frontmatter.path}
                  readingTime={post.node.fields.readingTime.text}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            cardTitle
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
