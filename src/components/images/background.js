import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const BackgroundImage = props => {
  const [blur, setBlur] = useState(false)

  useEffect(() => {
    props.blur ? setBlur(true) : setBlur(false)
  }, [props.blur])

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "laptop_patio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      className={`bg-image-wrapper absolute-important h-full w-full object-cover ${
        blur ? "blur" : ""
      }`}
    />
  )
}

export default BackgroundImage
