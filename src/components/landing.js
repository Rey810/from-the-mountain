// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../components/images/avatar"
import Background from "../components/images/background"
import { Link } from "gatsby"

const Landing = () => {
  // const [goal, setGoal] = useState("Fans")
  // const [count, setCount] = useState(0)
  // // these need to be cycled through each second
  // const goals = ["Fans", "Readers", "Sales", "Features"]

  const [darken, setDarken] = useState(false)

  const handleScroll = () => {
    if (window.scrollY < 200) {
      setDarken(false)
    } else {
      setDarken(true)
    }
  }
  // runs after the first render and after every update
  // a new function is passed into useEffect (remember, each object/function is a separate thing) eah render which makes each effect "belong" to a render
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    // React will run returned function when it is time to clean up
    // i.e. when the component unmounts and also after the previous render
    // for multiple hooks, they're run in the order they're defined
    return () => window.removeEventListener("scroll", handleScroll)
  }, [darken])

  // const interval = setInterval(() => {
  //   setCount(count => (count === 3 ? 0 : count + 1))
  //   setGoal(goals[count])
  // }, 1000)
  // return () => clearInterval(interval)
  // })

  return (
    <section id="What-I-Do" className="landing-container pt-10 pb-20 my-auto">
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
        <div className="landing-name-container flex items-center pl-4">
          <span className="name font-semibold">Rey van den Berg</span>
        </div>
      </div>
      <main className="landing-container ">
        <h1 className="landing-title leading-none font-extrabold text-center">
          Freelance Developer
        </h1>
        <h6 className="landing-description text-center pt-8 px-8 ">
          I help people turn their ideas into websites & apps that work.
          Professional and Cost-Effective. Always.
        </h6>
      </main>
      <div className="landing-buttons-container pt-16 flex flex-col justify-center md:flex-row md:justify-center md:items-center">
        <a
          href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!&body=Hi%20Rey!%0D%0AI'm%20keen%20to%20chat%20about%20working%20together%20:)%0D%0AI%20look%20forward%20to%20hearing%20how%20we%20can%20take%20things%20forwards!%0D%0ACheers,%20%0D%0A-Insert%20name%20here,%20if you want%20:)"
          className="landing-cta-1 py-4 px-8 mx-auto md:ml-0 md:mr-4 my-2 rounded-md shadow-md font-semibold"
        >
          hi@fromthemountain.co.za
        </a>
        <div className="view-projects-container py-4 px-8 mx-auto md:mr-0 md:ml-4 shadow-md font-semibold">
          <Link to="/projects" className="flex flex-row items-center">
            <div className="view-projects-icon-container h-8 w-8 mx-2 border-solid border rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={"chevron-right"} />
            </div>
            <span>View Projects</span>
          </Link>
        </div>
      </div>
      <div className="landing-icons-container flex flex-row justify-center py-8">
        <a
          className="landing-icons icon px-4"
          href="https://twitter.com/ReyTheDev"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a className="landing-icons icon px-4" href="https://github.com/Rey810">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          className="landing-icons icon px-4"
          href="https://www.facebook.com/reynardv"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a
          className="landing-icons icon px-4"
          href="https://www.linkedin.com/in/rey810/"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </div>
    </section>
  )
}

export default Landing
