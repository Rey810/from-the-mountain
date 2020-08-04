import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
import BlogCard from "../components/blog/blogCard"
import Subscribe from "../components/blog/subscribe/subscribe"
import Footer from "../components/general/footer"

const BlogPage = ({ data }) => (
  <Layout canSeeHeader={true}>
    <SEO
      title="Blog"
      description="A blog for Rey van den Berg's, From The Mountain, freelance web develpoment site. He writes about developer well-being and happiness, how to form better everyday work habits, and general mindfulness tips for busy people."
      keywords="blog, developer happiness, developer well-being, coding blog, programming blog, developer zen habits, Rey van den Berg's blog, From The Mountain blog, thoughts on developer well-being, thoughts on developer mental health, how to become a better developer, Cape Town developer blog, Cape Town freelance developer"
    />
    <section class="px-4 md:px-8 lg:px-12 xl:px-16 mt-10">
      <h1 className="pt-12 text-5xl font-bold">Latest Posts</h1>
      <div class="container py-12">
        <div class="flex flex-wrap">
          {data.allMarkdownRemark.edges.map(post => (
            <BlogCard
              title={post.node.frontmatter.title}
              cardTitle={post.node.frontmatter.cardTitle}
              image={post.node.frontmatter.featuredImage.childImageSharp.fluid}
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
