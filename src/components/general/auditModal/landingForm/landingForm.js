import React from "react"
import SubscriptionForm from "../../../blog/subscribe/subscriptionForm"
import CheckCricle from "../../../../assets/icons/checkCircle"
import classes from "./landingForm.module.css"
import Close from "../../../general/close"
export default function landingForm(props) {
  return (
    <section
      id="connect"
      className={`${classes.LandingForm} ${
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
        <div
          className={`header-container hidden md:block ${
            props.inLine ? "md:hidden" : "md:flex md:justify-center"
          }`}
        >
          <h1 className="text-2xl font-medium md:pr-2">It's Free.</h1>
          <h1 className="text-2xl font-medium md:pr-2">It's Fast.</h1>
          <h1 className="text-2xl font-medium md:pr-2">It's Yours.</h1>
        </div>
        <div className="header-container">
          <h1
            className={`text-2xl font-medium ${
              props.inLine ? "md:block" : "md:hidden"
            }`}
          >
            {props.inLine
              ? "Get a free technical report"
              : "Get Your Site Report"}
          </h1>
        </div>
        <p className="text-sm mt-6 mb-3">
          {props.inLine
            ? "Let me review your existing site before you commit to working with me on an awesome new one. "
            : null}
          In your FREE report, you will understand exactly where your site can
          improve:
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
          Report will be in your inbox real soon! <br />
          Please allow 24hrs as I'm crazy about attention to detail.
        </p>
      </div>
    </section>
  )
}
