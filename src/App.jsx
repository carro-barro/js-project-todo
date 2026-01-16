import styled from "styled-components"
import { SubmitBar } from "./components/submit-bar/SubmitBar"
import { SubmittedList } from "./components/submitted-todos/SubmittedList"
import { EmptyStateCard } from "./components/empty-state/EmptyStateCard"
import { useToDoStore } from "./store/ToDoStore"


const StyledHeading = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.h1};
  margin: 30px 0 20px 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

const StyledCardContainer = styled.div`
  margin-top: 30px;
`

export const App = () => {
  const todos = useToDoStore(state => state.todos)
  return (
    <>
      <StyledHeading>To-do app</StyledHeading>
      <SubmitBar />
      <StyledCardContainer>
        {todos.length === 0 ? (
          <EmptyStateCard />
        ) : (
          <SubmittedList />
        )}
      </StyledCardContainer>
    </>
  )
}
