import './product-details-page.scss';
import React, { FC } from 'react';
import { UiError } from '@ui-components/data-display/ui-error/ui-error';
import { Page } from '@/components/layout/page/page';
import { useProductIdParam } from '@/features/product/hooks/use-product-id-param';
import { ProductDetailsView } from '@/views/products/product-details-view';

export const ProductDetailPage: FC = () => {
  const { productId } = useProductIdParam();

  return <Page className="product-detail">{productId ? <ProductDetailsView productId={productId} /> : <UiError />}</Page>;
};
