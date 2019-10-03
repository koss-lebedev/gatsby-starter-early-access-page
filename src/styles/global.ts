import { css } from '@emotion/core'
import theme from './theme'

export default css`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600&display=swap');

  html {
    font-size: 62.5%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }

  body {
    -webkit-touch-callout: none;
    font-family: 'Poppins';
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
    font-family: 'Poppins';
  }
`