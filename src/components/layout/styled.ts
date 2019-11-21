import styled from "@emotion/styled"
import mq from "styles/mq"

export const Content = styled.div`
  padding-top: 6rem;
  min-height: calc(100vh - 6rem);
  max-width: 1200px;
  margin: 0 auto;

  ${mq.medium} {
    padding: 6rem 4rem 0;
  }
`
