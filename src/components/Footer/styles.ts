import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
  justify-content: center;
  color: gray;
`
