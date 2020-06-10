import React from "react"
import ServiceCard from "./serviceCard"

const services = () => {
  const service1 = {
    title: "Build the Features You Want",
    description:
      "Do you feel restricted by all the drag-and-drop web builders out there? I provide a custom solution that fits your exact needs. No extra nonsense. Just a fast, great looking site owned completely by you.",
    icon: "code",
  }

  const service2 = {
    title: "Sell your Stuff Online",
    description:
      "You have an idea. You want to turn it into an online business without learning all the technical stuff like digital marketing, branding, and the inner workings of online sales dynamics. I'm here to help.",
    icon: "coffee",
  }

  const service3 = {
    title: "Become Famous",
    description:
      "Google decides your fame by ranking you. A bad ranking means less people see your fantastic blog post or revolutionary product. I ensure you have a great ranking with best SEO practices. Give your content the audience it deserves. Who knows, you might get famous.",
    icon: "beer",
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
        <ServiceCard
          title={service3.title}
          description={service3.description}
          icon={service3.icon}
        />
      </div>
      <div class="cta pl-4 pt-4">
        Interested?{" "}
        <a href="mailto:reyvdb@gmail.com" class="text-link">
          hello@mountain.co.za
        </a>
      </div>
    </section>
  )
}

export default services
