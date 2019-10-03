import { Link } from 'gatsby'
import React, { FC } from "react"
import { Wrapper, Inner, Nav, Logo } from './styled'

const Header: FC<{ siteTitle: string }> = ({ siteTitle = '' }) => (
  <Wrapper>
    <Inner>
      <Logo to="/">
        {siteTitle}
      </Logo>
      <Nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
      </Nav>
    </Inner>
  </Wrapper>
)

export default Header
