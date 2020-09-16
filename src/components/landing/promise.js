import React from "react"
import PaddingContainer from "../containers/paddingContainer"
import Img from "gatsby-image"

const promise = props => {
  const { meditationWoman, webMan } = props
  return (
    <PaddingContainer type="promises-container" X Y>
      <h2 className="promises-header text-center">My Promises</h2>
      <section className="all-promises-container">
        <div className="first-promise">
          <div className="img-wrapper">
            <Img fluid={webMan.childImageSharp.fluid} className="lg:w-4/5" />
          </div>
          <h3>Fast products that work</h3>
          <p>
            My passion for this ensures excellence in your final product. The
            internet is fragile. Your site won't be.
          </p>
        </div>
        <div className="second-promise">
          <div className="img-wrapper w-1/1">
            <Img
              fluid={meditationWoman.childImageSharp.fluid}
              className="lg:w-4/5"
            />
          </div>
          <h3>A healthy relationship</h3>
          <p>
            Communication is key in any relationship, ours included. No dramas
            or difficult relationships. I'm here to make your life easier.
          </p>
        </div>
      </section>
    </PaddingContainer>
  )
}

export default promise
