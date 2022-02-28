import type { MovieResult } from 'types/movies'
import { getImageSrc } from 'utils/links'

import Image from 'next/image'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import InfoIcon from '@mui/icons-material/Info'

import {
  BottomGradient,
  ButtonsWrapper,
  Container,
  Description,
  InfoButton,
  PlayButton,
  RightGradient,
  TextWrapper,
  Title,
  TopGradient,
  Wrapper,
} from './styles'

type HeroBannerProps = {
  movie: MovieResult
}

const ButtonPlay = () => (
  <PlayButton>
    <PlayArrowIcon />
    <span>Assistir</span>
  </PlayButton>
)
const ButtonMore = () => (
  <InfoButton>
    <InfoIcon />
    <span>Mais informações</span>
  </InfoButton>
)

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  return (
    <Wrapper>
      <TopGradient />
      <BottomGradient />
      <RightGradient />
      <Image
        alt="banner image"
        src={getImageSrc(movie.backdrop_path)}
        layout="fill"
        objectFit="cover"
      />
      <Container maxWidth="xl">
        <TextWrapper>
          <Title>{movie.title}</Title>
          <Description>{movie.overview}</Description>
        </TextWrapper>
        <ButtonsWrapper>
          <ButtonPlay />
          <ButtonMore />
        </ButtonsWrapper>
      </Container>
    </Wrapper>
  )
}

export default HeroBanner
