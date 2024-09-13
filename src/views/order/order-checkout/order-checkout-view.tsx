import { FC } from 'react';
import { OrderCheckoutForm } from '@/components/forms/order-checkout-form/order-checkout-form';
import { useOrderCheckoutForm } from '@/features/order-checkout/hooks/use-order-checkout-form';

export const OrderCheckoutView: FC = () => {
  const { handleSubmit, price, cartPrice } = useOrderCheckoutForm();

  return <OrderCheckoutForm handleSubmit={handleSubmit} price={price} cartPrice={cartPrice} />;
};
