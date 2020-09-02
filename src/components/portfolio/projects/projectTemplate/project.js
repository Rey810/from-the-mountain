import React from "react"
import uuid from "react-uuid"
import Img from "gatsby-image"
import { Link } from "gatsby"

const project = props => {
  // properties of the project
  const {
    title,
    linkName,
    description,
    techStack,
    siteURL,
    codeURL,
    image,
  } = props.info

  console.log({ props })
  // builds relative URL for when projectcase studies are accessed from the home/projects
  // linkName is used when project case studies are accessed from home/
  const caseStudyURL = props.location
    ? props.location.pathname + linkName
    : `projects/${linkName}`

  return (
    <>
      <div className="project-square-wrapper relative w-1/1 pb-1/1 my-12 shadow-lg rounded-lg">
        <div className="project-container absolute inset-0 grid grid-rows-2 row-gap-4">
          <div className="project-image-container relative m-4 mb-0">
            <Img
              fluid={image.childImageSharp.fluid}
              className="absolute inset-0  rounded-t-md h-full w-full"
            />
          </div>
          <div className="project-info-container mx-4 my-auto flex justify-between">
            <div className="project-text-container w-1/2 flex flex-col justify-end">
              <h2 className="project-header text-lg md:text-xl font-semi-bold mb-4">
                {title}
              </h2>
              <p className="project-description text-xs mb-4 h-17 overflow-y-hidden leading-snug md:text-sm md:h-20">
                {description}
              </p>
              <div className="project-tech-container flex flex-no-wrap">
                {techStack.map(tech => {
                  return (
                    <a
                      key={uuid()}
                      href={tech.url}
                      className="tech-link text-xs md:text-sm border-2 rounded-md mb-2 mr-2"
                    >
                      {tech.name}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="project-buttons-container w-5/12 mb-2 flex flex-col justify-end font-extrabold leading-none">
              <Link
                to={caseStudyURL}
                // passes project info to link as prop available as location.state in linked page
                state={props.info}
                className="project-site-link text-xs md:text-sm rounded-md shadow-md flex items-center justify-around"
              >
                View Project{" "}
                <svg className="w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
              <a
                href={codeURL}
                className="project-code-link text-xs md:text-sm rounded-md shadow-md flex items-center justify-around mt-4"
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
