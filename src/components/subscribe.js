import React from "react"

export default function subscribe() {
  return (
    <section
      id="contact-section"
      className="flex flex-col sm:flex-row rounded-lg mx-auto px-4 w-3/4 sm:w-10/12 md:w-2/3 lg:w-1/2 mt-20"
    >
      <div className="subscribe-text bg-gray-200 p-8 flex flex-col w-full mt-0">
        <h1 className="text-gray-900 text-2xl font-medium">
          Want to See More Stuff Like This?
        </h1>
        <p className="text-sm text-gray-500 mt-3">
          I publish every full moon... roughly. You'll be the first to know when
          there's something new.
        </p>
      </div>
      <div className="subscribe-action bg-gray-200 p-8 flex flex-col w-full mt-0">
        <p className="text-gray-900 text-base font-light mx-auto mb-4">
          Your email address
        </p>
        <input
          className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4"
          placeholder="your.email@domain.com"
          type="email"
        />
        <button className="subscribe-button text-white text-lg font-semibold border-0 py-2 px-8 rounded ">
          Stay Curious
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Powered by ConvertKit and a healthy dose of cynicism. Subsribe
          anytime.
        </p>
      </div>
    </section>
  )
}
