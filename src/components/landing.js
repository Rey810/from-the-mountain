import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const landing = () => {
  return (
    <section className="bg-transparent pt-10 pb-20 my-auto">
      <div className="avatar-container flex flex-row justify-center py-16 ">
        <div className="avater-container h-16 w-16 border-2 rounded-full mx-4">
          <img className="avatar-pic px-2" alt="Rey van den Berg's Avatar" />
        </div>
        <h1 className="avatar-name text-xs my-auto font-bold ">
          REY VAN DEN BERG
        </h1>
      </div>
      <main className="landing-container ">
        <h1 className="landing-title text-6xl leading-none font-extrabold text-center">
          Freelance Developer
        </h1>
        <p className="landing-description pt-8 px-8 text-xl text-center">
          I bring your cool ideas to life using only the best tech ingredients
          and tools{" "}
        </p>
      </main>
      <div className="landing-buttons-container pt-16 flex flex-col justify-center">
        <button className="landing-cta-1 py-4 px-8 mx-auto my-2 rounded-full shadow-md">
          hello@mountain.co.za
        </button>
      </div>
      <div className="landing-icons-container flex flex-row justify-center text-2xl py-8">
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
