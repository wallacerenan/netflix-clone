import type { MovieResult } from 'types/movies'
import { Container, ImageWrapper, MoviesWrapper, Title } from './styles'
import { getImageSrc } from 'utils'

import Image from 'next/image'
import Link from 'next/link'

type MoviesRowProps = {
  movies: MovieResult[]
  path: string
  title: string
}

const MoviesRow: React.FC<MoviesRowProps> = ({ movies, path, title }) => {
  return (
    <Container>
      <Title>
        <Link href={path}>{title}</Link>
      </Title>
      <MoviesWrapper>
        {movies.map(movie => {
          return (
            <ImageWrapper key={movie.id}>
              <Image
                alt={movie.original_title}
                src={getImageSrc(movie.poster_path)}
                className="image"
                layout="fill"
                quality={75}
              />
            </ImageWrapper>
          )
        })}
      </MoviesWrapper>
    </Container>
  )
}

export default MoviesRow
