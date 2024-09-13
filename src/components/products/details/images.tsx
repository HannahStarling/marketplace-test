import React, { FC } from 'react';
import { Box } from '@mui/material';
import { UiSlider } from '@ui-components/data-display/ui-slider/ui-slider';
import { isEmpty } from 'lodash';
import { UiEmpty } from '@ui-components/data-display/ui-empty/ui-empty';
import { ProductImages } from '@/types/product';

interface IProductImagesProps {
  images: ProductImages;
}

export const ProductImagesComponent: FC<IProductImagesProps> = ({ images }) => {
  return (
    <Box className="product-detail__image-container">
      {isEmpty(images) && <UiEmpty />}
      {images.length > 1 ? (
        <UiSlider showCustomDots images={images}>
          {images.map((image) => (
            <img key={image.id} src={image.image_url} alt={image.image_name} className="product-detail__slider-image" />
          ))}
        </UiSlider>
      ) : (
        images.map((image) => <img key={image.id} src={image.image_url} alt={image.image_name} className="product-detail__slider-image" />)
      )}
    </Box>
  );
};
