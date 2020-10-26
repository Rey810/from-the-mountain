import React from "react"

const Form = () => {
  const handleSubmit = e => {
    console.log("button clicked dude!")
  }

  return (
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
      autoComplete="new-one"
      className="contact-form"
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
        />
        <label htmlFor="email" className="label-email">
          <span className="content-email">Email</span>
        </label>
      </div>
      <div>
        <textarea
          name="question"
          placeholder="Your Question"
          id="question"
          cols="30"
          rows="5"
          minLength="10"
          maxLength="100"
          required
        ></textarea>
      </div>
      <button onClick={handleSubmit} type="submit">
        Get in Touch
      </button>
    </form>
  )
}

export default Form
