import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import StyledHeader from "./styled-components/styled-header";


const Header = ({ siteTitle }) => (
    <StyledHeader>
      <h1 className="title">
        <Link className="name"
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="middle-section">
        <div className="dot"></div>
        <p className="status">Available for new projects</p>
        <p className="job-name">FREELANCE DESIGNER</p>
      </div>
      <div className="end-section">
        <div className="language">
          <a className="lang-option" href="">EN</a>
          <a className="lang-option" href="">RO</a>
        </div>
        <div className="nav-icon">
          <div className="hamburger-menu">

          </div>
        </div>
        
      </div>
    </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
