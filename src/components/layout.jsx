/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from '@emotion/core'

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: 'Gothic A1', sans-serif;
          }
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: 100%;
          }
        `}
      />
      <div css={css`
        height: 100vh;
        display: grid;
        grid-template-columns: 0.1fr 5fr 0.1fr;
        grid-template-rows: 0.2fr 1fr;
      `}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
