import type { Season } from './Seasons';
import type { Series } from './Series';

export interface Episode {
  title: string;
  titleGerman: string;
  series: Series;
  season: Season;
  seasonNumber: number;
  episodeNumber: number;
  productionSerialNumber: number;
  yearFrom: number;
  yearTo: number;
  usAirDate: number;
}
