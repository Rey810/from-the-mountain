import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO keywords={"about, description, developer, testimonial"} />
    <div>
      <h1>About Me</h1>
      <p>
        So I'm a developer working in JavaScript. But what is that? Who am I
        really?
      </p>
    </div>
  </Layout>
)

export default AboutPage
