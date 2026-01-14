import styled from "styled-components"
import { ToDoCheckbox } from "./ToDoCheckbox"


const StyledCard = styled.div`
  background: #ffecd1;
  color: #001524;
  font-size: 16px;
  border: 2px #15616d solid;

  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 15px auto 10px auto;
  width: 85%;
  height: auto;
  border-radius: 6px;
`
const StyledText = styled.p`
  margin: 10px;
`

export const SubmittedCard = () => {
  return (
    <StyledCard>
      <ToDoCheckbox />
      <StyledText>Nu behöver jag verkligen koda (test)</StyledText>
    </StyledCard>
  )
}