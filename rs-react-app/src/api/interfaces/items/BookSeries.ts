export interface BookSeries {
  uid: string;
  title: string;
  publishedYearFrom: number;
  publishedMonthFrom: number;
  publishedYearTo: number;
  publishedMonthTo: number;
  numberOfBooks: number;
  yearFrom: number;
  yearTo: number;
  miniseries: boolean;
  ebookSeries: boolean;
}
