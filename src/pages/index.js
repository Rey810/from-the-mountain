import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Font Awesome Icons
import { library, config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCode, faCoffee } from "@fortawesome/free-solid-svg-icons"

// Components of Landing Page
import Landing from "../components/landing"
import Personal from "../components/personal"
import Services from "../components/services"
import Promise from "../components/promise"
import Toolbox from "../components/toolbox"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Quotes from "../components/quotes"

// FONT AWESOME
// fab represenets all of the brand icons
library.add(fab, faCode, faCoffee)
// fixes huge Font Awesome icon on load by inlining CSS
config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Personal />
    <Services />
    <Promise />
    <Toolbox />
    <Projects />
    <Contact />
    <Quotes />
  </Layout>
)

export default IndexPage
