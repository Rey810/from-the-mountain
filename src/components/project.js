import React from "react"
import uuid from "react-uuid"

const project = props => {
  const {
    title,
    imageURL,
    description,
    techStack,
    siteURL,
    codeURL,
  } = props.info
  return (
    <div className="project-container">
      <h6 className="project-header">{title}</h6>
      <img src={imageURL} />
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut{" "}
      </p>
      <div className="project-tech-container">
        {techStack.map(tech => {
          return (
            <a key={uuid()} href={tech.url} className="tech-link">
              {tech.name}
            </a>
          )
        })}
      </div>
      <div className="project-buttons-container">
        <a href={siteURL} className="project-site-button">
          Visit Site
        </a>
        <a href={codeURL} className="project-code-button">
          Inspect the Code
        </a>
      </div>
    </div>
  )
}

export default project
