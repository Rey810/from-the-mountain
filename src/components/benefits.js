import React from "react"

export default function benefits() {
  return (
    <section className="benefit-container pl-4 pb-20">
      <h1 className="benefits-header text-4xl font-bold">Benefits</h1>
      <div className="all-benefits-container md:w-2/3 md:grid md:grid-cols-2 md:grid-rows-3">
        <div className="benefit-1-container pt-4 ">
          <p className="benefit-header flex flex-row items-center pb-2">
            Attract clients who value quality
          </p>
        </div>
        <div className="benefit-2-container pt-4">
          <p className="benefit-header flex flex-row items-center pb-2">
            Feel confident in your business or blog
          </p>
        </div>
        <div className="benefit-3-container pt-4">
          <p className="benefit-header flex flex-row items-center pb-2">
            Own a beautiful website that works 24/7
          </p>
        </div>
        <div className="benefit-4-container pt-4">
          <p className="benefit-header flex flex-row items-center pb-2">
            Turn leads into paying customers
          </p>
        </div>
        <div className="benefit-5-container pt-4">
          <p className="benefit-header flex flex-row items-center pb-2">
            Build trust with your ideal clients
          </p>
        </div>
        <div className="benefit-6-container pt-4">
          <p className="benefit-header flex flex-row items-center pb-2">
            Reach a larger, more curious audience
          </p>
        </div>
      </div>
    </section>
  )
}
