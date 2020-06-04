import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { library } from "@fortawesome/fontawesome-svg-core"

import { fab } from "@fortawesome/free-brands-svg-icons"
import Landing from "../components/landing"
import Personal from "../components/personal"
import Services from "../components/services"
import Promise from "../components/promise"
import Toolbox from "../components/toolbox"
import Projects from "../components/projects"
import Contact from "../components/contact"
import Quotes from "../components/quotes"

// fab represenets all of the brand icons. They're now available anywhere in the app
library.add(fab)

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
