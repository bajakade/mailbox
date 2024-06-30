export type Message = {
  id: string;
  subject: string;
  content: string;
  isRead: boolean;
  createdAt: string;
  readAt: string;
};

export type PageMetaData = {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  next: number | null;
  prev: number | null;
};

export interface PaginatedResult<T> {
  data: Array<T>;
  meta: PageMetaData;
}
