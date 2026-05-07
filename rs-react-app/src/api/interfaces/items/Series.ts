export interface Series {
  title: string;
  abbreviation: string;
  productionStartYear: number;
  productionEndYear: number;
  originalRunStartDate: string;
  originalRunEndDate: string;
  seasonsCount: number;
  episodesCount: number;
  featureLengthEpisodesCount: number;
  productionCompany: {
    name: string;
  };
  originalBroadcaster: {
    name: string;
  };
}
