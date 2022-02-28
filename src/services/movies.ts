import { MovieDetails } from 'types/movieDetails'
import { Movies, MovieVideo } from 'types/movies'

import api from './api'

export async function getTopRated(): Promise<Movies> {
  const { data } = await api.get('/movie/top_rated')
  return {
    title: 'Em alta',
    path: '/em-alta',
    ...data,
  }
}

export async function getOriginals(): Promise<Movies> {
  const { data } = await api.get('/discover/tv?with_network=213')
  return {
    title: 'Originais do Netflix',
    path: '/originais',
    ...data,
  }
}

export async function getTrending(): Promise<Movies> {
  const { data } = await api.get('/trending/all/week')
  return {
    title: 'Recomendados para você',
    path: '/para-voce',
    ...data,
  }
}

export async function getAction(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=28')
  return {
    title: 'Ação',
    path: '/acao',
    ...data,
  }
}

export async function getComedy(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=35')
  return {
    title: 'Comédia',
    path: '/comedia',
    ...data,
  }
}

export async function getHorror(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=27')
  return {
    title: 'Terror',
    path: '/terror',
    ...data,
  }
}

export async function getRomance(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=10749')
  return {
    title: 'Romance',
    path: '/romance',
    ...data,
  }
}

export async function getDocumentary(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=99')
  return {
    title: 'Documentários',
    path: '/documentario',
    ...data,
  }
}

export async function getFantasy(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=14')
  return {
    title: 'Fantasia',
    path: '/fantasia',
    ...data,
  }
}

export async function getAventura(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=12')
  return {
    title: 'Aventura',
    path: '/aventura',
    ...data,
  }
}

export async function getAnimation(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=16')
  return {
    title: 'Animação',
    path: '/animacao',
    ...data,
  }
}

export async function getFiction(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=878')
  return {
    title: 'Ficção científica',
    path: '/ficcao-cientifica',
    ...data,
  }
}

export async function getSuspense(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=9648')
  return {
    title: 'Suspense',
    path: '/suspense',
    ...data,
  }
}

export async function getWar(): Promise<Movies> {
  const { data } = await api.get('/discover/movie?with_genres=10752')
  return {
    title: 'Guerra',
    path: '/guerra',
    ...data,
  }
}

export async function getSeries(): Promise<Movies> {
  const { data } = await api.get('/trending/tv/week')
  return {
    title: 'Séries recomendadas para você',
    path: '/para-voce',
    ...data,
  }
}

export async function getHomePageMovies(): Promise<Movies[]> {
  return Promise.all([
    getTopRated(),
    getOriginals(),
    getTrending(),
    getAction(),
    getSeries(),
    getComedy(),
    getHorror(),
    getRomance(),
    getAnimation(),
    getDocumentary(),
    getFantasy(),
    getAventura(),
    getFiction(),
    getSuspense(),
    getWar(),
  ])
}

export async function getMovieVideos(
  movieId: string | number
): Promise<MovieVideo> {
  const { data } = await api.get(`/movie/${movieId}/videos`)

  return data
}

export async function getMovieDetails(
  movieId: string | number
): Promise<MovieDetails> {
  const { data } = await api.get(
    `/movie/${movieId}?append_to_response=videos,images`
  )

  return data
}
