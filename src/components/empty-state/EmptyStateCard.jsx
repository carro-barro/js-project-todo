import styled from 'styled-components'

const StyledCard = styled.div`
  width: 75%;
  background: #ffecd1;
  justify-self: center;
  padding: 20px;
  margin-top: 30px;
  text-align: center;
  border-radius: 6px;

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 60%;
  } 

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 40%;
  }
`
const StyledHeading = styled.h2`
  
  font-size: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 28px;
  }
`

const StyledText = styled.p`
  font-size: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`
const StyledImage = styled.img`
  width: 50%;
  height: auto;
  display: flex;
  justify-self: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 40%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 30%;
  }
`

export const EmptyStateCard = () => {
  return (
    <StyledCard>
      <StyledHeading>No tasks yet</StyledHeading>
      <StyledImage src="/icons&images/sun.png" />
      <StyledText>The day is yours to conquer! What do you want to achieve today?</StyledText>
    </StyledCard>
  )
}