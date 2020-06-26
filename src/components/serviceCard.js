import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const serviceCard = props => {
  const { title, description, icon } = props
  return (
    <div className="service-card card-color mx-2 mb-8 px-8 pt-24 pb-6 w-5/6 flex-grow-0 flex-shrink-0 flex-basis-auto rounded-md shadow-md md:w-1/2 md:shadow-lg lg:w-1/3">
      <div className="icon-container p-4 w-12 h-12 inline-block rounded-full flex items-center justify-center">
        <FontAwesomeIcon icon={icon} size="lg" className="service-card-icon" />
      </div>
      <h6 className="card-header font-bold py-4">{title}</h6>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default serviceCard
