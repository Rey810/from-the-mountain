import React from "react"

const quotes = () => {
  // quotes could be stored here and a timeout can be set to cycle quotes every few seconds
  return (
    <section className="quotes-container border flex flex-row">
      <span className="text-4xl border-r p-4">"</span>
      <div className="quote p-4 flex flex-col justify-center items-left">
        <span>
          "He's a nice son who cooks the best meals. Fact."{" "}
          <strong>- Mom</strong>
        </span>
      </div>
    </section>
  )
}

export default quotes
