import styled from "styled-components"
import { SubmitButton } from "./SubmitButton"


const StyledBar = styled.div`
  width: 90%;
  height: 35px;
  border: 2px #15616d solid;
  border-radius: 6px;
  background: #ffecd1;
  
  
  display: flex;
  justify-self: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 65%;
    height: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 45%;
    height: 45px;
  }
`
const StyledInput = styled.input`
  border: none;
  background: #ffecd1;
  font-family: 'Sniglet', sans-serif;
  font-size: 16px;
  margin-left: 10px;

  &::placeholder {
    font-family: 'Sniglet', sans-serif;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const SubmitBar = () => {
  return (
    <StyledBar>
      <StyledInput
        type="text"
        placeholder="Type your to do ..."
      />
      <SubmitButton />
    </StyledBar>
  )
}