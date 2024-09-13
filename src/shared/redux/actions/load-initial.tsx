import { createAction, Dispatch } from '@reduxjs/toolkit';
import { loadCartFromLocalStorage } from '@/features/cart/utils/local-storage';
import { loadOrderHistoryFromLocalStorage } from '@/features/order-history/utils/local-storage';
import { CartItems, ProductVariations } from '@/types/product';
import { OrderHistoryType } from '@/types/order-history';

export const loadStateFromLocalStorageAction = createAction<{
  cartItems: CartItems | undefined;
  productVariation: ProductVariations | undefined;
  orderHistoryData: OrderHistoryType[];
}>('LOAD_STATE_FROM_STORAGE');

export const loadStateFromLocalStorage = (dispatch: Dispatch) => () => {
  const { cartItems, productVariation } = loadCartFromLocalStorage();
  const orderHistoryData = loadOrderHistoryFromLocalStorage();

  dispatch(
    loadStateFromLocalStorageAction({
      cartItems,
      productVariation,
      orderHistoryData,
    })
  );
};
