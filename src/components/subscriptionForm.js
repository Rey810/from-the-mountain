import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

const SubscriptionForm = ({ tags }) => {
  const [status, setStatus] = useState(null)
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
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      const json = await response.json()

      if (json.status === "success") {
        setStatus("SUCCESS")
        return
      }

      setStatus("ERROR")
    } catch (err) {
      setStatus("ERROR")
    }
  }

  return (
    <form action={FORM_URL} method="post" onSubmit={handleSubmit}>
      <input
        className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4 w-1/1"
        type="text"
        aria-label="Your name"
        name="fields[first_name]"
        placeholder="Your name"
        required
      />

      <input
        className="subscribe-input text-base bg-white rounded border border-gray-400 px-4 py-2 mb-4 w-1/1"
        type="email"
        aria-label="Your email"
        name="email_address"
        placeholder="Your email address"
        required
      />

      {tags.map(tagName => (
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

      <button
        className="subscribe-button text-white text-lg font-semibold border-0 py-2 px-8 rounded"
        type="submit"
      >
        Stay Curious
      </button>
      {status === "SUCCESS" && <p>Please go confirm your subscription!</p>}
      {status === "ERROR" && <p>Oops, try again.</p>}
    </form>
  )
}

export default SubscriptionForm
