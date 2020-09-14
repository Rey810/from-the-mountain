import React from "react"
import uuid from "react-uuid"
import Img from "gatsby-image"
import { Link } from "gatsby"

const projectCard = props => {
  // properties of the project
  const {
    title,
    linkName,
    description,
    techStack,
    siteURL,
    codeURL,
    image,
    projectType,
  } = props.info

  console.log("project props", { props })
  // builds relative URL for when projectcase studies are accessed from the home/projects
  // linkName is used when project case studies are accessed from home/
  const caseStudyURL = linkName

  // only adds actual link to code if there is a code link (i.e. there isn't one for design projects)
  let codeLink = null

  if (codeURL) {
    codeLink = (
      <a
        href={codeURL}
        className="project-code-link text-xs md:text-sm rounded-md shadow-md flex items-center justify-around mt-4"
        rel="noopener norefferer"
        target="_blank"
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
    )
  }

  let caseStudyLink = null
  if (linkName) {
    caseStudyLink = (
      <a
        href={caseStudyURL}
        target="_blank"
        rel="noopener norefferer"
        // passes project info to link as prop available as location.state in linked page
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
      </a>
    )
  }

  // projectCard only displayed if it's type matches the type that is currently being displayed
  let projectCard = null

  if (projectType === props.displayType) {
    projectCard = (
      <div className="project-square-wrapper relative w-1/1 pb-1/1 my-12 shadow-lg rounded-lg">
        <div className="project-container absolute inset-0 grid grid-rows-2 row-gap-4 rounded-lg">
          <div className="project-image-container relative m-4 mb-0">
            <Img
              fluid={image.childImageSharp.fluid}
              className="absolute inset-0  rounded-t-md h-full w-full"
            />
          </div>
          <div className="project-info-container mx-4 my-auto flex justify-between">
            <div className="project-text-container w-1/2 flex flex-col justify-end">
              <h3 className="project-header text-lg md:text-xl font-semi-bold my-2">
                {title}
              </h3>
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
                      rel="noopener norefferer"
                      target="_blank"
                    >
                      {tech.name}
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="project-buttons-container w-5/12 mb-2 flex flex-col justify-end font-extrabold leading-none">
              {caseStudyLink}
              {codeLink}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{projectCard}</>
}

export default projectCard
