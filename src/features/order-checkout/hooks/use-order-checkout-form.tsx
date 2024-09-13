import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPriceInCart } from '@shared/redux/selectors';
import { toast } from 'react-toastify';
import { OrderCheckoutFormValues } from '@/types/order-history';
import { DELIVERY_PRICE } from '@/features/order-checkout/constants';
import { AddToOrderHistoryPayload } from '@/types/actions';
import { addToOrderHistory } from '@/features/order-history/utils';

export const useOrderCheckoutForm = () => {
  const navigateToOrderHistory = useNavigateToPath('/order-history');

  const dispatch = useDispatch();
  const cartPrice = useSelector(getTotalPriceInCart);
  const price = cartPrice + DELIVERY_PRICE;

  const handleSubmit = (values: OrderCheckoutFormValues) => {
    const payload: AddToOrderHistoryPayload = {
      ...values,
      price,
      deliveryDate: values.deliveryDate.format('DD.MM.YYYY'),
      deliveryTime: values.deliveryTime.format('HH:mm'),
    };
    addToOrderHistory(dispatch)(payload);
    navigateToOrderHistory();
    toast.success('Заказ оформлен, ожидайте доставку');
  };

  return {
    handleSubmit,
    price,
    cartPrice,
  };
};
