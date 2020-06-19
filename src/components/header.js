import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import ThemeControl from "../components/themeControl"
import "../styles/util.css"

export default function Header({ siteTitle }) {
  return (
    <header className="fixed z-10 flex flex-row justify-end w-full py-4 px-4 md:px-8 lg:px-12 xl:px-16 bg-gray-900">
      {/* <ThemeControl /> */}
      <div className="header-icons">
        <a href="mailto:reyvdb@gmail.com" className="icon mx-2 md:mx-4">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
        <a href="https://twitter.com/ReyTheDev" className="icon ml-2 md:ml-4">
          <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
