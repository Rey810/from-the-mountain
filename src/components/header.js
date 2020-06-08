import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import ThemeControl from "../components/themeControl"
import "../styles/util.css"

export default function Header({ siteTitle }) {
  return (
    <header className="flex flex-row justify-end fixed w-full bg-white p-2 lg:p-4 xl:p-6">
      {/* <ThemeControl /> */}
      <a href="https://twitter.com/ReyTheDev" class="px-4">
        <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
      </a>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
