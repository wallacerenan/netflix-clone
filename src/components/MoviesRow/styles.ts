import { styled } from '@mui/material/styles'

export const Container = styled('section')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: 20px;
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
  padding: 12px;
  color: red;
`

export const ImageWrapper = styled('div')`
  position: relative;
  transition: all 250ms ease-in-out;
  width: 300px;
  height: 300px;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-fit: cover !important;
  }
`

export const ArrowImageWrapper = styled('div')`
  position: relative;
  width: 50px !important;
  height: 50px !important;
  transition: all 250ms ease-in-out;
  opacity: 0;
  height: 100%;

  > span {
    position: unset !important;
  }

  .image {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    object-fit: cover !important;

    &.left {
      transform: rotate(90deg) !important;
    }
  }
`

export const ArrowWrapper = styled('div')`
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  z-index: 100;
  height: calc(100% - 12px);
  cursor: pointer;

  &.left {
    left: 0;
    right: initial;
    transform: rotate(180deg) !important;
  }

  &:hover {
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.7) 10%,
      rgba(0, 0, 0, 0)
    );
    .arrow {
      transform: scale(1.12);
    }
  }
`
