import styled from "@emotion/styled"
import mq from "styles/mq"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  ${mq.medium} {
    flex-direction: row;
    height: 100vh;
    margin-top: -6rem;
  }
`

export const Main = styled.main`
  flex: 1;
  padding: 0 3rem;
  text-align: center;
  padding-bottom: 5rem;

  ${mq.medium} {
    padding: 0;
    text-align: left;
  }
`

export const Banner = styled.div`
  flex: 1;
  text-align: right;
`
