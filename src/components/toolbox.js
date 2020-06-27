import React from "react"
import ToolboxCard from "../components/toolboxCard"

const toolbox = () => {
  const tools = {
    frontend: [
      "HTML",
      "JavaScript",
      "CSS",
      "React",
      "GraphQL",
      "Jest",
      "Gatsby",
    ],
    backend: ["Ruby", "Rails", "PostgreSQL", "RSpec"],
    general: ["Adobe XD", "Git", "Netlify"],
  }

  return (
    <section id="Toolbox" className="toolbox-container pb-20 pt-12">
      <h1 className="toolbox-header pb-8 font-bold">What's in my toolbox?</h1>
      <div className="toolbox-cards-wrapper lg:flex lg:flex-row lg:justify-even">
        <ToolboxCard tools={tools.frontend} title={"Front-end"} />
        <ToolboxCard tools={tools.backend} title={"Back-end"} />
        <ToolboxCard tools={tools.general} title={"General"} />
      </div>
    </section>
  )
}

export default toolbox
