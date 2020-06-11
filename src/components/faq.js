import React from "react"
import uuid from "react-uuid"
import { faSquare } from "@fortawesome/free-solid-svg-icons"

export default function FAQ() {
  const faqs = [
    {
      question: "Where can I learn more about you?",
      answer:
        "I'm pretty active on Twitter. If you prefer, you can give send me an email or a message on Facebook or Instagram and ask away :)",
    },
    {
      question: "Do you charge per hour or per project?",
      answer:
        "Charging per project works better for you and me. You know the price upfront and I can focus on creating something great without counting the hours ;)",
    },
    {
      question: "Do you hire others to help you with the project?",
      answer:
        "You contacted me because you trust me so I'll dedicate all of me to your idea. If you prefer to have your project done as soon as possible, then I'll get some outside help from people I trust.",
    },
    {
      question: "How often will we be in contact?",
      answer:
        "I promised to keep a healthy relationship with you. If that means a call every day, cool. If it means keeping in touch through a weekly email exchange, cool. Whatever works for you. Remember, I'm here to make your life easier, not more complicated.",
    },
  ]

  const toggleFocus = e => {
    e.target.classList.toggle("open")
  }

  return (
    <section className="faq-container pl-4">
      <h1 className="faq-header text-4xl font-bold">FAQ</h1>
      <div className="faq-list-container">
        <ul className="faqs">
          <li className="faq pt-8">
            <details onToggle={toggleFocus} open>
              <summary className="font-semibold flex items-center">
                Where can I learn more about you?
              </summary>
              <p className="faq-answer pl-4 pb-4">
                I'm pretty active on Twitter. If you prefer, you can give send
                me an email or a message on Facebook or Instagram and ask away
                :)
              </p>
            </details>
          </li>
          <hr />
          {faqs.map(faq => (
            <>
              <li key={uuid()} className="faq">
                <details onClick={toggleFocus}>
                  <summary className="font-semibold flex items-center">
                    {faq.question}
                  </summary>
                  <p className="faq-answer pl-4 pb-4">{faq.answer}</p>
                </details>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </section>
  )
}
