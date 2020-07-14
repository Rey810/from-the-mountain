import React from "react"
import ServiceCard from "./serviceCard"

const services = () => {
  const service1 = {
    title: "Own a Website that Works",
    description:
      "You want a website. It must look great and you want it to work... All the time. Well, that's why I'm here! I help you by designing, building, and hosting a beautiful site that'll make you a very proud owner. Promise.",
    icon: "award",
  }

  const service2 = {
    title: "Control the Features",
    description:
      "Do you feel restricted by all the drag-and-drop web builders out there? I provide a custom solution that fits your exact needs. At the end, you'll own a fast, great looking site.",
    icon: "code",
  }

  const service3 = {
    title: "Sell Your Stuff Online",
    description:
      "You have an idea. You want to turn it into an online business without all the hassle. Perfect! I'm here to help you set up an e-commerce store that looks amazing and works like a charm.",
    icon: "shopping-cart",
  }

  const service4 = {
    title: "Become Famous with SEO",
    description:
      "An impressive Google ranking means more people see your fantastic blog post or revolutionary product. I ensure you have a great ranking with best SEO practices. Give your content the audience it deserves!",
    icon: ["far", "thumbs-up"],
  }

  return (
    <section className="services-container pb-24 pl-4 md:px-8 lg:px-12 xl:px-16">
      <h2 className="services-header pb-12">Ways I Can Help You</h2>
      <div className="serviceCards-container flex flex-no-wrap px-2 overflow-x-auto scrolling-touch md:grid md:grid-cols-2 md:gap-4 md:pl-0 lg:w-3/4 lg:gap-8 xl:w-5/6 xl:gap-12 xl:mr-auto">
        <ServiceCard
          title={service1.title}
          description={service1.description}
          icon={service1.icon}
        />
        <ServiceCard
          title={service4.title}
          description={service4.description}
          icon={service4.icon}
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
      <div className="cta pt-4 pr-4 md:pr-8 lg:pr-12 xl:pr-16">
        Interested?{" "}
        <a
          href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!"
          className="text-link"
        >
          hi@fromthemountain.co.za
        </a>
      </div>
    </section>
  )
}

export default services
