import { styled } from '@mui/material/styles'

import MaterialContainer from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'

export const Wrapper = styled('div', {
  shouldForwardProp: props => props !== 'img',
})`
  position: relative;
  width: 100%;
  display: flex;
  height: 75vh;
  z-index: 1;
`

export const Container = styled(MaterialContainer)`
  z-index: 3;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Gradient = styled('div')`
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
`

export const BottomGradient = styled(Gradient)`
  background: linear-gradient(
    to top,
    rgba(20, 20, 20, 1) 12%,
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

export const TextWrapper = styled('div')`
  width: 40%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  color: ${({ theme }) => theme.palette.common.white};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 55%;
  }
`

export const ButtonsWrapper = styled('div')`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.palette.common.white};
  margin-top: ${({ theme }) => theme.spacing(2.5)};
  flex-wrap: wrap;

  > * {
    &:first-of-type {
      margin-right: ${({ theme }) => theme.spacing(1.2)};
      margin-bottom: ${({ theme }) => theme.spacing(1.2)};
    }
  }
`

export const Button = styled(IconButton)`
  overflow: hidden;
  display: block;
  font-weight: bold;
  border-radius: 4px;
  display: flex;
  font-size: ${({ theme }) => theme.typography.pxToRem(18)};
  height: 43px;
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  transition: background-color 350ms ease;

  svg {
    font-size: 32px;
  }

  > span {
    margin-left: ${({ theme }) => theme.spacing(1.2)};
  }
`

export const PlayButton = styled(Button)`
  background-color: rgba(255, 255, 255, 1);
  color: #141414;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`

export const InfoButton = styled(Button)`
  background-color: rgba(109, 109, 110, 1);
  color: #fff;

  &:hover {
    background-color: rgba(109, 109, 110, 0.5);
  }

  svg {
    font-size: 28px;
  }
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
  font-size: 1.4vw;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 3vw;
  }
`
