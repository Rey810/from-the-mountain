import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "../components/landingHeader"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"

// fab represenets all of the brand icons. They're now available anywhere in the app
library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
