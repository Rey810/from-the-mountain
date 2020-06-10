import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section className="contact-container px-4 pt-0 pb-8">
      <h4 className="contact-header pb-8 text-4xl font-bold">
        Sweet, that's me! Now it's your turn to say hi.
      </h4>
      <div className="contact-options-container flex flex-col pb-6">
        <a href="mailto:reyvdb@gmail.com" className="contact-mail mx-auto">
          <button className="contact-button center text-6xl py-4 px-8 my-2 shadow-md rounded-md">
            Hi, Rey!
          </button>
        </a>
        <div className="contact-social-container text-2xl flex flex-row justify-center pt-2">
          <a
            href="https://www.facebook.com/reynardv"
            className="contact-facebook mx-4"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a
            href="https://www.instagram.com/rey_810/https://www.instagram.com/rey_810/"
            className="contact-instagram mx-4"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/rey810/"
            className="contact-linkedin mx-4"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            href="https://twitter.com/ReyTheDev"
            className="contact-twitter mx-4"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact
