import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductImagesComponent } from '@/components/products/details/images';
import { ProductVariationsComponent } from '@/components/products/details/variations';
import { Product, ProductImages, ProductVariation, ProductVariations } from '@/types/product';

interface IProps {
  product?: Product;
  images?: ProductImages;
  variations: ProductVariations;
  selectedVariation: ProductVariation | null;
  selectedPrice: ProductVariation['price'];

  handleAddToCart: VoidFunction;

  handleVariationSelect(variant: ProductVariation): void;
}

export const ProductDetailsComponent: FC<IProps> = ({
  product,
  images,
  variations,
  handleVariationSelect,
  selectedVariation,
  selectedPrice,
  handleAddToCart,
}) => {
  return (
    <>
      <Typography variant="h3">{product?.name}</Typography>
      <Box className="product-detail__details">
        <ProductImagesComponent images={images || []} />
        <ProductVariationsComponent
          variations={variations}
          selectedVariation={selectedVariation}
          handleVariationSelect={handleVariationSelect}
          selectedPrice={selectedPrice}
          handleAddToCart={handleAddToCart}
        />
      </Box>
    </>
  );
};
