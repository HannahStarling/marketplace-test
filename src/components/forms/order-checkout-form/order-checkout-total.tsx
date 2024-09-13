import React, { FC } from 'react';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { UiParagraph } from '@ui-components/typography/ui-paragraph/ui-paragraph';
import { UiButton } from '@/shared/ui-components/buttons/ui-button/ui-button';

interface IOrderCheckoutTotalProps {
  cartPrice: number;
  totalPrice: number;
  deliveryPrice: number;
}

export const OrderCheckoutTotal: FC<IOrderCheckoutTotalProps> = ({ cartPrice, totalPrice, deliveryPrice }) => {
  return (
    <div className="order-checkout__total">
      <div className="order-checkout__total-prices">
        <UiParagraph className="order-checkout__total-prices-label">Стоимость товаров {toPriceFormat(cartPrice)}</UiParagraph>
        <UiParagraph className="order-checkout__total-prices-label">Стоимость доставки {toPriceFormat(deliveryPrice)}</UiParagraph>
        <UiParagraph className="order-checkout__total-prices-label order-checkout__total-prices-label_total">
          Итого:
          <span className="accent">{toPriceFormat(totalPrice)}</span>
        </UiParagraph>
      </div>
      <UiButton type="submit">Сделать заказ</UiButton>
    </div>
  );
};
