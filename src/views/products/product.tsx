import { FC } from 'react';
import { useGetProductByIdQuery, useGetProductImagesQuery } from '@shared/redux/reducers/api-service';
import { UiStateHandler } from '@ui-components/data-display/ui-state-handler/ui-state-handler';
import { Product, ProductImages } from '@/types/product';

interface IProductViewProps<T = {}> {
  productId: number;
  Component: FC<{ product: Product | undefined; images: ProductImages | undefined } & T>;
  additionalProps?: T;
}

export const ProductView = <T,>({ productId, Component, additionalProps }: IProductViewProps<T>) => {
  const { data: product, isLoading: productLoading, error: productError } = useGetProductByIdQuery(productId);
  const { data: images, isLoading: imagesLoading, error: imagesError } = useGetProductImagesQuery({ productId });

  const combinedProps = {
    product,
    images: images?.data,
    ...(additionalProps as T),
  };

  return (
    <UiStateHandler data={product ? [product] : []} isLoading={productLoading || imagesLoading} error={Boolean(productError || imagesError)}>
      <Component {...combinedProps} />
    </UiStateHandler>
  );
};
