import React from "react"
// import projects from "./projects"
import ProjectCard from "../../../templates/projectCard"
import { useStaticQuery, graphql } from "gatsby"

const Apps = props => {
  const projectsData = useStaticQuery(graphql`
    query {
      allProjectDataJson {
        edges {
          node {
            projectType
            title
            year
            linkName
            imageURL
            description
            caseDescription
            secondDescription
            secondDescriptionQuote
            techStack {
              name
              url
            }
            toolSet {
              name
              url
            }
            siteURL
            codeURL
            image {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projectNodes = projectsData.allProjectDataJson.edges

  return (
    <>
      {projectNodes.map(project => (
        <ProjectCard
          displayType="app"
          info={project.node}
          location={props.location}
        />
      ))}
    </>
  )
}

export default Apps
