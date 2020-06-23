import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = ({ siteTitle, canSee = false }) => {
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
    return () => window.removeEventListener("scroll", toggleVis)
  }, [visible])

  return (
    <header
      className={`fixed top-0 z-10 flex flex-row justify-end w-full py-3 px-4 md:px-8 lg:px-12 xl:px-16 shadow ${
        visible ? "visible" : ""
      }`}
    >
      {/* <ThemeControl /> */}
      <div className="header-icons">
        <a href="#connect-section" className="contact-mail mx-auto">
          <button className="contact-button header-contact-button center py-2 px-6 font-semibold shadow-md rounded-full">
            Let's Connect!
          </button>
        </a>{" "}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
