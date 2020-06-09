import React from "react"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Project1Image from "../components/images/project1-image"
import Project2Image from "../components/images/project2-image"

const project = props => {
  // properties of the project
  const { title, description, techStack, siteURL, codeURL } = props.info

  // all the project image components
  const projectImageComponents = {
    "Odin's Forecast": <Project1Image />,
    "Odin's Book": <Project2Image />,
  }

  return (
    <div className="project-container pb-10">
      <button className="project-site"></button>
      <h6 className="project-header text-2xl font-semi-bold pb-6">{title}</h6>
      <div className="image-container relative bg-red-500 pb-1/1">
        {projectImageComponents[title]}
      </div>
      <p className="project-description pt-8 pb-4">{description}</p>
      <div className="project-tech-container text-4xl pb-6 pl-2">
        {techStack.map(tech => {
          return (
            <a key={uuid()} href={tech.url} className="tech-link mr-4">
              <FontAwesomeIcon icon={["fab", tech.name]} />
            </a>
          )
        })}
      </div>
      <div className="project-buttons-container flex flex-row justify-even">
        <a href={siteURL} className="project-site-link">
          <button className="project-site py-4 px-8 my-2 rounded-full">
            Visit Site
          </button>
        </a>
        <a href={codeURL} className="project-code-link">
          <button className="project-code py-4 px-8 my-2 rounded-full border border-solid">
            Inspect the Code
          </button>
        </a>
      </div>
    </div>
  )
}

export default project
