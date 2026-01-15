import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Sniglet', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
  }

 input, button, textarea, select {
  font-family: inherit;
}

`