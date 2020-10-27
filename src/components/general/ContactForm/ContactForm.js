import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [btnMsg, setBtnMsg] = useState("Get in Touch")

  // takes event, finds value, updates state of that input
  const updateInput = e => {
    const inputValue = e.target.value
    // update state immutably
    const oldState = formData
    const newState = { ...oldState, [e.target.id]: inputValue }
    setFormData(newState)
  }

  return (
    <>
    <div role="doc-subtitle" className="mb-4 text-sm opacity-75">Start by clicking on 'Name'</div>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      autoComplete="new-one"
      className="contact-form w-2/3 md:w-auto"
      action="/"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="input-animated">
        <input
          type="text"
          id="name"
          required
          pattern="\S+.*"
          placeholder="the placeholder"
          autoComplete="off"
          value={formData.name}
          onChange={updateInput}
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">Name</span>
        </label>
      </div>
      <div className="input-animated">
        <input
          type="email"
          id="email"
          required
          placeholder="the placeholder"
          autoComplete="na"
          value={formData.email}
          onChange={updateInput}
        />
        <label htmlFor="email" className="label-email">
          <span className="content-email">Email</span>
        </label>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          id="message"
          required
          cols="30"
          rows="5"
          minLength="10"
          maxLength="100"
          value={formData.message}
          onChange={updateInput}
        ></textarea>
      </div>
      <button
        className="contact-button w-full text-white text-lg font-semibold border-0 py-2 px-6 rounded"
        type="submit"
      >
        {btnMsg}
      </button>
    </form>
    </>
  )
}

export default ContactForm
