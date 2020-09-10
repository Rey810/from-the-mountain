// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeatherArrowRightCircle from "../../assets/icons/featherArrowRightCircle"
import HeroMan from "../../assets/illustrations/heroMan"
import Avatar from "../images/avatar"
// import Background from "../images/background"
import { Link } from "gatsby"
import Modal from "../general/auditModal/Modal"
import LandingForm from "../general/auditModal/landingForm/landingForm"

const Landing = () => {
  const [animated, setAnimated] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // runs after the first render and after every update
  // a new function is passed into useEffect (remember, each object/function is a separate thing) eah render which makes each effect "belong" to a render
  useEffect(() => {
    setAnimated(true)
  }, [animated])

  const modalToggleHandler = () => {
    setShowModal(!showModal)
  }
  const modalCloseHandler = () => {
    setShowModal(false)
  }

  console.log(showModal)

  return (
    <section
      id="What-I-Do"
      className="landing-container md:flex md:justify-center md:items-center md:flex-row md:min-h-screen md:pb-8"
    >
      <Modal toggleModal={modalToggleHandler} show={showModal}>
        <LandingForm theme="dark" close={modalCloseHandler} />
      </Modal>

      <div className="text-wrapper flex justify-center items-center">
        <div>
          <div
            className={`opacity-0 ${
              animated ? "fadeInSlideUp-1st" : ""
            } avatar-container flex justify-left h-14 md:hidden mb-4`}
          >
            <div className="avater-image-container relative w-14">
              <Avatar />
            </div>
            <div className="avatar-name-container flex items-center pl-4">
              <span className="opacity-80">Rey van den Berg</span>
            </div>
          </div>
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
              <button
                className="btn landing-cta-1"
                onClick={modalToggleHandler}
              >
                <div className="free-ribbon absolute py-1 px-4 rounded-md text-sm">
                  Free
                </div>
                Get Site Review
              </button>
              <Link
                to="/#services"
                className="view-projects-container btn flex flex-row items-center"
              >
                <FeatherArrowRightCircle />
                <span className="w-1/1 text-center">View Services</span>
              </Link>
            </div>
            <div
              className={`opacity-0 ${
                animated ? "fadeIn-5th" : ""
              } landing-icons-container flex flex-col justify-center ml-10 md:ml-18`}
            >
              <a
                aria-label="Find Rey on Twitter"
                className="landing-icons icon px-4"
                href="https://twitter.com/ReyTheDev"
                target="_blank"
                rel="noopener norefferer"
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
                target="_blank"
                rel="noopener norefferer"
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
                target="_blank"
                rel="noopener norefferer"
              >
                <FontAwesomeIcon
                  title="Find Rey on LinkedIn"
                  icon={["fab", "linkedin"]}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`opacity-0 ${
          animated ? "fadeIn-6th" : ""
        } img-wrapper hidden md:flex md:justify-center md:items-center `}
      >
        <HeroMan />
      </div>
    </section>
  )
}

export default Landing
