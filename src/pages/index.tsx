import type { GetStaticProps, NextPage } from 'next'
import type { MoviePage } from 'types/page'

import { getHomePageMovies } from 'services/movies'

import Template from 'templates/PageTemplate'

const HomePage: NextPage<MoviePage> = props => {
  return <Template {...props} />
}

export const getStaticProps: GetStaticProps<MoviePage> = async () => {
  const movies = await getHomePageMovies()

  return {
    props: {
      movies,
      title: 'Início - Netflix',
      slug: '/',
    },
    revalidate: 90,
  }
}

export default HomePage
