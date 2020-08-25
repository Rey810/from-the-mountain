import React from "react"

const PaddingContainer = props => {
  let paddingX = null
  let paddingY = null

  let padding = []
  if (props.X) {
    paddingX = "md:px-24"
    padding.push(paddingX)
  }

  if (props.Y) {
    paddingY = "md:pt-32 md:pb-40"
    padding.push(paddingY)
  }

  console.log(padding)
  padding = padding.join(" ")
  console.log("padding", padding)

  return <div className={`${props.type} ${padding}`}>{props.children}</div>
}

export default PaddingContainer
