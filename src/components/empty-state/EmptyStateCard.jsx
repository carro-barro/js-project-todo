import styled from 'styled-components'

const StyledCard = styled.div`
  width: 75%;
  background: ${({ theme }) => theme.colors.secondary};
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
  font-size: ${({ theme }) => theme.fontSizes.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
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
      <StyledImage src="/icons&images/sun.png" alt="happy sun illustration" />
      <StyledText>The day is yours to conquer! <br /> What do you want to achieve today?</StyledText>
    </StyledCard>
  )
}