import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import StyledIndex from "../components/styled-components/styled-index";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <StyledIndex>
      <div className="quote-container">
        <h1 className="quote">"Digital design is like painting, except the paint 
        <span className="color"> never dries</span>."</h1>
        <h3 className="author">- Neville Brody</h3>
      </div>
      <Link className="page2" to="/page-2/">My Work</Link>
    </StyledIndex>
  </Layout>
)

export default IndexPage
