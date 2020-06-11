import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Landing = () => {
  const [goal, setGoal] = useState("Fans");
  const goals = ["fans", "Readers", "Sales", "Features"]

  // Similar to componentDidMount and componentDidUpdate
  // check Where's Rick and Morty for this timer
  const nextGoal = () => {
    let intervalFunc = setInterval(() => {
      setGoal(goals[Math.floor(Math.random() * goals.length)])
    }, 2000);
    clearInterval(intervalFunc)
  }

  return (
    <section className="bg-transparent pt-10 pb-20 my-auto" onLoad={nextGoal()}>
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
          Get More <span className="goals">{goal}</span>
        </h1>
        <p className="landing-description pt-8 px-8 text-xl text-center">
          I bring your cool ideas to life using only the best tech ingredients
          and tools{" "}
        </p>
      </main>
      <div className="landing-buttons-container pt-16 flex flex-col justify-center">
      <input className="email-field mx-auto border py-4 px-4 my-2 rounded-md text-gray-800 bg-gray-300 w-64" type="email" placeholder="Your email..." />
        <button className="landing-cta-1 py-4 px-8 mx-auto my-2 rounded-md shadow-md w-64">
          Let's Connect!
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

export default Landing
