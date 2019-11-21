import { css } from "@emotion/core"
import theme from "./theme"
import mq from "./mq"

export default css`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap");

  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }

  body {
    -webkit-touch-callout: none;
    font-family: "Poppins";
    font-display: swap;
    font-size: 1.6rem;
    background: linear-gradient(to right, #ebeff8, #fcfcff);
    margin: 0;
    color: ${theme.color.text};
  }

  h1 {
    color: ${theme.color.textDark};
  }

  a {
    color: ${theme.color.link};
  }

  h1 {
    font-size: 3rem;

    ${mq.medium} {
      font-size: 3.6rem;
    }
  }

  input {
    outline-width: 3px;
    outline-color: ${theme.color.link};
  }

  ::selection {
    background: ${theme.color.link};
    color: white;
  }
`
