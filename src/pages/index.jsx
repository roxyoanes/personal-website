import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledIndex from "../components/styled-components/styled-index"
import { LanguageContext } from "../components/LanguageContext"

import TwitterIcon from "../assets/twitter-brands.svg"
import GithubIcon from "../assets/github-brands.svg"
import LinkedinIcon from "../assets/linkedin-in-brands.svg"

const IndexPage = () => (
  <LanguageContext.Consumer>
    {({ lang }) => (
      <Layout>
        <SEO title="Home" />
        <StyledIndex>
          <div className="socials-container">
            <a
              className="social-link"
              href="https://github.com/roxyoanes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon
                className="socials-icon"
                width={25}
                height={25}
              ></GithubIcon>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/roxana-sandra-oanes-1b081978/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="socials-icon" width={25} height={25} />
            </a>
            <a
              className="social-link"
              href="https://twitter.com/OanesRoxana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="socials-icon" width={25} height={25} />
            </a>
          </div>
          <div className="quote-container">
            <h1 className="quote">
              {lang.index.quote1}
              <span className="color"> {lang.index.highlight1} </span>&
              <span className="color"> {lang.index.highlight2} </span>
              {lang.index.quote2}
            </h1>
          </div>
          {/* <Link className="link" to="/page-2/">
            My Work
          </Link> */}
        </StyledIndex>
      </Layout>
    )}
  </LanguageContext.Consumer>
)

export default IndexPage
