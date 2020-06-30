import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Projects from "../components/projects"
// import Toolbox from "../components/toolbox"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "construction.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout canSeeHeader={true} usesLinksHeader={true}>
      <SEO />
      <div className="information-container pt-20 relative pl-4 md:pl-8 lg:pl-12 xl:pl-16 h-screen">
        {/* <Projects />
        <Toolbox /> */}
        <div className="construction-notice-container mx-auto my-12">
          <h1 className="constrution-header text-center font-bold">
            Coming Soon
          </h1>
          <p className="construction-notice text-center text-sm px-8">
            This page is under construction. Follow me to be notified when it's
            ready!
          </p>
        </div>
        <div className="constuction-image-container relative pb-1/1 md:pb-1/2 md:mx-1/4 lg:pb-1/3 lg:mx-1/3">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            className="absolute-important h-full w-full"
            alt="Two odly shaped cartoon construction workers digging"
          />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default ProjectsPage
