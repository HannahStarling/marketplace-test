import { Dispatch } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, updateItemAmount } from '@shared/redux/actions/cart';
import { AddItemPayload } from '@/types/actions';

// Добавление товара в корзину
export const addToCart = (dispatch: Dispatch) => (payload: AddItemPayload) => {
  dispatch(addItemToCart(payload));
};

// Обновление количества товара
export const updateCartItemAmount = (dispatch: Dispatch) => (variationId: number, amount: number) => {
  const payload = { variationId, amount };
  dispatch(updateItemAmount(payload));
};

// Удаление товара
export const removeFromCart = (dispatch: Dispatch) => (variationId: number) => {
  dispatch(removeItemFromCart(variationId));
};
