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
}

export type AnimeListResponse = AnimeResponse[] | Record<string, AnimeResponse>;