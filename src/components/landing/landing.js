// Creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
// Similar to componentDidMount and componentDidUpdate
// useEffect gets run after initial component render
// re-run with each new render: triggered by the state change
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FeatherArrowRightCircle from "../../assets/icons/featherArrowRightCircle"
import Avatar from "../images/avatar"
import { Link } from "gatsby"
import Modal from "../general/Modal/Modal"
import ReportForm from "../general/ReportForm/ReportForm"
import Img from "gatsby-image"

const Landing = props => {
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

  return (
    <section
      id="What-I-Do"
      className="landing-container pattern-bg md:flex md:justify-center md:items-center md:flex-row md:min-h-screen md:pb-8"
    >
      <Modal toggleModal={modalToggleHandler} show={showModal}>
        <ReportForm theme="dark" close={modalCloseHandler} />
      </Modal>

      <div className="text-wrapper flex justify-center items-center">
        <div>
          <div className="avatar-container flex justify-left h-14 md:hidden mb-8">
            <div className="avater-image-container relative w-14">
              <Avatar />
            </div>
            <div className="avatar-name-container flex items-center pl-4">
              <span className="opacity-80">Rey van den Berg</span>
            </div>
          </div>
          <h1
            className={`opacity-0 ${
              animated ? "fadeInSlideUp-1st" : null
            } landing-title leading-none`}
          >
            Freelance <br /> Developer
          </h1>
          <p
            className={`opacity-0 ${
              animated ? "fadeInSlideUp-2nd" : null
            } landing-description my-12 lg:mt-8 lg:mb-4 xl:my-12`}
          >
            Helping people turn their ideas into <br /> sites & apps that work.{" "}
            <br />
            Professional and Cost-Effective. <br /> Always.
          </p>
          <div className="cta-container flex flex-row">
            <div
              className={`opacity-0 ${
                animated ? "fadeInSlideUp-3rd" : null
              } landing-buttons-container`}
            >
              {/* <button
                className="btn landing-cta-1"
                onClick={modalToggleHandler}
              >
                <div className="free-ribbon absolute py-1 px-4 rounded-md flex items-center">
                  <span className="price line-through text-base mr-1 lg:mr-2">
                    $25
                  </span>
                  <span className="italic font-semibold text-sm">FREE</span>
                </div>
                Get Site Review
              </button> */}
              <Link to="/#Connect" className="btn landing-cta-1">
                <span className="w-1/1 text-center inline-block">HIRE ME</span>
              </Link>
              <Link
                to="/#services"
                className="view-projects-container btn flex fex-row items-center"
              >
                <FeatherArrowRightCircle />
                <span className="w-1/1 text-center">VIEW SERVICES</span>
              </Link>
            </div>
            <div
              className={`opacity-0 ${
                animated ? "fadeIn-4th" : null
              } landing-icons-container flex flex-col justify-center ml-10 md:ml-18`}
            >
              <a
                title="Find Rey on Twitter"
                aria-label="Find Rey on Twitter"
                className="landing-icons icon px-4"
                href="https://twitter.com/ReyTheDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="Find Rey on Twitter"
                  icon={["fab", "twitter"]}
                />
              </a>
              <a
                aria-label="See Rey's Code on Github"
                title="See Rey's Code on Github"
                className="landing-icons icon px-4"
                href="https://github.com/Rey810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  title="See Rey's Code on Github"
                  icon={["fab", "github"]}
                />
              </a>
              <a
                aria-label="Find Rey on LinkedIn"
                title="Find Rey on LinkedIn"
                className="landing-icons icon px-4"
                href="https://www.linkedin.com/in/rey810/"
                target="_blank"
                rel="noopener noreferrer"
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
          animated ? "fadeIn-5th" : ""
        } img-wrapper hidden lg:block lg:w-2/5`}
      >
        <Img fluid={props.heroMan.childImageSharp.fluid} />
      </div>
    </section>
  )
}

export default Landing
