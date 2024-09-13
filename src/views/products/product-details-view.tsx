import React, { FC } from 'react';
import { UiStateHandler } from '@ui-components/data-display/ui-state-handler/ui-state-handler';
import { ProductView } from '@/views/products/product';
import { ProductDetailsComponent } from '@/components/products/details/product-details';
import { useProductVariations } from '@/features/product/hooks/use-product-variations';

interface IProductDetailsViewProps {
  productId: number;
}

export const ProductDetailsView: FC<IProductDetailsViewProps> = ({ productId }) => {
  const { variations, selectedVariation, handleVariationSelect, selectedPrice, handleAddToCart, isLoading, error } = useProductVariations({
    productId,
  });

  return (
    <UiStateHandler data={variations} isLoading={isLoading} error={!!error}>
      <ProductView
        productId={productId}
        Component={ProductDetailsComponent}
        additionalProps={{
          variations,
          selectedVariation,
          handleVariationSelect,
          selectedPrice,
          handleAddToCart,
        }}
      />
    </UiStateHandler>
  );
};
