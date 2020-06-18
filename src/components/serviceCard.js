import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const serviceCard = props => {
  const { title, description, icon } = props
  return (
    <div className="service-card card-color mx-2 mb-8 px-8 pt-32 pb-8 w-3/4 flex-grow-0 flex-shrink-0 flex-basis-auto rounded-md shadow-md md:w-1/2 md:shadow-lg lg:w-1/3">
      <FontAwesomeIcon icon={icon} size="2x" />
      <h6 className="card-header font-bold py-4">{title}</h6>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default serviceCard
