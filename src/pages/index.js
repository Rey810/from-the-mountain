import React from "react"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
// import { useStaticQuery, graphql } from "gatsby"
// Components of Landing Page
import Landing from "../components/landing/landing"
import Personal from "../components/landing/personal"
import Services from "../components/landing/services/services"
import Promise from "../components/landing/promise"
// import Toolbox from "../components/toolbox"
// import Projects from "../components/projects"
import Contact from "../components/landing/contact"
import Quotes from "../components/landing/quotes"
import Benefits from "../components/landing/benefits"
import Projects from "../components/landing/projects"
import FAQ from "../components/landing/faq"
import SiteReview from "../components/landing/siteReview"

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
    <Layout usesPortfolioHeader={true}>
      <SEO title="Web Developer" />
      <div className="landing-children">
        <Landing />
        <Personal />
        <Services />
        <Benefits />
        <Promise />
        <SiteReview />
      </div>
      <Projects />
      <div className="landing-children">
        <FAQ />
        <Contact />
        <Quotes />
      </div>
    </Layout>
  )
}

export default IndexPage
