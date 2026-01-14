import styled, { createGlobalStyle } from "styled-components"
import { SubmitBar } from "./components/submit-bar/SubmitBar"
import { SubmittedCard } from "./components/submitted-todos/SubmittedCard"
import { EmptyStateCard } from "./components/empty-state/EmptyStateCard"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
   margin: 0;
   background: #ffefe7ff;
   font-family: 'Sniglet', sans-serif;
   color: #001524;
  }
`

const StyledHeading = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 30px 0 20px 0;
`

const SubmittedCardContainer = styled.div`
  margin-top: 30px;
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledHeading>To-do app</StyledHeading>
      <SubmitBar />
      {/* <EmptyStateCard /> */}
      <SubmittedCardContainer>
        <SubmittedCard />
      </SubmittedCardContainer>
    </>
  )
}
