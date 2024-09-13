import { FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query/react';
import { hasNextPage } from '@/shared/helpers/api/has-next-page';
import { getTotalFromContentRange } from './get-total-from-content-range';

// Функция для трансформации ответа с учетом пагинации
export const transformResponseWithPagination = <T>(response: T, meta?: FetchBaseQueryMeta, range?: number[]) => {
  // todo Content-Range всегда пуст (?)
  const total = getTotalFromContentRange(meta?.response?.headers.get('Content-Range'));
  const hasMore = hasNextPage(total, range ? range[1] : 0);
  return { data: response, total, hasNextPage: hasMore };
};
