import React from "react"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

// import Project1Image from "../../../images/project1-image"
// import Project2Image from "../../../images/project2-image"

const project = props => {
  // properties of the project
  const { title, description, techStack, siteURL, codeURL, image } = props.info

  console.dir("image", image)
  return (
    <div className="project-container pb-10 md:pb-20 md:mx-16 lg:w-1/3">
      <div className="image-container relative bg-red-500 pb-1/1 md:pb-1/2">
        <Img
          fluid={image.childImageSharp.fluid}
          className="absolute-important h-full w-full"
        />
      </div>
      <h6 className="project-header text-2xl font-semi-bold pt-6 pb-4">
        {title}
      </h6>
      <p className="project-description pb-4 h-56">{description}</p>
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
