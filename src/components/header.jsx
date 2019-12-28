import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import StyledHeader from "./styled-components/styled-header";


const Header = ({ siteTitle }) => (
    <StyledHeader>
      <h1 className="title">
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
