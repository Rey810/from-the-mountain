import { Link } from "gatsby"
import React from "react"

const personal = () => {
  return (
    <section className="personal-container pl-4 pb-20">
      <div className="personal-title-container px-4 pb-8 text-4xl font-bold flex flex-col sm:flex-row">
        <h1 className="personal-title ">Working Remotely, &nbsp;</h1>
        <h1> Based in Cape Town</h1>
      </div>
      <p className="personal-description pb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
        sem vitae risus tristique posuere.
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
