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
`
const StyledInput = styled.input`
  border: none;
  background: #ffecd1;
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