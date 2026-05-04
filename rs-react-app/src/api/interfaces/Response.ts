import type { Animal } from "./Animal";

export interface AnimalResponse {
  page: Page;
  sort: Sort;
  animals: Animal [];
}

export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export type Sort = {
  clauses: number [];
}

