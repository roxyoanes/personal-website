import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { LanguageContext } from "./LanguageContext"
import StyledHeader from "./styled-components/styled-header"

const Header = ({ siteTitle }) => (
  <LanguageContext.Consumer>
    {({ lang, switchLanguage }) => (
      <StyledHeader>
        <h1 className="title">
          <Link className="name" to="/">
            {siteTitle}
          </Link>
        </h1>
        <div className="middle-section">
          <div className="dot"></div>
          <p className="status">{lang.header.status}</p>
          <p className="job-name">FRONT-END DEVELOPER</p>
        </div>
        <div className="end-section">
          <div className="language">
            <button
              className="lang-option"
              onClick={() => switchLanguage("EN")}
            >
              EN
            </button>
            <button
              className="lang-option"
              onClick={() => switchLanguage("RO")}
            >
              RO
            </button>
          </div>
          <div className="nav-icon">
            <div className="hamburger-menu"></div>
          </div>
        </div>
      </StyledHeader>
    )}
  </LanguageContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
