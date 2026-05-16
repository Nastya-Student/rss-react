import type { Series } from './Series';

export interface Season {
  uid: string;
  title: string;
  series: Series;
  seasonNumber: number;
  numberOfEpisodes: number;
}
