import { Link } from "gatsby"
import React from "react"

const personal = () => {
  return (
    <section className="personal-container pb-20 px-4 md:px-8 lg:px-12 xl:px-16 xl:pb-32">
      <div className="personal-title-container pb-8 font-bold flex flex-col sm:flex-row">
        <h1 className="personal-title ">Let's Start with A Question</h1>
      </div>
      <div className="personal-description-container md:w-2/3 lg:w-7/12">
        <p className="personal-description pb-4 ">
          What comes to mind when you hear 'The Perfect Website'? I picture a
          site that has amazing looks, fast load-times, ease-of-use and no
          complications.
        </p>
        <p className="personal-description pb-4">
          Maybe you picture a site that generates loads of sales, attracts
          subscribers, and brings across a clear message.
        </p>
        <p className="personal-description pb-10">
          And that's why you might enjoy working with me - I build with a
          goal-oriented eye for precision. That means when we're done, you can
          close your eyes and picture <em>yours</em> as The Perfect Website.
        </p>
        <Link
          to="/blog"
          className="py-2 px-8 border border-solid rounded-md my-2"
        >
          Checkout Blog
        </Link>
      </div>
    </section>
  )
}

export default personal
