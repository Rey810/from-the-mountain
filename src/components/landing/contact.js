import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section
      id="Connect"
      className="contact-container pt-0 pb-8 px-4 md:px-8 lg:px-12 xl:px-16"
    >
      <h2 className="contact-header pb-8 font-bold text-center md:mx-auto md:w-3/4">
        Sweet, that's me! Now it's your turn to say hi.
      </h2>
      <div className="contact-options-container flex flex-col pb-6">
        <div className="button-container mx-auto text-center ">
          <a
            href="mailto:hi@fromthemountain.co.za?subject=Let's%20Connect!&body=Hi%20Rey!%20:)"
            className="landing-cta-1 my-2 rounded-md shadow-md font-semibold inline-block py-4 px-12"
          >
            Chat with Rey
          </a>
          <div className="reply-indicator-container text-center">
            <span className="reply-indicator">
              or email him at hi@fromthemountain.co.za
            </span>
          </div>
        </div>
        <div className="contact-social-container text-2xl flex flex-row justify-center pt-8">
          <a
            className="landing-icons icon px-4"
            href="https://twitter.com/ReyTheDev"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
          <a
            className="landing-icons icon px-4"
            href="https://github.com/Rey810"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            className="landing-icons icon px-4"
            href="https://www.linkedin.com/in/rey810/"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact
