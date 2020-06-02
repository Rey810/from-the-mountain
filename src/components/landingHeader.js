import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fabTwitter } from "@fortawesome/free-solid-svg-icons"

export default function LandingHeader() {
  return (
    <header>
      <Link to="twitter.com/ReyTheDev">
        <FontAwesomeIcon icon={fabTwitter}></FontAwesomeIcon>
      </Link>
    </header>
  )
}
