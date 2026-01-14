import styled from "styled-components"
import { ToDoCheckbox } from "./ToDoCheckbox"


const StyledCard = styled.div`
  background: #ffecd1;
  color: #001524;
  font-family: "Sniglet", sans-serif;
  font-size: 14px;
  border: 2px #15616d solid;

  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 15px auto 10px auto;
  width: 85%;
  height: auto;
  border-radius: 6px;
  justify-content: space-between;


  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
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
`
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`
const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 35px;
  height: auto;
  margin-right: 5px;
`

export const SubmittedCard = () => {
  return (
    <StyledCard>
      <StyledContainer>
      <ToDoCheckbox />
        <StyledText>Nu behöver jag verkligen koda (test)</StyledText>
      </StyledContainer>
        <StyledButton type="button" alt="Delete to-do">
          <StyledImage src="icons&images/x.png" alt="Delete to-do" />
        </StyledButton>
    </StyledCard>
  )
}