import React from "react"

// used in CaseStudy to wrap content in a responsive grid layout
const ContentWrapper = ({ children, mobileHeight = 'full', tabletHeight = '10/10', laptopHeight = '10/10', desktopHeight = '10/10', extraClasses }) => {
  return (
    <section
      className={`max-h-${mobileHeight} md:max-h-${tabletHeight} lg:max-h-${laptopHeight} xl:max-h-${desktopHeight} min-h-${mobileHeight} md:min-h-${tabletHeight} lg:min-h-${laptopHeight} xl:min-h-${desktopHeight} mx-4 my-8 sm:grid sm:w-11/12 xl:w-5/6 sm:mx-auto sm:grid-cols-12 sm:grid-rows-4 ${extraClasses}`}
    >
      {children}
    </section>
  )
}

export default ContentWrapper
