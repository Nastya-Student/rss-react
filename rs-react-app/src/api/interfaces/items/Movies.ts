export interface Movie {
  uid: string;
  title: string;
  mainDirector: {
    uid: string;
    name: string;
  };
  titleBulgarian: string;
  titleCatalan: string;
  titleChineseTraditional: string;
  titleGerman: string;
  titleItalian: string;
  titleJapanese: string;
  titlePolish: string;
  titleRussian: string;
  titleSerbian: string;
  titleSpanish: string;
  stardateFrom: string;
  stardateTo: string;
  yearFrom: string;
  yearTo: string;
  usReleaseDate: string;
}
