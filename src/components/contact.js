import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section className="contact-container pt-0 pb-8 pr-4 md:pr-8 lg:pr-12 xl:pr-16">
      <h1 className="contact-header pb-8 font-bold md:mx-auto md:w-3/4">
        Sweet, that's me! Now it's your turn to say hi.
      </h1>
      <div className="contact-options-container flex flex-col pb-6">
        <div className="button-container mx-auto">
          <a href="mailto:reyvdb@gmail.com" className="contact-mail">
            <button className="contact-button center py-4 px-24 my-2 font-semibold shadow-md rounded-full">
              Chat with Rey
            </button>
          </a>
          <div className="reply-indicator-container text-center">
            <span className="reply-indicator">will reply within 24hrs</span>
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
            href="https://www.facebook.com/reynardv"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
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
