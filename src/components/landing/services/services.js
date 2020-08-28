import React from "react"
import PaddingContainer from "../../containers/paddingContainer"
import CelebrateWoman from "../../../assets/illustrations/celebrateWoman"
import GraphsWoman from "../../../assets/illustrations/graphsWoman"
import MoneyWoman from "../../../assets/illustrations/moneyWoman"
import RobotWoman from "../../../assets/illustrations/robotWoman"

const Services = () => {
  return (
    <PaddingContainer type="service-container" X Y>
      <h2 className="text-center">Ways I can help you</h2>
      {/* Various benefits listed here */}
      <section className="service-items-container">
        <div className="service-item">
          <div className="service-text__left">
            <div className="service-text-wrapper">
              <h3>Own a Website that Works</h3>
              <p>
                You want a website. It must look great and you want it to
                work... All the time. Well, that's why I'm here! I help you by
                designing, building, and hosting a beautiful site that'll make
                you a very proud owner. Promise.
              </p>
            </div>
          </div>
          <div className="service-img">
            <GraphsWoman />
          </div>
        </div>
        <div className="service-item mobile-reverse">
          <div className="service-img">
            <CelebrateWoman />
          </div>
          <div className="service-text__right">
            <div className="service-text-wrapper">
              <h3>Become Famous with SEO</h3>
              <p>
                An impressive Google ranking means more people see your
                fantastic blog post or revolutionary product. I ensure you have
                a great ranking with best SEO practices. Give your content the
                audience it deserves!
              </p>
            </div>
          </div>
        </div>
        <div className="service-item">
          <div className="service-text__left">
            <div className="service-text-wrapper">
              <h3>Control the Features</h3>
              <p>
                Do you feel restricted by all the drag-and-drop web builders out
                there? I provide a custom code solution that fits your exact
                needs. At the end, you'll own a fast, great looking site.
              </p>
            </div>
          </div>
          <div className="service-img">
            <RobotWoman />
          </div>
        </div>
        <div className="service-item mobile-reverse">
          <div className="service-img">
            <MoneyWoman />
          </div>
          <div className="service-text__right">
            <div className="service-text-wrapper">
              <h3>Sell Your Stuff Online</h3>
              <p>
                You want a website. It must look great and you want it to
                work... All the time. Well, that's why I'm here! I help you by
                designing, building, and hosting a beautiful site that'll make
                you a very proud owner. Promise.
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
