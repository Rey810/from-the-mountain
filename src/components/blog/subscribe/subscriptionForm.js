import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
// import ReCAPTCHA from "react-google-recaptcha"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const SubscriptionForm = props => {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const FORM_ID = "1483305"
  const SUBFORM_ID = "906"
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`

  const data = useStaticQuery(graphql`
    query {
      allTag {
        nodes {
          name
          id
        }
      }
    }
  `)

  // converts the tag nodes into a tags object
  const allTags = data.allTag.nodes
  const tagMap = allTags.reduce((result, tag) => {
    result[tag.name] = tag.id
    return result
  }, {})

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData(e.target)

    try {
      setLoading(true)
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      const json = await response.json()

      if (json.status === "success") {
        setLoading(false)
        setStatus("SUCCESS")
        return
      }
      setLoading(false)
      setStatus("ERROR")
      console.log(json)
    } catch (err) {
      console.log(err)
      setLoading(false)
      setStatus("ERROR")
    }
  }

  let additionalInputs = null
  if (props.audit) {
    additionalInputs = (
      <>
        <label htmlFor="site">Site URL</label>
        <input
          className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4 w-1/1"
          type="text"
          aria-label="Your Site URL"
          name="fields[siteURL]"
          placeholder="eg. www.mysite.com"
          required
        />
      </>
    )
  }

  let successMessage = props.audit
    ? "Success! Keep an eye on your inbox for your report."
    : "Success! Please confirm your subscription in your email."

  return (
    <form
      className="subscription-form"
      action={FORM_URL}
      method="post"
      onSubmit={handleSubmit}
    >
      {additionalInputs}
      {props.audit ? <label htmlFor="name">Name</label> : null}
      <input
        className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4 w-1/1"
        type="text"
        aria-label="Your name"
        name="fields[first_name]"
        placeholder="Enter your name"
        id="name"
        required
      />

      {props.audit ? <label htmlFor="email">Email</label> : null}
      <input
        className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4 w-1/1"
        type="email"
        aria-label="Your email"
        name="email_address"
        placeholder="Enter your email"
        id="email"
        required
      />

      {props.tags.map(tagName => (
        <input
          key={tagMap[tagName]}
          id={`tag-${SUBFORM_ID}-${tagMap[tagName]}`}
          type="checkbox"
          style={{ display: "none" }}
          checked
          name="tags[]"
          value={tagMap[tagName]}
        />
      ))}

      {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}

      <button
        className={`custom-subscribe-button text-white text-lg font-semibold border-0 py-2 px-6 rounded items-center ${
          status === "SUCCESS" ? "hidden" : ""
        }`}
        type="submit"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <span>{props.audit ? "Get Report" : "Stay Curious"}</span>
            <FontAwesomeIcon className="ml-4" icon={faPaperPlane} />
          </>
        )}
      </button>
      {status === "SUCCESS" && <p class="success">{successMessage}</p>}
      {status === "ERROR" && <p class="error">Oops, please try again.</p>}
    </form>
  )
}

export default SubscriptionForm
