import React from "react"
import PaddingContainer from "../../components/containers/paddingContainer"
import ThumbUp from "../../assets/thumbUp"
import Time from "../../assets/time"
import Money from "../../assets/money"
import Friends from "../../assets/friends"
import Work from "../../assets/work"
import Handshake from "../../assets/handshake"

const Benefits = () => {
  return (
    <PaddingContainer type="benefits-container">
      <h2 className="benefits-header">Ways you'll benefit</h2>
      <section className="all-benefits-container">
        <ul>
          <div className="benefit-item">
            <div className="benefit-icon">
              <ThumbUp />
            </div>
            <li className="benefit-text">Attract clients who value quality</li>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <Time />
            </div>
            <li className="benefit-text">
              More time to focus on your business
            </li>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon px-">
              <Money />
            </div>
            <li className="benefit-text">Turn leads into paying customers</li>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <Friends />
            </div>
            <li className="benefit-text">
              Reach a larger, more curious audience
            </li>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <Work />
            </div>
            <li className="benefit-text">
              Own a beautiful website that works 24/7
            </li>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">
              <Handshake />
            </div>
            <li className="benefit-text">
              Build trust with your ideal clients
            </li>
          </div>
        </ul>
      </section>
    </PaddingContainer>
  )
}

export default Benefits
