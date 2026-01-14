import styled from 'styled-components'

const StyledButton = styled.button`
  background: #15616d;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  
  align-items: center;
`

export const SubmitButton = () => {
  return (
    <StyledButton type="submit">Add</StyledButton>
  )
}