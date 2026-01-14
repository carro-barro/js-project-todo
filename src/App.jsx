import styled, { createGlobalStyle } from "styled-components"
import { SubmitBar } from "./components/submit-bar/SubmitBar"
import { SubmittedCard } from "./components/submitted-todos/SubmittedCard"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
   margin: 0;
   background: #ffefe7ff;
  }
`
const StyledBackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`

const SubmittedCardContainer = styled.div`
  margin-top: 30px;
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledBackgroundImage src="/icons:images/phyton.png" alt="" />
      <h1>To-do app</h1>
      <SubmitBar />
      <SubmittedCardContainer>
        <SubmittedCard />
      </SubmittedCardContainer>
    </>
  )
}
