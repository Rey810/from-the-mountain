import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function benefits() {
  return (
    <section className="benefit-container relative pb-20 xl:pb-32 pl-4 md:pl-8 lg:pl-12 xl:pl-16">
      <h2 className="benefits-header font-bold pb-8 md:pb-4">Benefits</h2>
      <div className="all-benefits-container md:grid md:grid-cols-2 md:grid-rows-3 md:col-gap-2">
        <div className="benefit-1-container flex flex-row items-center md:pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header pl-2">
            Attract clients who value quality
          </p>
        </div>
        <div className="benefit-2-container flex flex-row items-center pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header pl-2">
            Get more time to focus on your business
          </p>
        </div>
        <div className="benefit-3-container flex flex-row items-center pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header pl-2">
            Own a beautiful website that works 24/7
          </p>
        </div>
        <div className="benefit-4-container flex flex-row items-center pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header  pl-2">
            Turn leads into paying customers
          </p>
        </div>
        <div className="benefit-5-container flex flex-row items-center pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header pl-2">
            Build trust with your ideal clients
          </p>
        </div>
        <div className="benefit-6-container flex flex-row items-center pt-4">
          <FontAwesomeIcon
            icon={["far", "check-circle"]}
            size="lg"
            className="benefit-icon"
          />
          <p className="benefit-header pl-2">
            Reach a larger, more curious audience
          </p>
        </div>
      </div>
    </section>
  )
}
