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
    <div className="project-container grid grid-rows-2 rounded-lg md:mx-16 lg:w-1/3">
      <div className="project-image-container relative mx-6 pb-1/1 md:pb-1/2">
        <Img
          fluid={image.childImageSharp.fluid}
          className="absolute-important mt-6 rounded-md h-full w-full"
        />
      </div>
      <div className="project-info-container pb-12 mt-6 mx-6 grid grid-cols-2">
        <div className="project-text-container mr-4">
          <h2 className="project-header text-2xl font-semi-bold pt-6 pb-4">
            {title}
          </h2>
          <p className="project-description pb-4 h-56">{description}</p>
          <div className="project-tech-container">
            {techStack.map(tech => {
              return (
                <a key={uuid()} href={tech.url} className="tech-link mr-4">
                  <FontAwesomeIcon icon={["fab", tech.name]} />
                </a>
              )
            })}
          </div>
        </div>
        <div className="project-buttons-container flex flex-col justify-end ml-12 font-extrabold">
          <a
            href={siteURL}
            className="project-site-link rounded-md shadow-md flex items-center px-6 py-4 justify-around"
          >
            View Project{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="18"
              viewBox="0 0 264.234 61.4"
            >
              <g
                id="Component_5_1"
                data-name="Component 5 – 1"
                transform="translate(0 1.414)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="261"
                  transform="translate(0 29.043)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M29.462,0,0,29.462"
                  transform="translate(232.057 29.109)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M29.63,29.63l-3.7-3.7-2.469-2.469L0,0"
                  transform="translate(232.057 0)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="4"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M3.041,2.119l1.95-6.435V4.7L.541,4.619Z"
                  transform="translate(257.379 29.543) rotate(-45)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
          <a
            href={codeURL}
            className="project-code-link rounded-md shadow-md px-6 py-4 mt-6 flex items-center  justify-around"
          >
            See the Code{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="18"
              viewBox="0 0 264.234 61.4"
            >
              <g
                id="Component_5_1"
                data-name="Component 5 – 1"
                transform="translate(0 1.414)"
              >
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="261"
                  transform="translate(0 29.043)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M29.462,0,0,29.462"
                  transform="translate(232.057 29.109)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M29.63,29.63l-3.7-3.7-2.469-2.469L0,0"
                  transform="translate(232.057 0)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M3.041,2.119l1.95-6.435V4.7L.541,4.619Z"
                  transform="translate(257.379 29.543) rotate(-45)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default project
