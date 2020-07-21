import React from "react"
import SubscriptionForm from "./subscriptionForm"

export default function subscribe({ theme }) {
  return (
    <section
      id="connect"
      className={`${
        theme === "dark" ? "dark" : "light"
      } connect-form flex flex-col sm:flex-row rounded-lg mx-auto px-4 pt-16 my-20 sm:w-10/12 md:w-2/3`}
    >
      <div className="subscribe-text-container p-8 -mb-px flex flex-col w-full sm:w-1/2 sm:mb-0 sm:-mr-px mt-0">
        <h1 className="text-2xl font-medium">
          Want to See More Stuff Like This?
        </h1>
        <p className="text-sm my-3 sm:mt-3">
          I publish roughly every full moon. You'll be the first to know when
          there's something new.
        </p>
      </div>
      <div className="subscribe-action pt-0 pl-8 pr-8 pb-8 flex flex-col w-full mt-0 sm:w-1/2 sm:p-8">
        <p className="text-base font-light mx-auto mb-4">Your email address</p>
        <SubscriptionForm tags={["developer"]} />
        <p className="form-footer-text text-xs">
          Powered by a healthy dose of optimism. No spam - ever. Unsubscribe
          anytime.
        </p>
      </div>
    </section>
  )
}
