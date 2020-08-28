import React from "react"

const PaddingContainer = props => {
  let paddingX = null
  let paddingY = null

  let padding = []
  if (props.X) {
    paddingX = "px-4 md:px-24"
    padding.push(paddingX)
  }

  if (props.Y) {
    paddingY = "pt-16 pb-20 md:pt-32 md:pb-40"
    padding.push(paddingY)
  }

  padding = padding.join(" ")

  return <div className={`${props.type} ${padding}`}>{props.children}</div>
}

export default PaddingContainer
