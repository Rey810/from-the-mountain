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
      <div className="project-square-wrapper relative w-1/1 pb-1/1 my-12">
        <div className="project-container absolute inset-0 grid grid-rows-2 row-gap-4 rounded-lg">
          <div className="project-image-container relative m-4 mb-0">
            <Img
              fluid={image.childImageSharp.fluid}
              className="absolute inset-0  rounded-md h-full w-full"
            />
          </div>
          <div className="project-info-container mx-4 mb-4 flex justify-between">
            <div className="project-text-container w-1/2 flex flex-col justify-end">
              <h2 className="project-header text-lg font-semi-bold mb-4">
                {title}
              </h2>
              <p className="project-description text-xs mb-4 h-17 overflow-y-hidden leading-snug">
                {description}
              </p>
              <div className="project-tech-container flex flex-wrap">
                {techStack.map(tech => {
                  return (
                    <a
                      key={uuid()}
                      href={tech.url}
                      className="tech-link text-xs border-2 rounded-md mb-2 mr-2"
                    >
                      {tech.name}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="project-buttons-container w-2/5 mb-2 flex flex-col justify-end font-extrabold leading-none">
              <a
                href={siteURL}
                className="project-site-link text-xs rounded-md shadow-md flex items-center justify-around"
              >
                View Project{" "}
                <svg className="w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href={codeURL}
                className="project-code-link text-xs rounded-md shadow-md flex items-center  justify-around mt-2"
              >
                See the Code{" "}
                <svg className="w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default project
