export interface Comic {
  uid: string;
  title: string;
  publishedYear: number;
  publishedMonth: number;
  publishedDay: number;
  coverYear: number;
  coverMonth: number;
  coverDay: number;
  numberOfPages: number;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  photonovel: boolean;
  adaptation: boolean;
}
