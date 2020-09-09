import React from "react"
import Project from "../../../templates/projectCard"
import { useStaticQuery, graphql } from "gatsby"

const Websites = props => {
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
        <Project
          displayType="website"
          info={project.node}
          location={props.location}
        />
      ))}
    </>
  )
}

export default Websites
