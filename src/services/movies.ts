import { Movies } from 'types/movies'

import api from './api'

export async function getTopRated(): Promise<Movies> {
  const { data } = await api.get('/movie/top_rated')
  return {
    title: 'Em alta',
    path: '/em-alta',
    ...data,
  }
}
