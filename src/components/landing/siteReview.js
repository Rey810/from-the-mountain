import React from "react"
import PaddingContainer from "../containers/paddingContainer"
import ReportForm from "../general/ReportForm/reportForm"

const siteReview = () => {
  return (
    <PaddingContainer type="site-review-container" X Y id="Report">
      <h2>Want to test the waters first?</h2>
      <ReportForm inLine theme="dark" />
    </PaddingContainer>
  )
}

export default siteReview
