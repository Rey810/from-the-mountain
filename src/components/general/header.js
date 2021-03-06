import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Avatar from "../images/avatar"

const Header = ({
  canSee = false,
  isPortfolioHeader = false,
  isPostHeader = false,
  isCaseStudy = false,
}) => {
  const [visible, setVisible] = useState(canSee)

  const toggleVis = () => {
    if (window.scrollY > 600) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }
  // runs after the first render and after every update
  // a new function is passed into useEffect (remember, each object/function is a separate thing) eah render which makes each effect "belong" to a render
  // If your effect returns a function, React will run it when it is time to clean up
  // i.e. when the component unmounts and also after the previous render
  // for multiple hooks, they're run in the order they're defined
  useEffect(() => {
    /* This prevents a listener from being added if canSee is false which means that the current location is not on the Latest Posts page. Therefore things can continue as normal. If we are on the Latest Posts page then I don't want the header to disappear if the user scrolls */
    if (!canSee) window.addEventListener("scroll", toggleVis)
    // It also cleans up effects from the previous render before runnnig effects the next time
    return () => window.removeEventListener("scroll", toggleVis)
  }, [visible])

  // adds an extra class if a header other than the post header is being displayed
  const extraClasses = []
  if (visible) {
    extraClasses.push("visible")
  }

  // adds specific header links if the header is the post header
  let avatar = (
    <Link to="/" class="logo">
      <div className="home-section flex flex-row items-center">
        <div className="avatar-container flex justify-center h-8 mx-auto ">
          <div className="avater-image-container relative w-8">
            <Avatar />
          </div>
        </div>
        <span className="text-base ml-2 logo-name">FTM</span>
      </div>
    </Link>
  )

  // adds specific header links if the header is the landing page header
  let additionalLinks = isPortfolioHeader ? (
    <Link
      to="#Connect"
      className="contact-mail contact-button mx-auto header-contact-button center py-2 px-6 font-semibold shadow-md rounded-md"
      target="_blank"
    >
      HIRE ME
    </Link>
  ) : (
    <Link
      to="/#Connect"
      className="contact-mail contact-button mx-auto header-contact-button center py-2 px-6 font-semibold shadow-md rounded-md"
    >
      {isCaseStudy ? "HIRE ME" : "LET'S CONNECT!"}
    </Link>
  )

  return (
    <header>
      <nav
        className={`fixed top-0 z-10 flex flex-row justify-between items-center w-full p-4 md:px-24 ${extraClasses.join(
          " "
        )}`}
      >
        {avatar}
        <div className="header-icons">{additionalLinks}</div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
