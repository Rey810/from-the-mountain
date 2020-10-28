import React from "react"
// import projects from "./projects"
import ProjectCard from "../../../templates/projectCard"
import { useStaticQuery, graphql } from "gatsby"

const Apps = props => {
  const projectsData = useStaticQuery(graphql`
    query {
      allProjectDataJson(
        filter: { projectType: { eq: "app" } }
        sort: { fields: year, order: DESC }
      ) {
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

  const appNodes = projectsData.allProjectDataJson.edges

  return (
    <>
      {appNodes.map(project => (
        <ProjectCard info={project.node} location={props.location} />
      ))}
    </>
  )
}

export default Apps
