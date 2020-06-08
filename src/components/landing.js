import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const landing = () => {
  return (
    <section class="bg-transparent pt-10 pb-20 my-auto">
      <div className="avatar-container flex flex-row justify-center py-8 ">
        <img className="avatar-pic px-2" alt="Pic of Rey" />
        <h1 className="avatar-name text-xs my-auto font-semibold ">
          REY VAN DEN BERG
        </h1>
      </div>
      <main className="landing-container ">
        <h1 className="landing-title text-6xl leading-none font-extrabold text-center">
          Freelance Developer
        </h1>
        <p className="landing-description pt-4 px-8 text-xl">
          I bring your cool ideas to life using best practices and other nice
          words will be here.{" "}
        </p>
      </main>
      <div className="landing-buttons-container pt-8 flex flex-col justify-center">
        <button className="landing-cta-1 py-4 px-8 mx-auto my-2 rounded-full">
          Come say, "Howzit!"
        </button>
        <button className="landing-cta-2 py-2 px-8 mx-auto my-2 rounded-full border border-solid">
          Checkout Blog
        </button>
      </div>
      <div className="landing-icons-container flex flex-row justify-center text-2xl py-4">
        <Link className="landing-icons px-4" to="/">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
        <Link className="landing-icons px-4" to="/">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Link>
        <Link className="landing-icons px-4" to="/">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
      </div>
    </section>
  )
}

export default landing
