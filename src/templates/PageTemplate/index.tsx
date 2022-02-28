import type { MovieResult } from 'types/movies'
import type { MoviePage } from 'types/page'

import { useEffect, useState } from 'react'
import { random } from 'utils/number'
import { MoviesWrapper } from './styles'

import Head from 'next/head'
import PageLayout from 'components/PageLayout'
import MoviesRow from 'components/MoviesRow'
import HeroBanner from 'components/HeroBanner'
import MovieInfo from 'components/MovieInfo'

const PageTemplate: React.FC<MoviePage> = ({ movies, title }) => {
  const [featured, setFeatured] = useState<MovieResult>()
  const [movie, setMovie] = useState<MovieResult | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const [topRated] = movies

      const sorted = random(0, topRated.results.length - 1)

      setFeatured(topRated.results[sorted])
    }

    fetchData()
  }, [movies])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageLayout>
        {featured && <HeroBanner movie={featured} />}
        <MoviesWrapper>
          {movies &&
            movies.map(movie => (
              <MoviesRow
                key={movie.title}
                title={movie.title}
                movies={movie.results}
                path={movie.path}
                onClickCard={setMovie}
              />
            ))}
        </MoviesWrapper>
        {!!movie && (
          <MovieInfo
            movie={movie}
            onClose={() => {
              setMovie(null)
            }}
          />
        )}
      </PageLayout>
    </>
  )
}

export default PageTemplate
