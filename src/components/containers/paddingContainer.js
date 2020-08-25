import React from "react"

const PaddingContainer = props => {
  let paddingX = "md:px-24"
  if (props.paddingXLarge) {
    paddingX = "md:px-40"
  }
  return (
    <div className={`${props.type} ${paddingX} md:pt-32 md:pb-40`}>
      {props.children}
    </div>
  )
}

export default PaddingContainer
