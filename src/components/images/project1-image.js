import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Project1Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "project1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      className="absolute-important h-full w-full"
    />
  )
}
