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
    <section className="toolbox-container pl-4 pb-20 ">
      <h1 className="toolbox-header pb-8 text-4xl font-bold">
        What's in my toolbox?
      </h1>
      <div className="toolbox-cards-wrapper md:flex md:flex-row md:justify-even">
        <ToolboxCard tools={tools.frontend} title={"Front-end"} />
        <ToolboxCard tools={tools.backend} title={"Back-end"} />
        <ToolboxCard tools={tools.general} title={"General"} />
      </div>
    </section>
  )
}

export default toolbox
