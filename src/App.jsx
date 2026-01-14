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
  }
`

const SubmittedCardContainer = styled.div`
  margin-top: 30px;
`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>To-do app</h1>
      <SubmitBar />
      <EmptyStateCard />
      {/* <SubmittedCardContainer>
        <SubmittedCard />
      </SubmittedCardContainer> */}
    </>
  )
}
