import React from "react"
import PaddingContainer from "../containers/paddingContainer"
import MeditationWoman from "../../assets/illustrations/meditationWoman"
import WebDevMan from "../../assets/illustrations/webDevMan"

const promise = () => {
  return (
    <PaddingContainer type="promises-container">
      <h2 className="promises-header">My Promises</h2>
      <section className="all-promises-container">
        <div className="first-promise">
          <div className="img-wrapper">
            <WebDevMan />
          </div>
          <h3>Fast products that work</h3>
          <p>
            My passion for this ensures excellence in your final product. The
            internet is fragile. Your site won't be.
          </p>
        </div>
        <div className="second-promise">
          <div className="img-wrapper">
            <MeditationWoman />
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
