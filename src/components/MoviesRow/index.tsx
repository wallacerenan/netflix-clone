import type { MovieResult } from 'types/movies'
import { useRef } from 'react'
import { Button, ButtonsWrapper, Wrapper, MoviesWrapper, Title } from './styles'

import Slider from 'react-slick'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Container from '@mui/material/Container'
import MovieCard from './MovieCard'

type MoviesRowProps = {
  movies: MovieResult[]
  path: string
  title: string
  onClickCard?: (movie: MovieResult) => void
}

const breakpoint = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 2,
    },
  },
]

const MoviesRow: React.FC<MoviesRowProps> = ({
  movies,
  path,
  title,
  onClickCard,
}) => {
  const SliderRef = useRef<Slider>(null)

  return (
    <Container maxWidth="xl">
      <Wrapper layout>
        <Title>
          <Link href={path}>{title}</Link>
        </Title>
        <MoviesWrapper>
          <ButtonsWrapper className="arrow left">
            <Button onClick={SliderRef.current?.slickPrev}>
              <ChevronLeftIcon />
            </Button>
          </ButtonsWrapper>
          <Slider
            infinite
            swipe
            ref={SliderRef}
            slidesToShow={7}
            slidesToScroll={4}
            speed={380}
            arrows={false}
            responsive={breakpoint}
          >
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => {
                  onClickCard && onClickCard(movie)
                }}
              />
            ))}
          </Slider>

          <ButtonsWrapper className="arrow right">
            <Button onClick={SliderRef.current?.slickNext}>
              <ChevronRightIcon />
            </Button>
          </ButtonsWrapper>
        </MoviesWrapper>
      </Wrapper>
    </Container>
  )
}

export default MoviesRow
