import React, { useState, useEffect } from "react"

const Quotes = () => {
  const [quote, setQuote] = useState(
    "He's a nice son who cooks the best meals. Fact."
  )
  const [author, setAuthor] = useState("Mom")
  const [count, setCount] = useState(0)

  // these need to be cycled through each second
  const quotes = [
    "A nice son who cooks the best meals",
    "Rey is the most handsome guy I know",
    "The best teacher I ever had",
    "An average human with an above-average height",
    "Can type things well",
  ]
  const authors = [
    "Mom",
    "Girlfriend",
    "Student",
    "Friend",
    "Satisfied Customer",
  ]

  // This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
  // Similar to componentDidMount and componentDidUpdate
  // useEffect gets run after initial component render
  // re-run with each new render: triggered by the state change
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count === 4 ? 0 : count + 1))
      setQuote(quotes[count])
      setAuthor(authors[count])
    }, 5000)
    return () => clearInterval(interval)
  })
  // quotes could be stored here and a timeout can be set to cycle quotes every few seconds
  return (
    <section className="quotes-container absolute left-0 right-0 flex flex-row">
      <span className="text-4xl p-4">"</span>
      <div className="quote p-4 flex flex-wrap items-center">
        <span>
          {quote} <strong>- {author}</strong>
        </span>
      </div>
    </section>
  )
}

export default Quotes
