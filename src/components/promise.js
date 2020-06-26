import React from "react"

const promise = () => {
  return (
    <section className="promise-container pb-20 pr-4 md:pr-8 lg:pr-12 xl:pr-16">
      <h1 className="promises-header font-bold">I always promise this</h1>
      <div className="promises-container lg:grid lg:grid-cols-2">
        <div className="promise-1-container pt-8">
          <h6 className="promise-header pb-2 font-bold flex items-center">
            Fast products that work
          </h6>
          <p className="promise-description sm:w-2/3 lg:w-10/12">
            My passion for this ensures excellence in your final product. The
            internet is fragile. Your site won't be.
          </p>
        </div>
        <div className="promise-2-container pt-8">
          <h6 className="promise-header pb-2 font-bold flex items-center">
            A healthy relationship
          </h6>
          <p className="promise-description sm:w-2/3 lg:w-10/12">
            Communication is key in any relationship, ours included. No dramas
            or difficult relationships. I'm here to make your life easier.
          </p>
        </div>
      </div>
    </section>
  )
}

export default promise
