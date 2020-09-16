import React from "react"

const PaddingContainer = props => {
  let paddingX = null
  let paddingY = null

  let padding = []
  if (props.X) {
    paddingX = "px-4 md:px-24 lg:px-16"
    padding.push(paddingX)
  }

  if (props.Y) {
    paddingY = "pt-16 pb-20 lg:pt-32 lg:pb-40"
    padding.push(paddingY)
  }

  padding = padding.join(" ")

  return (
    <div id={props.id} className={`${props.type} ${padding}`}>
      {props.children}
    </div>
  )
}

export default PaddingContainer
