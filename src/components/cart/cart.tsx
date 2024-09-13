import { FC } from 'react';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { UiButton } from '@ui-components/buttons/ui-button/ui-button';
import { renderIcons } from '@shared/utils/render-icons';
import { UiStateHandler } from '@/shared/ui-components/data-display/ui-state-handler/ui-state-handler';
import { CartItem } from '@/types/product';
import { ProductView } from '@/views/products/product';
import { ProductLine } from '@/components/products/line/product-line';

interface IProps {
  totalPrice: number;
  cartItems: CartItem[];
  checkout: VoidFunction;

  handleRemoveItem?(id: number): void;

  handleQuantityChange?(id: number, amount: number): void;
}

export const CartComponent: FC<IProps> = ({ totalPrice, checkout, handleQuantityChange, handleRemoveItem, cartItems }) => {
  const { Bag, HandCart, Percent, Cart } = renderIcons();

  return (
    <div className="cart__container">
      <UiStateHandler data={cartItems} isLoading={false} error={false}>
        <div className="cart__header">
          {/* в макете тут указана группировка по категории,
          однако какую использовать для группировки разных категорий товаров не очевидно из т.з. */}
          <div className="cart__icon">Товары</div>
          <div className="cart__total">
            Стоимость корзины:
            <div className="cart__total-price">{toPriceFormat(totalPrice)}</div>
          </div>
          <div className="cart__checkout-button">
            <UiButton onClick={checkout}>Оформить</UiButton>
          </div>
          <div className="cart__icons">
            <div className="cart__icons-bag">{Bag}</div>
            <div className="cart__icons-cart">{Cart}</div>
            <div className="cart__icons-hand-cart">{HandCart}</div>
            <div className="cart__icons-percent">{Percent}</div>
          </div>
        </div>
        <div className="cart__products">
          {cartItems.map((item: CartItem, i) => (
            <ProductView
              key={item.product_id}
              productId={item.product_id}
              Component={ProductLine}
              additionalProps={{
                handleQuantityChange,
                handleRemoveItem,
                item,
                showChip: i === 0,
              }}
            />
          ))}
        </div>
      </UiStateHandler>
    </div>
  );
};
