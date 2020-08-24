// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeatherArrowRightCircle from "../../assets/icons/featherArrowRightCircle"
import HeroMan from "../../assets/illustrations/heroMan"
// import Avatar from "../images/avatar"
// import Background from "../images/background"
import { Link } from "gatsby"

const Landing = () => {
  // const [goal, setGoal] = useState("Fans")
  // const [count, setCount] = useState(0)
  // // these need to be cycled through each second
  // const goals = ["Fans", "Readers", "Sales", "Features"]

  const [darken, setDarken] = useState(false)
  const [darkenContact, setdarkenContact] = useState(false)

  const [animated, setAnimated] = useState(false)

  const handleScroll = () => {
    if (window.scrollY < 200) {
      setDarken(false)
    } else {
      setDarken(true)
    }
    const contact = document.querySelector(".contact-social-container")
    // innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.
    // contact.getBoundingClientRect().bottom is the distance of the bottom of the element from the top of the viewport
    // when the bottom of the contact container is equal to or smaller than the height of the viewport, then it's in view
    if (
      contact.getBoundingClientRect().bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      setdarkenContact(true)
    } else {
      setdarkenContact(false)
    }
  }
  // runs after the first render and after every update
  // a new function is passed into useEffect (remember, each object/function is a separate thing) eah render which makes each effect "belong" to a render
  useEffect(() => {
    setAnimated(true)
    window.addEventListener("scroll", handleScroll)
    // React will run returned function when it is time to clean up
    // i.e. when the component unmounts and also after the previous render
    // for multiple hooks, they're run in the order they're defined
    return () => window.removeEventListener("scroll", handleScroll)
  }, [darken, darkenContact, animated])

  // const interval = setInterval(() => {
  //   setCount(count => (count === 3 ? 0 : count + 1))
  //   setGoal(goals[count])
  // }, 1000)
  // return () => clearInterval(interval)
  // })

  return (
    <section
      id="What-I-Do"
      className="landing-container mt-8 md:flex md:justify-center md:items-center md:flex-row md:h-screen"
    >
      {/* <div
        className={`opacity-0 ${
          animated ? "fadeInSlideUp-1st" : ""
        } avatar-container flex justify-center h-16 my-16 mx-auto px-12`}
      >
        <div className="avater-image-container relative w-16">
          <Avatar />
        </div>
        <div className="landing-name-container flex items-center pl-4">
          <span className="name font-semibold">Rey van den Berg</span>
        </div>
      </div> */}
      <main className="text-wrapper flex justify-center items-center">
        <div>
          <h1
            className={`opacity-0 ${
              animated ? "fadeInSlideUp-2nd" : ""
            } landing-title leading-none`}
          >
            Freelance <br /> Developer
          </h1>
          <p
            className={`opacity-0 ${
              animated ? "fadeInSlideUp-3rd" : null
            } landing-description my-12`}
          >
            Helping people turn their ideas into <br /> sites & apps that work.{" "}
            <br />
            Professional and Cost-Effective. <br /> Always.
          </p>
          <div className="cta-container flex flex-row">
            <div
              className={`opacity-0 ${
                animated ? "fadeInSlideUp-4th" : null
              } landing-buttons-container`}
            >
              <Link
                href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!&body=Hi%20Rey!%20:)"
                className="btn landing-cta-1"
              >
                Chat with Rey
              </Link>
              <Link
                to="/projects"
                className="view-projects-container btn flex flex-row items-center"
              >
                <FeatherArrowRightCircle />
                <span className="pl-4">View Projects</span>
              </Link>
            </div>
            <div
              className={`opacity-0 ${
                animated ? "fadeIn-5th" : ""
              } landing-icons-container flex flex-col justify-center ml-18`}
            >
              <a
                aria-label="Find Rey on Twitter"
                className="landing-icons icon px-4"
                href="https://twitter.com/ReyTheDev"
              >
                <FontAwesomeIcon
                  title="Find Rey on Twitter"
                  icon={["fab", "twitter"]}
                />
              </a>
              <a
                aria-label="See Rey's Code on Github"
                className="landing-icons icon px-4"
                href="https://github.com/Rey810"
              >
                <FontAwesomeIcon
                  title="See Rey's Code on Github"
                  icon={["fab", "github"]}
                />
              </a>
              <a
                aria-label="Find Rey on LinkedIn"
                className="landing-icons icon px-4"
                href="https://www.linkedin.com/in/rey810/"
              >
                <FontAwesomeIcon
                  title="Find Rey on LinkedIn"
                  icon={["fab", "linkedin"]}
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <main className="text-wrapper flex justify-center items-center">
        <HeroMan />
      </main>
    </section>
  )
}

export default Landing
