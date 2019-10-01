import { Link } from "gatsby"
import React, { FC } from "react"

const Header: FC<{ siteTitle: string }> = ({ siteTitle = '' }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
