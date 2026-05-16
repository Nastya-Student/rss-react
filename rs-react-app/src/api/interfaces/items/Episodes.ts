export interface Episode {
  uid: string;
  title: string;
  titleGerman: string;
  titleItalian: number;
  titleJapanese: number;
  series: {
    uid: string;
    title: string;
  };
  season: {
    uid: string;
    title: string;
  };
  seasonNumber: number;
  episodeNumber: number;
  productionSerialNumber: string;
  featureLength: boolean;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  usAirDate: string;
  finalScriptDate: number;
}
