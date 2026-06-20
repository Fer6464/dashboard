export interface AnimeResponse {
  anime_id: number
  title: string
  score: number
  rank: number
  popularity: number
  members: number
  synopsis: string
  start_date: string
  end_date: string
  type: string
  episodes: number
  image_url: string
  genres: string[]
  studios: string[]
}


export interface StudioResponse {
  entity_id: number
  entity_type: string
  name: string
  image_url: string
  appearance_count: number
  average_score: number
}

export interface GenreResponse {
  genre: string
  appearance_count: number
  average_score: number
}



export type StudioListResponse = StudioResponse[] | Record<string, StudioResponse>;
export type GenreListResponse = GenreResponse[] | Record<string, GenreResponse>;
export type AnimeListResponse = AnimeResponse[] | Record<string, AnimeResponse>;