import styled from 'styled-components'

const StyledButton = styled.button`
  background: #15616d;
  color: white;
  border: none;
  padding: 10px;
  font-family: 'Sniglet', sans-serif;
  font-size: 16px;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`

export const SubmitButton = () => {
  return (
    <StyledButton type="submit">Add</StyledButton>
  )
}