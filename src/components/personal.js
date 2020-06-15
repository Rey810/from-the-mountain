import { Link } from "gatsby"
import React from "react"

const personal = () => {
  return (
    <section className="personal-container px-4 pb-20">
      <div className="personal-title-container pb-8 text-4xl font-bold flex flex-col sm:flex-row">
        <h1 className="personal-title ">Let's Start with A Question</h1>
      </div>
      <p className="personal-description pb-4">
        What comes to mind when I say "the perfect website"? To me, it's
        <strong> amazing looks</strong>, <strong> a fast load time</strong>,
        <strong> ease of use</strong>, <strong> uncomplicated</strong>.
      </p>
      <p className="personal-description pb-4">
        To you, it might be one that <strong>generates sales</strong>,
        <strong>attracts subscribers</strong>,
        <strong>brings across a clear message</strong>.
      </p>
      <p className="personal-description pb-10">
        And that's why you might enjoy working with me - I build with an eye for
        precision so that when you close your eyes and imagine the perfect site,
        you see <em>yours</em>.
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
