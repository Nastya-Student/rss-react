export type ResponseItem = {
  name: string;
  description: string[];
};

export type Page = {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
};

export type Sort = {
  clauses: number[];
};

export interface CommonResponse<T> {
  page: Page;
  sort: Sort;
  animals: T[];
}
