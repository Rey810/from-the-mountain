import React, { useState } from "react"
import Layout from "../../components/containers/layout"
import SEO from "../../components/general/seo"
// import Projects from "../components/projects"
// import Toolbox from "../components/toolbox"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import Websites from "../../components/portfolio/projects/websites"
import ToggleSwitch from "../../components/general/toggleSwitch/toggleSwitch"
import Apps from "../../components/portfolio/projects/apps"
import Footer from "../../components/general/footer"
import ContactForm from "../../components/general/ContactForm/ContactForm"

const Projects = props => {
  const [showSites, setShowSites] = useState(false)

  console.log({ props })
  const toggleSwitchHandler = () => {
    setShowSites(!showSites)
  }

  const displayedProjects = showSites ? (
    <Websites location={props.location} />
  ) : (
    <Apps location={props.location} />
  )

  return (
    <Layout canSeeHeader usesPortfolioHeader>
      <SEO title="Projects" />
      {/* <Projects />
        <Toolbox /> */}
      <div className="sticky-footer-wrapper">
        <section class="px-4 mt-10 mb-20 md:px-8 lg:px-12 xl:px-16">
              <h2
        className="font-black
leading-none
text-center
text-4xl md:text-6xl
pt-12 md:mt-0"
      >
        Projects
      </h2>
          <ToggleSwitch
            toggleProjects={toggleSwitchHandler}
            showSites={showSites}
          />
          <div className="projects-container mx-auto sm:w-72 lg:w-76">
            {displayedProjects}
          </div>
        </section>
        <div className="get-in-touch-container flex flex-col items-center py-4 -mb-1 sm:py-8 lg:py-24">
            <h3 className="font-semibold text-lg mt-4 md:mt-0 md:text-xl lg:text-2xl xl:text-3xl">
              Want to Work with Me?
            </h3>
            <ContactForm />
          </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Projects

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
