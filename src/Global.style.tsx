import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    background-repeat: no-repeat;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
    cursor: default;
    font-size: 16px;
    word-break: break-word;
  }

  body {
    background-color: whitesmoke;
    font-family: 'Roboto', sans-serif;
    font-feature-settings: "kern" 1, "liga" 1;
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`
