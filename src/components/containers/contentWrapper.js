import React from "react"

const ContentWrapper = ({ children, height }) => {
  //props are passed from apps.js (graphQL query) to project.js to <Link> (passes data to linked page) to <CaseStudy> to here
  return (
    <section
      className={`min-h-${height} sm:max-h-${height} mx-4 grid grid-rows-12 grid-cols-4 sm:mx-0 sm:w-11/12 xl:w-5/6 sm:mx-auto sm:grid-cols-12 sm:grid-rows-4 bg-gray-500`}
    >
      {children}
    </section>
  )
}

export default ContentWrapper
