import React from "react"
import CaseStudy from "../../components/portfolio/projects/caseStudy/caseStudy"

const odinsForecast = props => {
  console.dir(props.location)
  return <CaseStudy {...props.location.state}></CaseStudy>
}

export default odinsForecast
