import React, { FC, useCallback, useState } from 'react';
import { useGetProductsQuery } from '@shared/redux/reducers/api-service';
import { ProductList } from '@/components/products/list';
import { Category } from '@/types/product';
import { UiStateHandler } from '@/shared/ui-components/data-display/ui-state-handler/ui-state-handler';

interface IProps {
  categoryId: Category['id'] | null;
}

export const ProductListView: FC<IProps> = ({ categoryId }) => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const range = [page * 15, (page + 1) * 15];

  const { data, error, isLoading } = useGetProductsQuery({
    range,
    categoryId,
  });

  const loadMore = useCallback(async () => {
    if (!loading && data?.hasNextPage) {
      setLoading(true);
      await setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }
  }, [loading, data?.hasNextPage]);

  return (
    <UiStateHandler data={data?.data || []} isLoading={isLoading || loading} error={!!error}>
      <ProductList data={data?.data || []} loading={loading} loadMore={loadMore} />
    </UiStateHandler>
  );
};
