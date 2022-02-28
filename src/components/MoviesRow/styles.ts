import { styled } from '@mui/material/styles'
import { motion } from 'framer-motion'

import IconButton from '@mui/material/IconButton'

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 20;
  margin-bottom: ${({ theme }) => theme.spacing(5.5)};

  .slick-track {
    transition-timing-function: ease-in-out !important;
  }

  .arrow {
    position: absolute;
    width: 50px;
    height: 100%;
    z-index: 30;
    opacity: 0;
    transition: all 400ms ease;

    &.right {
      top: 0;
      right: 0;
    }

    &.left {
      top: 0;
      left: 0;
    }
  }
`

export const Title = styled('h2')`
  width: 100%;
  margin: 0 4% 0.5em 4%;
  display: table-cell;
  vertical-align: bottom;
  line-height: 1.25vw;
  font-size: 1.4vw;

  a {
    color: #fff;
  }
`

export const MoviesWrapper = styled('div')`
  width: 100%;
  color: red;
  margin-left: -4px;
  position: relative;

  &:hover {
    .arrow {
      opacity: 1 !important;
    }
  }
`

export const ImageWrapper = styled('div')`
  position: relative;
  transition: all 250ms ease-in-out;
  width: 100%;
  height: calc(70vw / 3.8);
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    height: calc(70vw / 2.4);
  }

  &:hover {
    transform: scale(1.02);
  }
`

export const SliderItem = styled(motion.div)`
  padding: 4px;
  position: relative;
`

export const ButtonsWrapper = styled('div')`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Button = styled(IconButton)`
  height: 100%;
  border-radius: 0px;
  padding: 0;
  overflow: hidden !important;
  width: 50px !important;
  background-color: rgba(0, 0, 0, 0.12) !important;

  &:hover {
    background-color: rgba(0, 0, 0, 0.16) !important;
  }

  svg {
    color: #fff !important;
    font-size: 80px;
  }
`

export const CardExpanded = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  height: 85%;
  color: white;
  box-shadow: 5px 5px 15px 5px #000000;
  background-color: #141414 !important;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CardImageWrapper = styled('div')`
  width: 100%;
  height: 60%;
  position: relative;
`

export const CardExpandedTitle = styled('h3')`
  text-align: center;
`
