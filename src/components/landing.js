import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const landing = () => {
  return (
    <section>
      <div className="avatar-container">
        <img className="avatar-pic" alt="Pic of Rey" />
        <h1 className="avatar-name">REY VAN DEN BERG</h1>
      </div>
      <main className="landing-container">
        <h1 className="landing-title">Freelance Developer</h1>
        <p className="landing-description">
          I bring your cool ideas to life using best practices and other nice
          words will be here.{" "}
        </p>
      </main>
      <div className="landing-buttons-container">
        <button className="landing-cta">Say Hi</button>
        <button className="landing-cta">Checkout Blog</button>
      </div>
      <div className="landing-icons-container">
        <Link className="landing-icons" to="/">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
        <Link className="landing-icons" to="/">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Link>
        <Link className="landing-icons" to="/">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
      </div>
    </section>
  )
}

export default landing
