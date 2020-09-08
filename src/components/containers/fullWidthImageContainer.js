import React from "react"
import Img from "gatsby-image"
// the container needs to be positioned: relative
// container padding-bottom sets the height of this element
// using a % value for padding-bottom calcualtes padding according to div width
// the image must be within the container and set position: absolute
// image width and height set to 100% to take up parent divs dimensions
const fullWidthImageWrapper = props => {
  return (
    <div className="relative bg-gray-700">
      <Img fluid={props.image.childImageSharp.fluid} />
    </div>
  )
}

export default fullWidthImageWrapper
