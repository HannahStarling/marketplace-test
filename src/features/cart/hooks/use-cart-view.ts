import { useDispatch, useSelector } from 'react-redux';
import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { routesPath } from '@shared/routes/routes-path';
import { getCartItems, getTotalPriceInCart } from '@shared/redux/selectors';
import { removeFromCart, updateCartItemAmount } from '@/features/cart/utils';

export const useCartView = () => {
  const dispatch = useDispatch();
  const navigateToOrderCheckout = useNavigateToPath(`/${routesPath.OrderCheckout}`, { replace: true });
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPriceInCart);

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    updateCartItemAmount(dispatch)(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId: number) => {
    removeFromCart(dispatch)(itemId);
  };

  return { handleRemoveItem, cartItems, navigateToOrderCheckout, totalPrice, handleQuantityChange };
};
