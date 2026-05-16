export interface ComicSeries {
  uid: string;
  title: string;
  publishedYearFrom: number;
  publishedMonthFrom: number;
  publishedDayFrom: number;
  publishedYearTo: number;
  publishedMonthTo: number;
  publishedDayTo: number;
  numberOfIssues: number;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  miniseries: boolean;
  photonovelSeries: boolean;
}
