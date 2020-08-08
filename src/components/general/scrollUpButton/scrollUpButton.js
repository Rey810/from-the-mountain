import React, { useState, useEffect } from "react"
import classes from "./scrollUpButton.module.css"

const ScrollUpButton = props => {
  const color = props.isPostHeader ? "black" : "white"
  // hides when viewer is on a blog post on mobile
  // default state. This display is changed on desktop
  const hiddenMobile = props.isPostHeader ? "hidden" : null

  // handles appearance of button depending on scroll position
  const [visible, setVisible] = useState(false)

  const toggleVis = () => {
    if (window.scrollY > 200) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVis)
    // Cleans up the hook by removing the eventlistener when the component
    // It also cleans up effects from the previous render before runnnig effects the next time
    return () => window.removeEventListener("scroll", toggleVis)
  }, [visible])

  const opacity = visible ? "opacity-75" : "opacity-0"

  return (
    //scrolls up to <a id="top"> which sits above <main> in layout to always be at the top of the document.
    <a
      href="#top"
      className={`${opacity} ${classes.initial} ${hiddenMobile} mb-6 lg:block lg:mr-12 xl:mr-16 md:mb-8 lg:mb-12 xl:mb-16`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        fill={color}
        width="48px"
        height="48px"
      >
        <g>
          <rect fill="none" height="24" width="24" />
          <path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z" />
        </g>
      </svg>
    </a>
  )
}

export default ScrollUpButton
