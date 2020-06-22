import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
// Font Awesome Icons
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCode, faCoffee, faBeer } from "@fortawesome/free-solid-svg-icons"

// Components of Landing Page
import Landing from "../components/landing"
import Personal from "../components/personal"
import Services from "../components/services"
import Promise from "../components/promise"
import Toolbox from "../components/toolbox"
// import Projects from "../components/projects"
import Contact from "../components/contact"
import Quotes from "../components/quotes"
import Benefits from "../components/benefits"
import FAQ from "../components/faq"
import { siteMetadata } from "../../gatsby-config"

// FONT AWESOME
// fab represenets all of the brand icons
library.add(fab, faCode, faCoffee, faBeer)
// fixes huge Font Awesome icon on load by inlining CSS
config.autoAddCss = false

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop_patio.jpg" }) {
        childImageSharp {
          resize(width: 1200) {
            src
            height
            width
          }
        }
      }
    }
  `)
  const image = data.placeholderImage.childImageSharp.resize
  return (
    <Layout>
      <SEO image={image} />
      <Landing />
      <div className="information-container relative px-4 md:px-8 lg:px-12 xl:px-16">
        <Personal />
        <Services />
        <Benefits />
        <Promise />
        <Toolbox />
        <FAQ />
        {/* <Projects /> */}
        <Contact />
        <Quotes />
      </div>
    </Layout>
  )
}

export default IndexPage
