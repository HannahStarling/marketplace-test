import './order-history-details-page.scss';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { UiError } from '@ui-components/data-display/ui-error/ui-error';
import { Page } from '@/components/layout/page/page';
import { OrderHistoryDetailsView } from '@/views/order/order-history/order-history-details-view';

export const OrderHistoryDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page className="order-history-details" title={`Заказ №${id}`}>
      {id ? <OrderHistoryDetailsView id={id} /> : <UiError />}
    </Page>
  );
};
