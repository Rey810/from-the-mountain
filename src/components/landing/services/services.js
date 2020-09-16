import React from "react"
import PaddingContainer from "../../containers/paddingContainer"
import Img from "gatsby-image"

const Services = props => {
  const { graphsWoman, happyWoman, moneyWoman, robotWoman } = props
  return (
    <PaddingContainer id="services" type="service-container" X Y>
      <h2 className="text-center">Ways I can help you</h2>
      {/* Various benefits listed here */}
      <section className="service-items-container">
        <div className="service-item">
          <div className="service-text__left">
            <div className="service-text-wrapper lg:w-4/5">
              <h3>Own a Website that Works</h3>
              <p>
                You want a website. It must look great and you want it to
                work... All the time. Well, that's why I'm here! I help you by
                designing, building, and hosting a beautiful site that'll grow
                your business. Promise.
              </p>
            </div>
          </div>
          <div className="service-img flex items-center justify-center">
            <Img
              fluid={graphsWoman.childImageSharp.fluid}
              className="w-1/1 md:w-3/4"
            />
          </div>
        </div>
        <div className="service-item mobile-reverse">
          <div className="service-img flex items-center justify-center">
            <Img
              fluid={happyWoman.childImageSharp.fluid}
              className="w-1/1 md:w-3/4"
            />
          </div>
          <div className="service-text__right">
            <div className="service-text-wrapper lg:w-4/5">
              <h3>Become Famous with SEO</h3>
              <p>
                An impressive Google ranking means more people see your
                fantastic blog post or revolutionary product. I ensure you have
                a leading ranking with best SEO practices. Give your content the
                audience it deserves!
              </p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-text__left">
            <div className="service-text-wrapper lg:w-4/5">
              <h3>Control the Features</h3>
              <p>
                Do you feel restricted by all the drag-and-drop web builders out
                there? I provide a powerful custom code solution that fits your
                exact needs. At the end, you'll own a fast, great looking site.
              </p>
            </div>
          </div>
          <div className="service-img">
            <Img
              fluid={robotWoman.childImageSharp.fluid}
              className="w-1/1 md:w-3/4"
            />
          </div>
        </div>
        <div className="service-item mobile-reverse">
          <div className="service-img flex items-center justify-center">
            <Img
              fluid={moneyWoman.childImageSharp.fluid}
              className="w-1/1 md:w-3/4"
            />
          </div>
          <div className="service-text__right">
            <div className="service-text-wrapper lg:w-4/5">
              <h3>Sell Your Stuff Online</h3>
              <p>
                You have an idea. You want to turn it into an online business
                without all the hassle. Perfect! I'm here to help you set up an
                e-commerce store that looks amazing and makes you money.
              </p>
            </div>
          </div>
        </div>
        <aside className="cta absolute mb-6 bottom-0">
          <span>
            Interested?{" "}
            <a
              href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!"
              className="text-link"
            >
              hi@fromthemountain.co.za
            </a>
          </span>
        </aside>
      </section>
    </PaddingContainer>
  )
}

export default Services
