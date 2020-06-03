import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ThemeControl from "../components/themeControl"
import "../styles/util.css"

export default function Header({ siteTitle }) {
  return (
    <header className="border-bottom">
      <ThemeControl />
      <a href="https://twitter.com/ReyTheDev">
        <FontAwesomeIcon
          icon={["fab", "twitter"]}
          className="black-icon space-1__margin"
        ></FontAwesomeIcon>
      </a>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
