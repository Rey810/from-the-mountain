import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section className="contact-container">
      <h4 className="contact-header">
        Sweet, that's me! Now it's your turn to say hi.
      </h4>
      <div className="contact-options-container">
        <a href="mailto:reyvdb@gmail.com" className="contact-mail">
          Hi, Rey!
        </a>
        <div className="contact-social-container">
          <a href="/" className="contact-facebook">
            <FontAwesomeIcon icon={["fab", "facebook"]}></FontAwesomeIcon>
          </a>
          <a href="/" className="contact-instagram">
            <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
          </a>
          <a href="/" className="contact-linkedin">
            <FontAwesomeIcon icon={["fab", "linkedin"]}></FontAwesomeIcon>
          </a>
          <a href="/" className="contact-twitter">
            <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact
