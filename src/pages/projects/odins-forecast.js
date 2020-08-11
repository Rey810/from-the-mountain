import React from "react"
import CaseStudy from "../../components/portfolio/projects/caseStudy/caseStudy"

const OdinsForecast = props => {
  // only attempts to render CaseStudy if props have been passed to it which only happens from the project card link where props are passed as location.state
  return props.location.state?.title ? (
    <CaseStudy {...props.location.state}></CaseStudy>
  ) : null
}

export default OdinsForecast
