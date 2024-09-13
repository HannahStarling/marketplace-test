import './product-page.scss';
import React, { FC } from 'react';
import { Page } from '@/components/layout/page/page';
import { ProductsView } from '@/views/products/products';

export const ProductPage: FC = () => {
  return (
    <Page className="product" title="Категории товаров">
      <ProductsView />
    </Page>
  );
};
