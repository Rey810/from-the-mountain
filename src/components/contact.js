import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const contact = () => {
  return (
    <section className="contact-container pt-0 pb-8">
      <h1 className="contact-header pb-8 font-bold md:mx-auto md:w-3/4">
        Sweet, that's me! Now it's your turn to say hi.
      </h1>
      <div className="contact-options-container flex flex-col pb-6">
        <a href="mailto:reyvdb@gmail.com" className="contact-mail mx-auto">
          <button className="contact-button center py-4 px-24 my-2 font-semibold shadow-md rounded-full">
            Start Chat
          </button>
        </a>
        <div className="contact-social-container text-2xl flex flex-row justify-center pt-8">
          <a
            href="https://www.facebook.com/reynardv"
            className="contact-facebook icon mx-4"
          >
            <FontAwesomeIcon icon={["fab", "facebook"]} />
          </a>
          <a
            href="https://www.instagram.com/rey_810/https://www.instagram.com/rey_810/"
            className="contact-instagram icon mx-4"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/rey810/"
            className="contact-linkedin icon mx-4"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            href="https://twitter.com/ReyTheDev"
            className="contact-twitter icon mx-4"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default contact

// {
//   /* <a href="https://twitter.com/ReyTheDev" className="icon m-2 md:m-4">
//           <FontAwesomeIcon icon={["fab", "twitter"]}></FontAwesomeIcon>
//         </a>
//                 <a href="mailto:reyvdb@gmail.com" className="icon mx-2 md:mx-4">
//           <FontAwesomeIcon icon={["fab", "facebook"]} />
//         </a>
// }
