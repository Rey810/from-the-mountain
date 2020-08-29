import React from "react"
import PaddingContainer from "../containers/paddingContainer"
import LandingForm from "../general/auditModal/landingForm/landingForm"

const siteReview = () => {
  return (
    <PaddingContainer type="site-review-container" X Y>
      <h2>Want to test the waters first?</h2>
      <LandingForm inLine theme="dark" />
    </PaddingContainer>
  )
}

export default siteReview
