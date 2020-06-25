import React from "react"
import SubscriptionForm from "../components/subscriptionForm"

export default function subscribe() {
  return (
    <section
      id="connect-section"
      className="flex flex-col sm:flex-row rounded-lg mx-auto px-4 mt-20 sm:w-10/12 md:w-2/3"
    >
      <div className="subscribe-text bg-gray-200 p-8 flex flex-col w-full sm:w-1/2 mt-0">
        <h1 className="text-gray-900 text-2xl font-medium">
          Want to See More Stuff Like This?
        </h1>
        <p className="text-sm text-gray-500 mt-3">
          I publish every full moon... roughly. You'll be the first to know when
          there's something new.
        </p>
      </div>
      <div className="subscribe-action bg-gray-200 p-8 flex flex-col w-full sm:w-1/2 mt-0">
        <p className="text-gray-900 text-base font-light mx-auto mb-4">
          Your email address
        </p>
        <SubscriptionForm tags={["developer"]} />
        <p className="text-xs text-gray-500">
          Powered by ConvertKit and a healthy dose of cynicism. Subsribe
          anytime.
        </p>
      </div>
    </section>
  )
}
