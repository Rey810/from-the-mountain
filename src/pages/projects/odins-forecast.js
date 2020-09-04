import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CaseStudy from "../../templates/caseStudy"

const OdinsForecast = props => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        edges {
          node {
            type {
              apps {
                title
                year
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
  const appData = data.allDataJson.edges[0].node.type.apps.filter(
    app => app.title === "Odin's Forecast"
  )

  console.dir(appData)
  // only attempts to render CaseStudy if props have been passed to it which only happens from the project card link where props are passed as location.state
  return props.location.state?.title ? (
    <CaseStudy {...props.location.state}></CaseStudy>
  ) : (
    <CaseStudy {...appData}></CaseStudy>
  )
}

export default OdinsForecast
