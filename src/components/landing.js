import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../components/images/avatar"

const Landing = () => {
  const [goal, setGoal] = useState("Fans")
  const [count, setCount] = useState(0)
  // these need to be cycled through each second
  const goals = ["Fans", "Readers", "Sales", "Features"]

  // Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
  // Similar to componentDidMount and componentDidUpdate
  // useEffect gets run after initial component render
  // re-run with each new render: triggered by the state change
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count === 3 ? 0 : count + 1))
      setGoal(goals[count])
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <section className="landing-container pt-10 pb-20 my-auto">
      <div className="avatar-container grid grid-cols-2 gap-2 h-16 my-16 px-12">
        <div className="avater-image-container relative w-16 ml-auto">
          <Avatar />
        </div>
        <h1 className="avatar-name text-xs my-auto font-bold ">
          REY VAN DEN BERG
        </h1>
      </div>
      <main className="landing-container ">
        <h1 className="landing-title text-6xl leading-none font-extrabold text-center">
          Get More <span className="goals text-gray-500">{goal}</span>
        </h1>
        <p className="landing-description pt-8 px-8 font-semibold text-xl text-center">
          Easy. Cost-Effective. Professional.
        </p>
      </main>
      <div className="landing-buttons-container pt-16 flex flex-col justify-center">
        <input
          className="email-field mx-auto border py-4 px-4 my-2 rounded-md text-gray-800 bg-gray-300 w-64 shadow-sm"
          type="email"
          placeholder="Your email..."
        />
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
