import styled from "styled-components"
import { ToDoCheckbox } from "./ToDoCheckbox"
import { useToDoStore } from "../../store/ToDoStore"


const StyledCard = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  background: ${({ theme }) => theme.colors.secondary};
  border: 2px ${({ theme }) => theme.colors.primary} solid;

  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 15px auto 10px auto;
  width: 85%;
  height: auto;
  border-radius: 6px;
  justify-content: space-between;


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    width: 60%;
    
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45%;
  }
`
const StyledContainer = styled.div`
  display: flex;
`

const StyledText = styled.p`
  margin: 10px;
  text-decoration: ${(props) => (props.$isCompleted ? "line-through" : "none")};
`
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`
const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.transparent};
  border: none;
  cursor: pointer;
  width: 35px;
  height: auto;
  margin-right: 5px;
`

export const SubmittedCard = ({ todo }) => {
  const { removeTodo, toggleTodo } = useToDoStore()

  return (
    <StyledCard>
      <StyledContainer>
        <ToDoCheckbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <StyledText $isCompleted={todo.completed}>{todo.text}</StyledText>
      </StyledContainer>
      <StyledButton type="button" onClick={() => removeTodo(todo.id)}>
        <StyledImage src="icons&images/x.png" alt="Delete to-do" />
      </StyledButton>
    </StyledCard>
  )
}