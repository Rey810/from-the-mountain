import React from "react"
import PropTypes from "prop-types"
import Header from "../general/header"
import ScrollUpButton from "../general/scrollUpButton/scrollUpButton"

const Layout = ({
  children,
  canSeeHeader = false,
  usesPortfolioHeader = false,
  usesInPostHeader = false,
}) => {
  return (
    <>
      <Header
        canSee={canSeeHeader}
        isPortfolioHeader={usesPortfolioHeader}
        isPostHeader={usesInPostHeader}
      />
      <div id="top"></div>
      <main>{children}</main>
      <ScrollUpButton isPostHeader={usesInPostHeader} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
