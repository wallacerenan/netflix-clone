import { styled } from '@mui/material/styles'

import MaterialContainer from '@mui/material/Container'

export const Wrapper = styled('div', {
  shouldForwardProp: props => props !== 'img',
})`
  position: relative;
  width: 100%;
  display: flex;
  height: 75vh;
`

export const Container = styled(MaterialContainer)`
  z-index: 10;
`

const Gradient = styled('div')`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
`

export const BottomGradient = styled(Gradient)`
  background: linear-gradient(
    to top,
    rgba(20, 20, 20, 1) 10%,
    rgba(20, 20, 20, 0.6) 25%,
    transparent 100%
  );
`

export const TopGradient = styled(Gradient)`
  background: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0.1),
    rgba(20, 20, 20, 0.2) 10%,
    transparent 100%
  );
`

export const RightGradient = styled(Gradient)`
  background: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.7) 5%,
    transparent 70%
  );
`

export const MovieWrapper = styled('div')`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.palette.common.white};
`

export const Title = styled('h1')`
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const Description = styled('p')`
  text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`
