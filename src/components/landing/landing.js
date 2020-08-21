// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../images/avatar"
import Background from "../images/background"

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
      className="landing-container pt-10 pb-20 my-auto mx-auto xl:pb-32"
    >
      <div className="bg-image-container fixed -z-20 top-0 left-0 bottom-0 w-full">
        <Background blur={darken} />
      </div>
      <div
        className={`color-overlay-container fixed -z-10 top-0 bottom-0 left-0 w-full ${
          darken ? "saturate" : ""
        } ${darkenContact ? "darkenContact" : ""}`}
      ></div>
      <div
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
      </div>
      <main className="landing-container ">
        <h1
          className={`opacity-0 ${
            animated ? "fadeInSlideUp-2nd" : ""
          } landing-title leading-none text-center`}
        >
          Freelance Developer.
        </h1>
        <p
          className={`opacity-0 ${
            animated ? "fadeInSlideUp-3rd" : ""
          } landing-description text-center pt-8 px-8 mx-auto md:w-3/4`}
        >
          I help people turn their ideas into websites & apps that work.
          <br />
          Professional and Cost-Effective. Always.
        </p>
      </main>
      <div
        className={`opacity-0 ${
          animated ? "fadeInSlideUp-4th" : ""
        } landing-buttons-container pt-16 flex flex-col justify-center md:flex-row md:justify-center md:items-center`}
      >
        <a
          href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!&body=Hi%20Rey!%20:)"
          className="landing-cta-1 py-4 px-12 mx-auto md:ml-0 md:mr-4 my-2 rounded-md shadow-md font-semibold"
        >
          Chat with Rey
        </a>
        {/* <div className="view-projects-container py-4 px-8 mx-auto md:mr-0 md:ml-4 font-semibold">
          <Link to="/projects" className="flex flex-row items-center">
            <div className="view-projects-icon-container h-8 w-8 mx-2 border-solid border rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={"chevron-right"} />
            </div>
            <span>View Projects</span>
          </Link>
        </div> */}
      </div>
      <div
        className={`opacity-0 ${
          animated ? "fadeIn-5th" : ""
        } landing-icons-container flex flex-row justify-center py-8`}
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
    </section>
  )
}

export default Landing
