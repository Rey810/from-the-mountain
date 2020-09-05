import React from "react"

// used in CaseStudy to wrap content in a responsive grid layout
const ContentWrapper = ({ children, height }) => {
  return (
    <section
      className={`min-h-${height} sm:max-h-${height} mx-4 grid grid-rows-12 grid-cols-4 sm:mx-0 sm:w-11/12 xl:w-5/6 sm:mx-auto sm:grid-cols-12 sm:grid-rows-4`}
    >
      {children}
    </section>
  )
}

export default ContentWrapper
