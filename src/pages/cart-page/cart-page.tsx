import './cart-page.scss';
import { FC } from 'react';
import { Page } from '@/components/layout/page/page';
import { CartView } from '@/views/cart/cart-view';

export const CartPage: FC = () => {
  return (
    <Page className="cart" title="Корзина" showGoBack={false}>
      <CartView />
    </Page>
  );
};
