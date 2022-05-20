import React from "react"
import Layout from "../components/containers/layout"
import SEO from "../components/general/seo"
// import { useStaticQuery, graphql } from "gatsby"
// Components of Landing Page
import Landing from "../components/landing/landing"
// import Personal from "../components/landing/personal"
// import Services from "../components/landing/services/services"
// import Promise from "../components/landing/promise"
// import Toolbox from "../components/portfolio/toolbox/toolbox"
// import Projects from "../components/projects"
// import Contact from "../components/landing/contact"
// import Benefits from "../components/landing/benefits"
// import Projects from "../components/landing/projects"
// import FAQ from "../components/landing/faq"
// import SiteReview from "../components/landing/siteReview"
// import Footer from "../components/general/footer"
import Quotes from "../components/landing/quotes"

// Font Awesome Icons
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

// FONT AWESOME
// fab represenets all of the brand icons
library.add(faGithub, faLinkedin, faTwitter, faChevronDown)
// fixes huge Font Awesome icon on load by inlining CSS
config.autoAddCss = false

const IndexPage = ({
  data: {
    allIllustrationsDataJson: { nodes },
  },
}) => {
  let images = nodes.reduce((result, obj) => {
    result[obj.name] = obj.src
    return result
  }, {})

  return (
    <Layout usesPortfolioHeader={true}>
      <SEO title="Web Developer" />
      <div className="landing-children">
        <Landing {...images} />
        <Quotes />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allIllustrationsDataJson {
      nodes {
        name
        src {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
