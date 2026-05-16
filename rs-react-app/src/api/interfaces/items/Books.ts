export interface Book {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  numberOfPages: number;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  novel: boolean;
  referenceBook: boolean;
  biographyBook: boolean;
  rolePlayingBook: boolean;
  ebook: boolean;
  anthology: boolean;
  novelization: boolean;
  unauthorizedPublication: boolean;
  audiobook: boolean;
  audiobookAbridged: boolean;
  audiobookPublishedYear: number;
  audiobookPublishedMonth: number;
  audiobookPublishedDay: number;
  audiobookRunTime: number;
  productionNumber: number;
}
