import React from "react"
import ServiceCard from "./serviceCard"

const services = () => {
  const service1 = {
    title: "Building your Custom Site",
    description:
      "Need a refresh on your old dusty Wordpress site? I use the latest proven tech to add that style you sorely need.",
  }

  const service2 = {
    title: "Implementing an E-Commerce Site",
    description: "Words about an emmorce site blaah bliu blip blop",
  }

  return (
    <section className="services-container">
      <h1 className="services-header">Ways I Can Help You</h1>
      <ServiceCard title={service1.title} description={service1.description} />
      <ServiceCard title={service2.title} description={service2.description} />
    </section>
  )
}

export default services
