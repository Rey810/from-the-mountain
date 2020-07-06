import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// Font Awesome Icons
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckCircle, faThumbsUp } from "@fortawesome/free-regular-svg-icons"
import {
  faCode,
  faShoppingCart,
  faAward,
  faChevronRight,
  faChevronDown,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

// Components of Landing Page
import Landing from "../components/landing"
import Personal from "../components/personal"
import Services from "../components/services"
import Promise from "../components/promise"
// import Toolbox from "../components/toolbox"
// import Projects from "../components/projects"
import Contact from "../components/contact"
import Quotes from "../components/quotes"
import Benefits from "../components/benefits"
import FAQ from "../components/faq"

// FONT AWESOME
// fab represenets all of the brand icons
library.add(
  fab,
  faCode,
  faCheckCircle,
  faThumbsUp,
  faShoppingCart,
  faAward,
  faChevronRight,
  faChevronDown,
  faChevronLeft
)
// fixes huge Font Awesome icon on load by inlining CSS
config.autoAddCss = false

const IndexPage = () => {
  return (
    <Layout usesLinksHeader={true}>
      <SEO />
      <Landing />
      <div className="information-container">
        <Personal />
        <Services />
        <Benefits />
        <Promise />
        <FAQ />
        <Contact />
        <Quotes />
      </div>
    </Layout>
  )
}

export default IndexPage
