import styled from "styled-components"
import { SubmitButton } from "./SubmitButton"
import { useState } from "react"
import { useToDoStore } from "../../store/ToDoStore"


const StyledBar = styled.div`
  width: 90%;
  height: 48px;
  border: 2px ${({ theme }) => theme.colors.primary} solid;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 20px auto;
  overflow: hidden; 
  display: flex;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 65%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 47%;
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const StyledLabel = styled.label`
 align-content: center;
`

const StyledInput = styled.input`
  flex-grow: 1;
  border: none;
  background: ${({ theme }) => theme.colors.transparent};
  font-family: 'Sniglet', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-left: 10px;
  outline: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

export const SubmitBar = () => {
  const [text, setText] = useState("")
  const addTodo = useToDoStore(state => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text)
    setText("")
  }

  return (
    <StyledBar>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          <StyledInput
            type="text"
            name="todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type an new task ..."
            aria-label="Type a new task"
          />
        </StyledLabel>
        <SubmitButton />
      </StyledForm>
    </StyledBar>
  )
}