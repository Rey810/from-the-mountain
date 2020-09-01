import React from "react"
import Project from "./projectTemplate/project"
import { useStaticQuery, graphql } from "gatsby"

const Websites = props => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            type {
              websites {
                title
                year
                linkName
                imageURL
                description
                caseDescription
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
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const websites = data.allDataJson.edges[0].node.type.websites
  console.dir(websites)

  console.log("websites.js image", websites[0].image)
  // console.log("websites.js image 2", websites[1].image)
  return (
    <>
      {websites.map(project => (
        <Project info={project} location={props.location} />
      ))}
    </>
  )
}

export default Websites
