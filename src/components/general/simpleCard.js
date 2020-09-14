import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SimpleCard = props => {
  const {
    title,
    description,
    descriptionSize = "text-base",
    icon,
    centerHeader = false,
    headerSize = "text-base",
    perfectSquare = false,
    padding = 8,
  } = props
  return (
    <div
      className={`${
        perfectSquare ? "absolute w-full h-full" : null
      } service-card card-color mx-2 mb-8 ${padding} w-5/6 rounded-md shadow-md md:mx-0 md:mb-0 md:w-1/1 md:shadow-lg`}
    >
      {icon ? (
        <div
          className={`icon-container p-4 w-12 h-12 rounded-full flex items-center justify-center`}
        >
          <FontAwesomeIcon
            icon={icon}
            size="lg"
            className="service-card-icon"
          />
        </div>
      ) : null}
      <h3
        className={`${centerHeader ? "text-center" : null} ${headerSize}
        } card-header font-bold pt-2 pb-4 tracking-wider`}
      >
        {title}
      </h3>
      <p className={`card-description ${descriptionSize}`}>{description}</p>
    </div>
  )
}

export default SimpleCard
