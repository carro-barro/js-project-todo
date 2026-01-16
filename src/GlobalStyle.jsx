import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    font-family: 'Sniglet', sans-serif;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-items: center;

    background-image: url("/icons&images/snake.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: 280%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-size: 180%;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      background-size: 150%;
      background-position: 50% 40%;
    }
  }

 input, button, textarea, select {
  font-family: inherit;
}

`