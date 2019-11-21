import { Link } from "gatsby"
import styled from "@emotion/styled"
import theme from "styles/theme"
import mq from "styles/mq"

export const Wrapper = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  height: 6rem;
  z-index: 1;
  background: white;

  ${mq.medium} {
    background: none;
  }
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  ${mq.medium} {
    padding: 0 4rem;
  }
`

export const Logo = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${theme.color.textDark};
  width: 100%;
  text-align: center;

  ${mq.medium} {
    width: unset;
    text-align: left;
  }
`

export const Nav = styled.nav`
  display: none;

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-left: 3rem;
      display: inline-block;

      a {
        text-decoration: none;
        color: ${theme.color.textDark};

        &:hover {
          color: ${theme.color.link};
        }
      }
    }
  }

  ${mq.medium} {
    display: block;
  }
`
