import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Menu from "../components/menu"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPage = ({ data }) => (
  <Layout canSeeHeader={true}>
    <SEO title="Blog Posts" />
    <section class="px-4 md:px-8 lg:px-12 xl:px-16 mt-10">
      <h1 className="pt-12">Latest Posts</h1>
      <div class="container py-12">
        <div class="flex flex-wrap -m-4">
          {data.allMarkdownRemark.edges.map(post => (
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 rounded-lg overflow-hidden">
                <Img
                  fluid={
                    post.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
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
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
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
                      <span className=" mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span className=" inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
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
        }
      }
    }
  }
`

export default BlogPage
