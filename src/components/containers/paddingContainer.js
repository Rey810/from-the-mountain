import React from "react"

const PaddingContainer = props => {
  return (
    <div className={`${props.type} px-24 pt-32 pb-40`}>{props.children}</div>
  )
}

export default PaddingContainer
