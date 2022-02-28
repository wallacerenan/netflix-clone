import { useEffect, useMemo, useRef, useState } from 'react'
import { MovieResult, MovieVideoResult } from 'types/movies'
import { getImageSrc } from 'utils'
import { getMovieVideos } from 'services/movies'
import {
  BottomGradient,
  ButtonsWrapper,
  CloseButton,
  CloseWrapper,
  Container,
  HeaderWrapper,
  InfoWrapper,
  PlayButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './styles'

import Image from 'next/image'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CloseIcon from '@mui/icons-material/Close'
import ReactPlayer from 'react-player'

type MovieInfoProps = {
  onClose?: () => void
  movie?: MovieResult | null
}

const ButtonPlay: React.FC<{ onClick?: () => void }> = props => (
  <PlayButton {...props}>
    <PlayArrowIcon />
    <span>Trailer</span>
  </PlayButton>
)

const ButtonClose: React.FC<{ onClick?: () => void }> = props => (
  <CloseButton {...props}>
    <CloseIcon />
  </CloseButton>
)

const MovieInfo: React.FC<MovieInfoProps> = ({ movie, onClose }) => {
  const [video, setVideo] = useState<MovieVideoResult | null>(null)
  const [showImage, setShowImage] = useState(true)
  const [play, setPlay] = useState(true)

  const player = useRef<ReactPlayer>(null)

  const videoUrl = useMemo(() => {
    if (!video) return null

    return `https://www.youtube.com/watch?v=${video.key}`
  }, [video])

  const showPlayer = play && !!videoUrl && !showImage

  useEffect(() => {
    const body = document.querySelector('body')

    const lastOverflow = body?.style.overflowY as string

    if (movie) {
      body && (body.style.overflowY = 'hidden')
    }

    return () => {
      body && (body.style.overflowY = lastOverflow)
    }
  }, [movie])

  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => {
      if (e.key == 'Escape' || e.key == 'Esc') {
        onClose && onClose()
      }
    }

    window.addEventListener('keyup', onEscape)

    return () => {
      window.removeEventListener('keyup', onEscape)
    }
  }, [onClose])

  useEffect(() => {
    const fetch = async () => {
      if (movie && movie.id) {
        try {
          const data = await getMovieVideos(movie.id)
          if (data.results && data.results.length) {
            setVideo(data.results[0])
            setShowImage(false)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }

    fetch()
  }, [movie])

  return (
    <>
      {movie && (
        <>
          <CloseWrapper onClick={onClose} />
          <Wrapper>
            <Container>
              <HeaderWrapper>
                <ButtonClose
                  onClick={() => {
                    onClose && onClose()
                  }}
                />
                <Image
                  alt="banner image"
                  src={getImageSrc(movie.backdrop_path)}
                  layout="fill"
                  objectFit="cover"
                />
                {showPlayer && (
                  <ReactPlayer
                    loop
                    playsinline
                    ref={player}
                    volume={100}
                    width="100%"
                    height="100%"
                    progressInterval={50}
                    playing={play}
                    controls={false}
                    style={{
                      zIndex: 1,
                      position: 'absolute',
                      left: '0',
                      top: '0',
                    }}
                    url={videoUrl}
                    onPlay={() => setShowImage(false)}
                  />
                )}
                <TitleWrapper>
                  <Title>{movie.title ?? movie.name}</Title>
                  <ButtonsWrapper>
                    <ButtonPlay
                      onClick={() => {
                        if (!videoUrl) return
                        window.open(videoUrl, '_black')
                        setPlay(false)
                        setShowImage(true)
                      }}
                    />
                  </ButtonsWrapper>
                </TitleWrapper>
                <BottomGradient />
              </HeaderWrapper>
              <InfoWrapper>
                {movie.release_date && (
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                )}

                <span>{movie.overview}</span>
              </InfoWrapper>
            </Container>
          </Wrapper>
        </>
      )}
    </>
  )
}

export default MovieInfo
