const IMAGE_URL = 'https://image.tmdb.org/t/p'

export const getImageSrc = (path: string) => `${IMAGE_URL}/original${path}`

export const getSmallImageSrc = (path: string) => `${IMAGE_URL}/w300${path}`
