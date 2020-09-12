// import { Link } from "gatsby"
import React from "react"
import QuestionMan from "../../assets/illustrations/questionMan"
import PaddingContainer from "../containers/paddingContainer"

const personal = () => {
  return (
    <PaddingContainer type="personal-container" X Y>
      <div className="img-wrapper flex justify-center items-center">
        <QuestionMan />
      </div>
      <div className="text-wrapper flex justify-center items-center">
        <div className="personal-title-container">
          <h2 className="personal-title">Do You Want a Perfect Website?</h2>
          <div className="personal-description-container">
            <p className="personal-description landing pb-4 ">
              I build sites with amazing looks and fast load-times that do one thing: <br/><strong>Get You Results.</strong>
            </p>
            <p className="personal-description pb-4">
              Whatever you have in mind, you should know - I build with a
              goal-oriented eye for precision. 
            </p>
            <p className="personal-description">
              When we're done, you will have a site that gets the job done in style.
            </p>
            {/* <Link
          to="/blog"
          className="py-2 px-8 border border-solid rounded-md my-2"
        >
          Checkout Blog
        </Link> */}
          </div>
        </div>
      </div>
    </PaddingContainer>
  )
}

export default personal
