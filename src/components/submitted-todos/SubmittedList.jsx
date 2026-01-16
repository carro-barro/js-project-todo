import { useToDoStore } from "../../store/ToDoStore"
import { SubmittedCard } from "./SubmittedCard"
import styled from "styled-components"

const StyledCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
   width: 55%;  
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 43%;
  }
`

const StyledCounter = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: left;
  margin: 0;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const SubmittedList = () => {
  const todos = useToDoStore(state => state.todos)

  return (
    <>
      <StyledCounterContainer>
        <StyledCounter>Total tasks: {todos.length}</StyledCounter>
      </StyledCounterContainer>
      <StyledList>
        {todos.map(todo => (
          <li key={todo.id}>
            <SubmittedCard todo={todo} />
          </li>
        ))}
      </StyledList>
    </>
  )
}