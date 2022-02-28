import { MovieVideo } from './movies'

export type Genre = {
  id: number
  name: string
}

export type ProductionCompany = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type ProductionCountry = {
  iso_3166_1: string
  name: string
}

export type SpokenLanguage = {
  iso_639_1: string
  name: string
}

export type MovieDetails = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection?: any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: any
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  videos: MovieVideo[]
  vote_average: number
  vote_count: number
}
