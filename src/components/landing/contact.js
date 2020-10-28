import React from "react"
import ContactForm from "../general/ContactForm/ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section id="Connect" className="contact-container">
      <h2 className="contact-header">
        Sweet, that's me! Now it's your turn to say hi.
      </h2>
      <div className="contact-options-container flex flex-col">
        <div className="mx-auto text-center ">
          <ContactForm />
          <div className="reply-indicator-container text-center">
            <span className="reply-indicator text-xs">
              or email him at hi@fromthemountain.co.za
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contact
