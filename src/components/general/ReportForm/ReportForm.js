import React from "react"
import SubscriptionForm from "../../blog/subscribe/subscriptionForm"
import CheckCricle from "../../../assets/icons/checkCircle"
import classes from "./ReportForm.module.css"
import Close from "../close"

export default function ReportForm(props) {
  return (
    <section
      className={`${classes.ReportForm} ${
        props.inLine ? "relative" : "absolute z-20"
      } ${
        props.theme === "dark" ? "dark" : "light"
      } connect-form flex flex-col sm:flex-row rounded-lg mx-auto ${
        props.inLine ? "sm:w-10/12 md:w-2/3" : "sm:w-10/12 md:w-2/3 px-4 my-20"
      }`}
    >
      {props.inLine ? null : <Close close={props.close} />}
      <div
        className={`subscribe-text-container ${
          props.inLine ? "pb-8" : "p-8"
        } -mb-px flex flex-col justify-between w-full sm:w-1/2 sm:mb-0 sm:-mr-px mt-0`}
      >
        <div className="header-container">
          <h3 className="text-2xl font-medium">
            Book Your Free Technical Report
          </h3>
        </div>
        <p className="text-sm mt-6 mb-3 xl:my-3 xl:w-3/4">
          {props.inLine
            ? "Let me review your existing (or pre-deployment) site before you commit to working with me on an awesome new one. "
            : null}
          In your FREE site analysis, you will understand exactly where your
          site can improve:
        </p>
        <div className="report-container mt-4 grid grid-cols-3 md:grid-cols-2 gap-y-8">
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">SITE SPEED</p>
          </div>
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">SEO</p>
          </div>
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">FLUID DESIGN</p>
          </div>
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">ACCESSIBILITY</p>
          </div>
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">BEST PRACTICES</p>
          </div>
          <div className="check-container flex items-center flex-col">
            <CheckCricle />
            <p className="text-xs pt-1">EASE OF USE</p>
          </div>
        </div>
      </div>
      <div
        className={`subscribe-action pt-0 ${
          props.inLine ? null : "px-8"
        } pb-8 flex flex-col w-full mt-0 sm:w-1/2 sm:p-8`}
      >
        <SubscriptionForm tags={["potential client"]} audit />
        <p className="form-footer-text text-xs">
          I'll be sending you a few questions to build your best report. Keep an
          eye on your email (and spam if we haven't chatted in the past)
        </p>
      </div>
    </section>
  )
}
