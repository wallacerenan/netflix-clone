import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

export const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 30;
  overflow: auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
`

export const CloseWrapper = styled('div')`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 29;
`

export const Container = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(5)};
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  border-radius: 6px;
  color: #fff;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 85vw;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 90vw;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
  }
`

export const HeaderWrapper = styled('div')`
  width: 100%;
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  overflow: hidden;
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
    rgba(24, 24, 24, 1) 2%,
    rgba(24, 24, 24, 0.7) 20%,
    rgba(24, 24, 24, 0.5) 30%,
    transparent 100%
  );
`

export const Title = styled('h1')`
  color: #fff;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  width: 60%;
`

export const ButtonsWrapper = styled('div')`
  display: flex;
`

export const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing(2, 7)};
  height: 85%;
  width: 100%;
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

export const CloseButton = styled(Button)`
  background-color: rgba(24, 24, 24, 1);
  color: #fff;
  z-index: 3;
  position: absolute;
  right: 24px;
  top: 20px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 30px;
  }

  &:hover {
    background-color: rgba(24, 24, 24, 0.7);
  }
`

export const InfoWrapper = styled('div')`
  margin-top: -20px;

  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: ${({ theme }) => theme.spacing(2, 7)};

  > * {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`
