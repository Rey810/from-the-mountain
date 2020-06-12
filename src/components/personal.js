import { Link } from "gatsby"
import React from "react"

const personal = () => {
  return (
    <section className="personal-container pl-4 pb-20">
      <div className="personal-title-container pb-8 text-4xl font-bold flex flex-col sm:flex-row">
        <h1 className="personal-title ">Let's Start</h1>
        <h1> With a Question</h1>
      </div>
      <p className="personal-description pb-4">
        What comes to mind when I say "the perfect website"? To me, it's
        "amazing looks", "a fast load time", "ease of use", "uncomplicated".
      </p>
      <p className="personal-description pb-4">
        To you, it might be one that "generates sales", "attracts subscribers",
        "brings across a clear message".
      </p>
      <p className="personal-description pb-10">
        And that's why you might enjoy working with me - I build with an eye for
        precision so that when you close your eyes and imagine the perfect site,
        you see yours.
      </p>
      <Link to="/blog" className="my-2">
        <button className="landing-cta-2 py-2 px-8 border border-solid">
          Checkout Blog
        </button>
      </Link>
    </section>
  )
}

export default personal
