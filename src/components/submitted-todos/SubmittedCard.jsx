import styled from "styled-components"
import { ToDoCheckbox } from "./ToDoCheckbox"
import { useToDoStore } from "../../store/ToDoStore"
import moment from "moment"
import { ConfettiAnimation } from "./ConfettiAnimation"


const StyledCard = styled.div`
  position: relative;
  overflow: visible;
  font-size: ${({ theme }) => theme.fontSizes.md};
  background-color: ${({ $isCompleted, theme }) => ($isCompleted ? "#adadad" : theme.colors.secondary)};
  border: 2px ${({ theme }) => theme.colors.primary} solid;
  box-shadow: ${({ theme }) => theme.shadows.card};
  
  
  display: flex;
  flex-direction: column;
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
const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledContainer = styled.div`
  display: flex;
`

const StyledTimestamp = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0 6px 0 0;
  align-self: flex-end;
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
  const { removeTodo, toggleTodo, lastCompletedId, resetConfetti } = useToDoStore()

  const formattedDate = moment(todo.createdAt).fromNow()

  const isWinner = lastCompletedId === todo.id

  const handelComplete = () => {
    setTimeout(() => {
      resetConfetti
    }, 0)
  }

  return (
    <StyledCard $isCompleted={todo.completed}>
      {isWinner && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <ConfettiAnimation onComplete={handelComplete} />
        </div>
      )}
      <StyledContentContainer>
        <StyledContainer>
          <ToDoCheckbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
          <StyledText $isCompleted={todo.completed}>{todo.text}</StyledText>
        </StyledContainer>
        <StyledButton type="button" onClick={() => removeTodo(todo.id)}>
          <StyledImage src="icons&images/x.png" alt="Delete to-do" />
        </StyledButton>
      </StyledContentContainer>
      <StyledTimestamp>{formattedDate}</StyledTimestamp>
    </StyledCard>
  )
}