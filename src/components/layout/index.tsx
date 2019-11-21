import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import Header from "components/header"
import Footer from "components/footer"
import globalStyles from "styles/global"
import { Content } from "./styled"

const Layout: FC = ({ children }) => {
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
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>{children}</Content>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  )
}

export default Layout
