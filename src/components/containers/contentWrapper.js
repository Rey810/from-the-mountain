import React from "react"

// used in CaseStudy to wrap content in a responsive grid layout
const ContentWrapper = ({
  children,
  mobileHeight = "max-h-full min-h-full",
  tabletHeight = "md:max-h-full md:min-h-full",
  laptopHeight = "lg:max-h-full lg:min-h-full",
  desktopHeight = "xl:max-h-full xl:min-h-full",
  extraClasses,
}) => {
  let tailwindHeightClasses = `${mobileHeight} ${tabletHeight} ${laptopHeight} ${desktopHeight}`

  return (
    <section
      className={`${tailwindHeightClasses} mx-4 my-8 sm:grid sm:w-11/12 xl:w-5/6 sm:mx-auto sm:grid-cols-12 sm:grid-rows-4 ${extraClasses}`}
    >
      {children}
    </section>
  )
}

export default ContentWrapper
