import React from "react"

const promise = () => {
  return (
    <section className="promise-container pb-20 px-4 md:px-8 lg:px-12 xl:px-16 xl:pb-32">
      <h1 className="promises-header font-bold">I always promise this</h1>
      <div className="promises-container lg:grid lg:grid-cols-2">
        <div className="promise-1-container pt-8">
          <div className="promise-header-container  pb-2 flex justify-start items-center">
            <div className="counter mr-4 flex justify-center items-center rounded-full font-bold">
              1
            </div>
            <h6 className="promise-header font-bold">
              Fast products that work
            </h6>
          </div>
          <p className="promise-description sm:w-2/3 lg:w-10/12">
            My passion for this ensures excellence in your final product. The
            internet is fragile. Your site won't be.
          </p>
        </div>
        <div className="promise-2-container pt-8">
          <div className="promise-header-container  pb-2 flex justify-start items-center">
            <div className="counter mr-4 flex justify-center items-center rounded-full font-bold">
              2
            </div>
            <h6 className="promise-header font-bold">A healthy relationship</h6>
          </div>
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
