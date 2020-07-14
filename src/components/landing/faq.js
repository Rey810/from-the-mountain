import React from "react"
import uuid from "react-uuid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function FAQ() {
  const faqs = [
    {
      question: "Do you charge per hour or per project?",
      answer:
        "Charging per project works better for you and me. You know the price upfront and I can focus on creating something great without counting the hours ;)",
    },
    {
      question: "How often will we be in contact?",
      answer:
        "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
    },
    {
      question: "Do you hire others to help you?",
      answer:
        "I commit myself wholeheartedly to every project and love working solo. If you prefer to have your project done at a superhuman pace, then I'll get some outside help from people I trust.",
    },
    {
      question: "What if I don't like the end result?",
      answer:
        "Our healthy relationship means we'll know where we stand with your idea and it's direction the whole way through. If at any point, you have a complete change of mind I will give you a full refund with a smile :)",
    },
    {
      question: "You didn't answer my question.",
      answer:
        "That's ok! I'm always happy to have a chat and discuss what's on your mind, so feel free to click on one of my social media icons on this page and pop me a message!",
    },
    // future faq
    // Where can I see work you've done?
  ]

  const toggleFocus = e => {
    e.target.classList.toggle("open")
  }

  return (
    <section className="faq-container pb-24 px-4 md:px-8 lg:px-12 xl:px-16">
      <h2 className="faq-header pb-12">A few questions people normally ask</h2>
      <div className="faq-list-container md:w-2/3 lg:w-7/12">
        <ul className="faqs">
          {faqs.map(faq => (
            <li key={uuid()} className="faq mb-12 rounded-md">
              <details key={uuid()} onToggle={toggleFocus}>
                <summary className="flex flex-row items-baseline font-semibold p-6">
                  <span className="faq-icon-container inline-block w-mc text-base pr-2">
                    <FontAwesomeIcon icon="chevron-down"></FontAwesomeIcon>
                  </span>
                  <span className="">{faq.question}</span>
                </summary>
                <p className="faq-answer py-4 px-6">{faq.answer}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
