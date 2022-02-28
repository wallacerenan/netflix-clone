import { MovieResult } from 'types/movies'
import { getImageSrc } from 'utils'
import { ImageWrapper, SliderItem } from './styles'

import Image from 'next/image'

type MovieCardProps = {
  movie: MovieResult
  index?: number
  onClick?: () => void
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <SliderItem onClick={onClick}>
      <ImageWrapper>
        <Image
          alt={movie.title ?? movie.name}
          src={getImageSrc(movie.poster_path)}
          layout="fill"
          objectFit="cover"
          quality={50}
        />
      </ImageWrapper>
    </SliderItem>
  )
}

export default MovieCard
