// import { Link } from "gatsby"
import React from "react"
import PaddingContainer from "../containers/paddingContainer"

const personal = props => {
  return (
    <PaddingContainer
      type="personal-container flex justify-center items-center"
      X
      Y
    >
      <div className="personal-title-container flex flex-col justify-center items-center">
        <h2 className="personal-title">I Get You Results</h2>
        <div className="personal-description-container">
          <p className="personal-description pb-4 ">
            I build sites with amazing looks and fast load-times that do one
            thing:
            <strong className="landing"> Get You Results.</strong>
          </p>
          <p className="personal-description pb-4">
            Whatever you have in mind, you should know - I build with a
            goal-oriented eye for precision.
          </p>
          <p className="personal-description">
            When we're done, you will have a site that gets the job done{" "}
            <em>in style.</em>
          </p>
        </div>
        <a href="#Projects" className="btn btn__outlined text-xs md:text-sm">
          <span class="w-1/1 text-center">SEE PAST WORK</span>
        </a>
      </div>
    </PaddingContainer>
  )
}

export default personal
