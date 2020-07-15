import React, { useState } from "react"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
// import Projects from "../components/projects"
// import Toolbox from "../components/toolbox"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Websites from "../components/portfolio/projects/websites"
import ToggleSwitch from "../components/general/toggleSwitch"
import Apps from "../components/portfolio/projects/apps"
import Footer from "../components/general/footer"

const ProjectsPage = () => {
  const [toggled, setToggled] = useState(false)

  const toggleSwitchHandler = () => {
    setToggled(!toggled)
  }

  const displayedProjects = toggled ? <Websites /> : <Apps />

  return (
    <Layout canSeeHeader={true} usesLinksHeader={true}>
      <SEO />
      {/* <Projects />
        <Toolbox /> */}
      <section class="px-4 md:px-8 lg:px-12 xl:px-16 mt-10">
        <ToggleSwitch toggleProjects={toggleSwitchHandler} />
        <div className="projects-container lg:flex lg:flex-row lg:flex-wrap">
          {displayedProjects}
        </div>
      </section>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage

// const data = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "construction.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)

//PAGE UNDER CONSTRUCTION VIEW
/* <div className="construction-notice-container mx-auto my-12">
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
            alt="Two oddly shaped cartoon construction workers digging"
          />
        </div> */
