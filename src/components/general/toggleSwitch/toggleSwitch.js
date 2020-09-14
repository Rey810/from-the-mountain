import React from "react"
import classes from "./toggleSwitch.module.css"

const toggleSwitch = props => {
  return (
    <div
      className={`${classes.toggleSwitchWrapper} flex justify-center my-16 md:mt-32 md:mb-16`}
    >
      <button
        className={`rounded-l-md w-32 ${
          props.showSites ? classes.active : classes.inactive
        } ${classes.toggleArea}`}
        onClick={props.toggleProjects}
      >
        Websites
      </button>
      <button
        className={`rounded-r-md w-32 ${
          props.showSites ? classes.inactive : classes.active
        } ${classes.toggleArea}`}
        onClick={props.toggleProjects}
      >
        Apps/Games
      </button>
    </div>
  )
}

export default toggleSwitch
