import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledIndex from "../components/styled-components/styled-index";

import TwitterIcon from "../assets/twitter-brands.svg"
import GithubIcon from "../assets/github-brands.svg"
import LinkedinIcon from "../assets/linkedin-in-brands.svg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <StyledIndex>
      <div className="socials-container">
        <a className="social-link" href="https://github.com/roxyoanes" target="_blank">
          <GithubIcon className="socials-icon" width={25} height={25}></GithubIcon>
        </a>
        <a className="social-link" href="" target="_blank">
          <LinkedinIcon className="socials-icon" width={25} height={25} />
        </a>
        <a className="social-link" href="https://twitter.com/OanesRoxana" target="_blank">
          <TwitterIcon className="socials-icon" width={25} height={25} />
        </a> 
      </div>
      <div className="quote-container">
        <h1 className="quote">I like to create 
          <span className="color"> beautiful </span> 
          & 
          <span className="color"> functional </span>
          websites
        </h1>
      </div>
      <Link className="link" to="/page-2/">My Work</Link>
    </StyledIndex>
  </Layout>
)

export default IndexPage
