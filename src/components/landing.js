import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const landing = () => {
  return (
    <section class="h-screen bg-transparent pt-8">
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
      <div className="landing-buttons-container pt-8 flex flex-row justify-center">
        <button className="landing-cta py-3 px-6 mx-2 rounded-full bg-gray-700 text-gray-200">
          Say Hi
        </button>
        <button className="landing-cta py-3 px-6 mx-2">Checkout Blog</button>
      </div>
      <div className="landing-icons-container flex flex-row justify-center text-2xl text-gray-700 pt-4">
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
