import styled from "@emotion/styled"
import theme from "styles/theme"
import mq from "styles/mq"

export const Wrapper = styled.footer`
  background: ${theme.color.backgroundInverse};
  color: ${theme.color.textInverse};
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  ${mq.medium} {
    padding: 3rem 4rem;
  }
`
