import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import classes from "./BackButton.module.css"

const BackButton = ({ children, to, theme }) => {
  let colorTheme = theme === "dark" ? classes.Dark : classes.Light
  return (
    <div className={`${classes.BackButton}`}>
      <Link to={`${to}`} className={` ${colorTheme} group pr-4 py-4`}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
          className="mr-4 transition transform group-hover:scale-125 duration-150 ease-in "
        />{" "}
        <span className="inline-block text-lg opacity-0 transition duration-150 ease-in group-hover:opacity-100">
          {children}
        </span>
      </Link>
    </div>
  )
}

export default BackButton
