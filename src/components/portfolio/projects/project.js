import React from "react"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Project1Image from "../../../images/project1-image"
import Project2Image from "../../../images/project2-image"

const project = props => {
  // properties of the project
  const { title, description, techStack, siteURL, codeURL } = props.info

  // all the project image components
  const projectImageComponents = {
    "Odin's Forecast": <Project1Image />,
    "Odin's Book": <Project2Image />,
  }

  return (
    <div className="project-container pb-10 md:pb-20 md:mx-16">
      <div className="image-container relative bg-red-500 pb-1/1 md:pb-1/2">
        {projectImageComponents[title]}
      </div>
      <h6 className="project-header text-2xl font-semi-bold pt-6 pb-4">
        {title}
      </h6>
      <p className="project-description pb-4">{description}</p>
      <div className="project-tech-container text-4xl pb-6 pl-2">
        {techStack.map(tech => {
          return (
            <a key={uuid()} href={tech.url} className="tech-link mr-4">
              <FontAwesomeIcon icon={["fab", tech.name]} />
            </a>
          )
        })}
      </div>
      <div className="project-buttons-container flex flex-row justify-even md:justify-start">
        <a href={siteURL} className="project-site-link">
          <button className="project-site py-4 px-8 my-2 rounded-full shadow-md md:mr-4">
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
