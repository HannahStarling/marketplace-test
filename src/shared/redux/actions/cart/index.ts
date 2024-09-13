import { createAction } from '@reduxjs/toolkit';
import { AddItemPayload, RemoveItemPayload, UpdateItemAmountPayload } from '@/types/actions';

/** Экшены для работы с корзиной */
export const addItemToCart = createAction<AddItemPayload>('cart/addItem');
export const removeItemFromCart = createAction<RemoveItemPayload>('cart/removeItem');
export const updateItemAmount = createAction<UpdateItemAmountPayload>('cart/updateItemAmount');
