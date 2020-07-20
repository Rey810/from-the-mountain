import React from "react"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Img from "gatsby-image"

// import Project1Image from "../../../images/project1-image"
// import Project2Image from "../../../images/project2-image"

const project = props => {
  // properties of the project
  const { title, description, techStack, siteURL, codeURL, image } = props.info

  console.dir("image", image)
  return (
    <>
      <div className="project-square-wrapper relative w-1/2 pb-1/2">
        <div className="project-container absolute inset-0 grid grid-rows-2 rounded-lg">
          <div className="project-image-container relative mx-6">
            <Img
              fluid={image.childImageSharp.fluid}
              className="absolute-important mt-6 rounded-md h-full w-full"
            />
          </div>
          <div className="project-info-container pb-12 mt-6 mx-6 grid grid-cols-2">
            <div className="project-text-container mr-4">
              <h2 className="project-header text-2xl font-semi-bold pb-4">
                {title}
              </h2>
              <p className="project-description pb-4 h-56 overflow-y-hidden leading-snug">
                {description}
              </p>
              <div className="project-tech-container">
                {techStack.map(tech => {
                  return (
                    <a key={uuid()} href={tech.url} className="tech-link mr-4">
                      <span className="project-tech-widget border-2 rounded-md">
                        {tech.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="project-buttons-container flex flex-col justify-end ml-12 font-extrabold leading-none">
              <a
                href={siteURL}
                className="project-site-link rounded-md shadow-md flex items-center px-6 py-4 justify-around"
              >
                View Project <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href={codeURL}
                className="project-code-link rounded-md shadow-md px-6 py-4 mt-6 flex items-center  justify-around"
              >
                See the Code <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default project
