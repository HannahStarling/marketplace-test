import React, { FC } from 'react';
import { InfiniteScroll } from '@/shared/ui-components/scroll/infinite-scroll';
import { ProductCard } from './card';
import { Products } from '@/types/product';

interface IProductListProps {
  data: Products;
  loading: boolean;
  loadMore: VoidFunction;
}

export const ProductList: FC<IProductListProps> = ({ loading, data, loadMore }) => {
  return (
    <InfiniteScroll callback={loadMore} loading={loading} viewHeight="70vh" threshold={0.8} data={data}>
      <div className="product-list">
        {data?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </InfiniteScroll>
  );
};
