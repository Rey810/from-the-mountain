import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import ThemeControl from "../components/themeControl"
import "../styles/util.css"

export default function Header({ siteTitle }) {
  return (
    <header className="fixed flex flex-row justify-end w-full bg-white">
      {/* <ThemeControl /> */}
      <a href="https://twitter.com/ReyTheDev" className="py-4 pr-6">
        <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
      </a>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
