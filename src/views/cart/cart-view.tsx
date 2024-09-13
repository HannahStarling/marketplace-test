import { FC } from 'react';
import { useCartView } from '@/features/cart/hooks/use-cart-view';
import { CartComponent } from '@/components/cart/cart';

export const CartView: FC = () => {
  const { handleRemoveItem, cartItems, navigateToOrderCheckout, totalPrice, handleQuantityChange } = useCartView();

  return (
    <CartComponent
      handleRemoveItem={handleRemoveItem}
      cartItems={cartItems}
      checkout={navigateToOrderCheckout}
      totalPrice={totalPrice}
      handleQuantityChange={handleQuantityChange}
    />
  );
};
