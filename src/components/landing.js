// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../components/images/avatar"
import Background from "../components/images/background"

const Landing = () => {
  // const [goal, setGoal] = useState("Fans")
  // const [count, setCount] = useState(0)
  // // these need to be cycled through each second
  // const goals = ["Fans", "Readers", "Sales", "Features"]

  const [darken, setDarken] = useState(false)

  const handleScroll = scrollY => {
    console.log("handleScroll firing!", scrollY)
    if (scrollY > 200) {
      setDarken(true)
    } else {
      setDarken(false)
    }
  }
  // runs after the first render and after every update
  // a new function is passed into useEffect (remember, each object/function is a separate thing) eah render which makes each effect "belong" to a render
  // If your effect returns a function, React will run it when it is time to clean up
  // i.e. when the component unmounts and also after the previous render
  // for multiple hooks, they're run in the order they're defined
  useEffect(() => {
    window.onscroll = () => {
      handleScroll(window.scrollY)
    }
  })

  // const interval = setInterval(() => {
  //   setCount(count => (count === 3 ? 0 : count + 1))
  //   setGoal(goals[count])
  // }, 1000)
  // return () => clearInterval(interval)
  // })

  return (
    <section className="landing-container pt-10 pb-20 my-auto">
      <div className="bg-image-container fixed -z-20 top-0 left-0 bottom-0 w-full">
        <Background blur={darken} />
      </div>
      <div
        className={`color-overlay-container fixed -z-10 top-0 bottom-0 left-0 w-full ${
          darken ? "saturate" : ""
        }`}
      ></div>
      <div className="avatar-container flex justify-center h-16 my-16 mx-auto px-12">
        <div className="avater-image-container relative w-16">
          <Avatar />
        </div>
      </div>
      <main className="landing-container ">
        <h1 className="landing-title leading-none font-extrabold text-center">
          Get More <span className="goals">Fans</span>
        </h1>
        <h6 className="landing-description text-center pt-8 px-8 font-semibold">
          <span className="landing-description__first">Easy.</span>
          <span className="landing-description__second"> Cost-Effective.</span>
          <span className="landing-description__third"> Professional.</span>
        </h6>
      </main>
      <div className="landing-buttons-container pt-16 flex flex-col justify-center md:flex-row md:justify-center">
        <input
          className="email-field mx-auto border py-4 px-4 my-2 rounded-md w-64 shadow-sm md:w-1/6 md:mx-2"
          type="email"
          placeholder="Your email..."
        />
        <button className="landing-cta-1 py-4 px-8 mx-auto   my-2 rounded-md shadow-md font-semibold w-64 md:w-1/6 md:mx-2">
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
