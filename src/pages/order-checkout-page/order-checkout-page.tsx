import './order-checkout-page.scss';
import { FC } from 'react';
import { Page } from '@/components/layout/page/page';
import { OrderCheckoutView } from '@/views/order/order-checkout/order-checkout-view';

export const OrderCheckoutPage: FC = () => {
  return (
    <Page title="Доставка" className="order-checkout" showGoBack={false}>
      <OrderCheckoutView />
    </Page>
  );
};
