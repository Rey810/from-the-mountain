import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PaddingContainer from "../../components/containers/paddingContainer"

const Quotes = () => {
  const [quote, setQuote] = useState(
    "He's a nice son who cooks the best meals. Fact."
  )
  const [author, setAuthor] = useState("Mom")
  const [count, setCount] = useState(0)

  // these need to be cycled through each second
  const quotes = [
    "A nice son who cooks the best",
    "The most handsome guy I know",
    "The best teacher I ever had",
    "Average human with above-average height",
    "A typer of good things",
  ]
  const authors = ["Mom", "Partner", "Student", "Friend", "Happy Client"]

  // This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
  // Similar to componentDidMount and componentDidUpdate
  // useEffect gets run after initial component render
  // re-run with each new render: triggered by the state change
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count === 4 ? 0 : count + 1))
      setQuote(quotes[count])
      setAuthor(authors[count])
    }, 3000)
    return () => clearInterval(interval)
  })
  // quotes could be stored here and a timeout can be set to cycle quotes every few seconds
  return (
    <PaddingContainer type="quotes-container" X>
      <section className="quotes-container">
        <div className="quote flex flex-row">
          <span className="text-4xl p-4">"</span>
          <div className="quote">
            <span>
              {quote} <strong>- {author}</strong>
            </span>
          </div>
        </div>
      </section>
    </PaddingContainer>
  )
}

export default Quotes
