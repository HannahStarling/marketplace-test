import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getOrderHistory } from '@shared/redux/selectors';
import { OrderHistoryComponent } from '@/components/order-history/order-history';

export const OrderHistoryView: FC = () => {
  const orderHistory = useSelector(getOrderHistory);

  return <OrderHistoryComponent orderHistory={orderHistory} />;
};
