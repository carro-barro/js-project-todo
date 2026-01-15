import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  height: 100%;
  padding: 0 10px;
  font-family: 'Sniglet', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.md};
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`

export const SubmitButton = () => {
  return (
    <StyledButton type="submit">Add</StyledButton>
  )
}