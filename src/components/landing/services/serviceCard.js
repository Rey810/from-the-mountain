import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const serviceCard = props => {
  const {
    title,
    description,
    icon,
    centerHeader = false,
    headerSize = false,
    perfectSquare = false,
    padding = 8,
  } = props
  return (
    <div
      className={`${
        perfectSquare ? "absolute w-full h-full" : null
      } service-card card-color mx-2 mb-8 px-${padding} py-${padding} w-5/6 flex-grow-0 flex-shrink-0 flex-basis-auto rounded-md shadow-md md:mx-0 md:mb-0 md:w-1/1 md:shadow-lg`}
    >
      {icon ? (
        <div
          className={`icon-container p-4 w-12 h-12 inline-block rounded-full flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={icon}
            size="lg"
            className="service-card-icon"
          />
        </div>
      ) : null}
      <h3
        className={`${centerHeader ? "text-center" : null} ${
          headerSize ? headerSize : null
        } card-header font-bold pt-2 pb-4`}
      >
        {title}
      </h3>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default serviceCard
