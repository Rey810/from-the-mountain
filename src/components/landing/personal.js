// import { Link } from "gatsby"
import React from "react"
import QuestionMan from "../../assets/illustrations/questionMan"
import PaddingContainer from "../containers/paddingContainer"

const personal = () => {
  return (
    <PaddingContainer type="personal-container" X Y>
      <section>
        <div className="img-wrapper flex justify-center items-center">
          <QuestionMan />
        </div>
        <div className="text-wrapper flex justify-center items-center">
          <div className="personal-title-container">
            <h2 className="personal-title">
              Let's start <br />
              with a question
            </h2>
            <div className="personal-description-container">
              <p className="personal-description pb-4 ">
                What comes to mind when you hear 'The Perfect Website'? I
                picture a site that has amazing looks, fast load-times,
                ease-of-use and no complications.
              </p>
              <p className="personal-description pb-4">
                Maybe you picture a site that generates loads of sales, attracts
                subscribers, and brings across a clear message.
              </p>
              <p className="personal-description">
                And that's why you might enjoy working with me - I build with a
                goal-oriented eye for precision. That means when we're done, you
                can close your eyes and picture <em>yours</em> as The Perfect
                Website.
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
      </section>
    </PaddingContainer>
  )
}

export default personal
