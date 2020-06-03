import React from "react"

const serviceCard = props => {
  const { title, description } = props
  return (
    <div className="service-card">
      <h6 className="card-header">{title}</h6>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default serviceCard
