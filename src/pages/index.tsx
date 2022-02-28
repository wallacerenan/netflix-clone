import type { NextPage } from 'next'
import type { Movies, MovieResult } from 'types/movies'

import { useEffect, useState } from 'react'
import { getTopRated } from 'services/movies'
import { random } from 'utils/number'

import PageLayout from 'components/PageLayout'
import MoviesRow from 'components/MoviesRow'
import HeroBanner from 'components/HeroBanner'

const Home: NextPage = () => {
  const [movies, setMoviesList] = useState<Movies>()
  const [featured, setFeatured] = useState<MovieResult>()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopRated()
      setMoviesList(data)

      const sorted = random(0, data.results.length - 1)

      setFeatured(data.results[sorted])
    }

    fetchData()
  }, [])

  return (
    <PageLayout>
      {featured && <HeroBanner movie={featured} />}
      {movies && (
        <MoviesRow
          title={movies.title}
          movies={movies.results}
          path={movies.path}
        />
      )}
    </PageLayout>
  )
}

export default Home
