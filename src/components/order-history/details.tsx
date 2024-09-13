import React, { FC } from 'react';
import copy from 'copy-to-clipboard';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { OrderHistoryInfoItem } from '@/components/order-history/info-item';
import { OrderHistoryCopyNumber } from '@/components/order-history/copy';

interface IOrderHistoryDetailsProps {
  id: string;
  amount: number;
  price: number;
  address: string;
}

export const OrderHistoryDetails: FC<IOrderHistoryDetailsProps> = ({ price, id, address, amount }) => {
  const copyOrderNumber = () => {
    copy(id);
  };

  return (
    <div className="order-history__item-info-container">
      <OrderHistoryInfoItem title="Статус заказа" text="Оплачен/Завершён" suffix="status" />
      <OrderHistoryInfoItem onClick={copyOrderNumber} title="Номер заказа" text={<OrderHistoryCopyNumber number={id} />} suffix="order-number" />
      <OrderHistoryInfoItem title="Кол-во заказов" text={`${amount} шт.`} suffix="amount" />
      <OrderHistoryInfoItem title="Стоимость заказа" text={toPriceFormat(price)} suffix="price" />
      <OrderHistoryInfoItem title="Адрес доставки" text={address} suffix="address" />
    </div>
  );
};
