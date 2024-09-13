import React, { FC } from 'react';
import { UiButton } from '@ui-components/buttons/ui-button/ui-button';
import { Box, Typography } from '@mui/material';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import classNames from 'classnames';
import { ProductVariation, ProductVariations } from '@/types/product';

interface IProductVariationsComponentProps {
  variations: ProductVariations;
  selectedVariation: ProductVariation | null;
  selectedPrice: ProductVariation['price'];

  handleAddToCart: VoidFunction;

  handleVariationSelect(variant: ProductVariation): void;
}

export const ProductVariationsComponent: FC<IProductVariationsComponentProps> = ({
  variations,
  selectedVariation,
  handleVariationSelect,
  selectedPrice,
  handleAddToCart,
}) => {
  return (
    <Box className="product-detail__details-box">
      {/* Цена выбранной вариации */}
      <Typography className="product-detail__price">{toPriceFormat(selectedPrice)}</Typography>
      {/* из API не очевидна (или отсутствует) связь один к многим (продукт к вариациям)
       есть список вариацией, но их не связать с конкретной вариацией продукта из массива вариаций
        компонент из макета
        */}
      <Typography>Размер</Typography>
      {/* Кнопки для выбора вариации */}
      {variations.map((variant) => (
        <UiButton
          key={variant.id}
          className={classNames('product-detail__button', { active: selectedVariation?.id === variant.id })}
          variant="outlined"
          onClick={() => handleVariationSelect(variant)}
        >
          {toPriceFormat(variant.price)} (в наличии: {variant.stock})
        </UiButton>
      ))}
      {/* Кнопка для добавления в корзину */}
      <UiButton onClick={handleAddToCart}>В корзину за {toPriceFormat(selectedPrice)}</UiButton>
    </Box>
  );
};
