import React from "react"

const promise = () => {
  return (
    <section className="promise-container pl-4 pb-20">
      <h1 className="promises-header text-4xl font-bold">
        I will always promise this to you:
      </h1>
      <div className="promise-1-container pt-8">
        <h6 className="promise-header font-semibold flex flex-row items-center pb-2">
          Fast products that work
        </h6>
        <p className="promise-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros
        </p>
      </div>
      <div className="promise-2-container pt-8">
        <h6 className="promise-header font-semibold flex flex-row items-center pb-2">
          A healthy relationship
        </h6>
        <p className="promise-description">
          No nonsense approach to clear communication and other stuff here about
          relationship
        </p>
      </div>
    </section>
  )
}

export default promise
