import { Pagination } from './Pagination';

export type ListInputType<Sort, Filter> = {
  sort?: Sort;
  filter?: Filter | Filter[];
  pagination?: Pagination;
};
