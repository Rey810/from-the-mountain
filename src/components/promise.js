import React from "react"

const promise = () => {
  return (
    <section className="promise-container pl-4 pb-20">
      <h1 className="promises-header text-4xl font-bold">
        I'll always promise you this:
      </h1>
      <div className="promise-1-container pt-8">
        <h6 className="promise-header flex flex-row items-center pb-2">
          Fast products that work
        </h6>
        <p className="promise-description">
          My passion for this ensures excellence in your final product. The
          internet is fragile. Your site won't be.
        </p>
      </div>
      <div className="promise-2-container pt-8">
        <h6 className="promise-header flex flex-row items-center pb-2">
          A healthy relationship
        </h6>
        <p className="promise-description">
          Communication is key in any relationship, ours included. No dramas or
          difficult relationships. I'm here to make your life easier.
        </p>
      </div>
    </section>
  )
}

export default promise
