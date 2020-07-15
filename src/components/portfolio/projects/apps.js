import React from "react"
// import projects from "./projects"
import Project from "../projects/project"
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
                imageURL
                description
                techStack {
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
  console.log("apps.js image 2", apps[1].image)
  return (
    <div className="project-container pb-10 md:pb-20 md:mx-16">
      {apps.map(project => (
        <Project info={project} />
      ))}
    </div>
  )
}

export default Apps
