import React from "react"
import ServiceCard from "./serviceCard"

const services = () => {
  const service1 = {
    title: "Building your Custom Site",
    description:
      "Need a refresh on your old dusty Wordpress site? I use the latest proven tech to add that style you sorely need.",
    icon: "code",
  }

  const service2 = {
    title: "Implementing an E-Commerce Site",
    description: "Words about an emmorce site blaah bliu blip blop",
    icon: "coffee",
  }

  return (
    <section className="services-container pb-20 ">
      <h1 className="services-header px-4 pb-8 text-4xl font-bold">
        Ways I Can Help You
      </h1>
      <div class="serviceCards-container flex flex-no-wrap px-2 overflow-x-auto scrolling-touch">
        <ServiceCard
          title={service1.title}
          description={service1.description}
          icon={service1.icon}
        />
        <ServiceCard
          title={service2.title}
          description={service2.description}
          icon={service2.icon}
        />
      </div>
    </section>
  )
}

export default services
