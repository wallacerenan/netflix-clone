import { styled } from '@mui/material/styles'

export const MoviesWrapper = styled('div')`
  margin-top: -100px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 0;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-top: -50px;
  }
`
