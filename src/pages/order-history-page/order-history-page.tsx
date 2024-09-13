import './order-history-page.scss';
import React, { FC } from 'react';
import { Page } from '@/components/layout/page/page';
import { OrderHistoryView } from '@/views/order/order-history/order-history-view';

export const OrderHistoryPage: FC = () => {
  return (
    <Page className="order-history" title="История заказов" showGoBack={false}>
      <OrderHistoryView />
    </Page>
  );
};
