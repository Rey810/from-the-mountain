import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import Toolbox from "../components/toolbox"
import Footer from "../components/footer"

const ProjectsPage = () => {
  return (
    <Layout canSeeHeader={true} usesLinksHeader={true}>
      <SEO />
      <div className="information-container pt-20 relative pl-4 md:pl-8 lg:pl-12 xl:pl-16">
        <Projects />
        <Toolbox />
      </div>
      <Footer />
    </Layout>
  )
}

export default ProjectsPage
