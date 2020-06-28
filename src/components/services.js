import React from "react"
import ServiceCard from "./serviceCard"

const services = () => {
  const service1 = {
    title: "Have a Website that Works",
    description:
      "You want a website. It must look great and you want it to work.. all the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll make you a very proud owner. Promise.",
    icon: "award",
  }

  const service2 = {
    title: "Build the Features You Want",
    description:
      "Do you feel restricted by all the drag-and-drop web builders out there? I provide a custom solution that fits your exact needs. No extra nonsense. Just a fast, great looking site owned completely by you.",
    icon: "code",
  }

  const service3 = {
    title: "Sell your Stuff Online",
    description:
      "You have an idea. You want to turn it into an online business without learning all the technical stuff like digital marketing, branding, and the inner workings of online sales dynamics. I'm here to help.",
    icon: "shopping-cart",
  }

  const service4 = {
    title: "Become Famous",
    description:
      "Google decides your fame by ranking you. A bad ranking means less people see your fantastic blog post or revolutionary product. I ensure you have a great ranking with best SEO practices. Give your content the audience it deserves. Who knows, you might get famous.",
    icon: ["far", "thumbs-up"],
  }

  return (
    <section className="services-container pb-20 px-4 md:px-8 lg:px-12 xl:px-16 xl:pb-32 ">
      <h1 className="services-header pb-8 font-bold ">Ways I Can Help You</h1>
      <div className="serviceCards-container flex flex-no-wrap px-2 overflow-x-auto scrolling-touch md:grid md:grid-cols-2 md:gap-4 md:pl-0 lg:w-3/4 lg:gap-8 xl:gap-12">
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
        <ServiceCard
          title={service4.title}
          description={service4.description}
          icon={service4.icon}
        />
      </div>
      <div className="cta pt-4 pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        Interested?{" "}
        <a href="mailto:reyvdb@gmail.com" className="text-link">
          hello@mountain.co.za
        </a>
      </div>
    </section>
  )
}

export default services
