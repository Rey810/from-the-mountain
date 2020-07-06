import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import Avatar from "../components/images/avatar"

const Header = ({
  siteTitle,
  canSee = false,
  isLinksHeader = false,
  isPostHeader = false,
}) => {
  const [visible, setVisible] = useState(canSee)

  const toggleVis = () => {
    console.log("handleScroll header firing!", window.scrollY)
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
    console.log("using effect")
    /* This prevents a listener from being added if canSee is false which means that the current location is not on the Latest Posts page. Therefore things can continue as normal. If we are on the Latest Posts page then I don't want the header to didsappear if the user scrolls */
    if (!canSee) window.addEventListener("scroll", toggleVis)
    // Cleans up the hook by removing the eventlistener when the component
    // It also cleans up effects from the previous render before runnnig effects the next time
    return () => window.removeEventListener("scroll", toggleVis)
  }, [visible])

  return (
    <header
      className={`fixed top-0 z-10 flex flex-row justify-between items-center w-full ${
        isPostHeader ? "" : "py-4 px-4"
      } md:px-8 lg:px-12 xl:px-16 ${visible ? "visible" : ""}`}
    >
      {isPostHeader ? (
        <Link to="/blog" className="p-4">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      ) : (
        <Link to="/">
          <div className="home-section flex flex-row items-center">
            <div className="avatar-container flex justify-center h-8 mx-auto ">
              <div className="avater-image-container relative w-8">
                <Avatar />
              </div>
            </div>
            <h1 className="text-base ml-2">FTM</h1>
          </div>
        </Link>
      )}
      <div className="header-icons">
        {isLinksHeader ? (
          <div className="inner-links-container">
            <Link to="/#What-I-Do" className="ml-4">
              What I Do
            </Link>
            {/* <Link to="/projects/#Toolbox" className="ml-4">
              Tech
            </Link> */}
            <Link to="/blog" className="ml-4">
              Blog
            </Link>
            <Link to="/#Connect" className="ml-4">
              Contact
            </Link>
          </div>
        ) : (
          <a href="#connect" className="contact-mail mx-auto">
            <button className="contact-button header-contact-button center py-2 px-6 font-semibold shadow-md rounded-md">
              Let's Connect!
            </button>
          </a>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
