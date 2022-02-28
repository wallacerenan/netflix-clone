import type { MovieResult } from 'types/movies'

import Image from 'next/image'

import {
  Container,
  BottomGradient,
  RightGradient,
  Title,
  Wrapper,
  MovieWrapper,
  Description,
  TopGradient,
} from './styles'
import { getImageSrc } from 'utils/links'

type HeroBannerProps = {
  movie: MovieResult
}

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
        <MovieWrapper>
          <Title>{movie.title}</Title>
          <Description>{movie.overview}</Description>
        </MovieWrapper>
      </Container>
    </Wrapper>
  )
}

export default HeroBanner
