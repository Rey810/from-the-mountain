import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const ProjectsData = useStaticQuery(graphql`
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

export const Nodes = ProjectsData.allProjectDataJson.edges
