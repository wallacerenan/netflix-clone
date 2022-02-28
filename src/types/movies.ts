export type MovieResult = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  name: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type Movies = {
  title: string
  path: string
  page: number
  results: MovieResult[]
  total_pages: number
  total_results: number
}

export interface MovieVideoResult {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}

export type MovieVideo = {
  id: number
  results: MovieVideoResult[]
}
