import './product-line.scss';
import React, { FC } from 'react';
import { IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { head } from 'lodash';
import { UiQuantity } from '@ui-components/inputs/ui-quantity/ui-quantity';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { UiParagraph } from '@ui-components/typography/ui-paragraph/ui-paragraph';
import { CartItem, Product, ProductImages } from '@/types/product';

export interface IProductLineProps {
  item: CartItem;
  product: Product | undefined;
  images: ProductImages | undefined;
  showChip: boolean;

  handleRemoveItem?(id: number): void;

  handleQuantityChange?(id: number, amount: number): void;
}

export const ProductLine: FC<IProductLineProps> = ({ showChip = false, item, handleQuantityChange, handleRemoveItem, product, images }) => {
  const src = head(images)?.image_url;

  return (
    <div className="product-line">
      <img alt={product?.description} src={src} className="product-line__image" />
      <div className="product-line__title">
        <UiParagraph className="product-line__title-name">{product?.name}</UiParagraph>
        <UiParagraph className="product-line__title-variation">{product?.description}</UiParagraph>
        {/* компонент из макета для демонстрации, логика в тз отсутствует */}
        {showChip && (
          <div className="product-line__title-chip">
            <UiParagraph className="product-line__title-chip-item product-line__title-chip-item_blue">120 шт.</UiParagraph>
            <UiParagraph className="product-line__title-chip-item product-line__title-chip-item_pink">за 12:48:35</UiParagraph>
            <UiParagraph className="product-line__title-chip-bought">
              Куплено: <span className="product-line__title-chip-bought-accent">150 шт.</span>
            </UiParagraph>
          </div>
        )}
      </div>
      <UiParagraph className="product-line__price">
        {handleQuantityChange ? `от ${toPriceFormat(item.price)}` : `${toPriceFormat(item.price)} шт.`}
      </UiParagraph>
      {!handleQuantityChange ? (
        <UiParagraph className="product-line__amount">
          {item.amount} / {item.amount} шт.
        </UiParagraph>
      ) : (
        <UiQuantity
          className="product-line__amount"
          max={item.stock}
          quantity={item.amount}
          onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
        />
      )}
      {handleRemoveItem && (
        <IconButton className="product-line__button-delete" onClick={() => handleRemoveItem(item.id)}>
          <DeleteOutlinedIcon className="product-line__button-delete-icon" />
        </IconButton>
      )}
    </div>
  );
};
