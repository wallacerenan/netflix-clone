import { styled } from '@mui/material/styles'

export const Container = styled('header')`
  width: 100%;
  display: flex;
  height: 68px;
  padding: 0 60px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 10%,
    rgba(0, 0, 0, 0)
  );
`

export const LogoWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinksWrapper = styled('ul')`
  display: flex;
  margin-left: ${({ theme }) => theme.spacing(5.5)};

  a {
    transition: color 400ms;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.common.white};

    &:first-of-type {
      margin-right: ${({ theme }) => theme.spacing(2)};
    }

    &:hover {
      &:not(.active) {
        color: #b3b3b3;
      }
    }

    &.active {
      font-weight: 700;
      cursor: default;
    }
  }
`

export const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export const TopBar = styled('div')`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 68px;
  box-shadow: none;
  background-color: transparent;
  transition: background-color 400ms ease;

  &.scrolled {
    background-color: rgb(20, 20, 20);
  }
`
