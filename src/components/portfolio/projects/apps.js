import React from "react"
// import projects from "./projects"
import Project from "./projectTemplate/project"
import { useStaticQuery, graphql } from "gatsby"

const Apps = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            type {
              apps {
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

  const apps = data.allDataJson.edges[0].node.type.apps
  console.dir(apps)

  console.log("apps.js image", apps[0].image)
  // console.log("apps.js image 2", apps[1].image)
  return (
    <>
      {apps.map(project => (
        <Project info={project} />
      ))}
    </>
  )
}

export default Apps
