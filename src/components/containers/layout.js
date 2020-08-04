import React from "react"
import PropTypes from "prop-types"
import Header from "../general/header"

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
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
