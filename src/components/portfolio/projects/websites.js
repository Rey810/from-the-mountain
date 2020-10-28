import React from "react"
import Project from "../../../templates/projectCard"
import { useStaticQuery, graphql } from "gatsby"

const Websites = props => {
  const projectsData = useStaticQuery(graphql`
    query {
      allProjectDataJson(
        filter: { projectType: { eq: "website" } }
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

  const websiteNodes = projectsData.allProjectDataJson.edges

  return (
    <>
      {websiteNodes.map(project => (
        <Project info={project.node} location={props.location} />
      ))}
    </>
  )
}

export default Websites
