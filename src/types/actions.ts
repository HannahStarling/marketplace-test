import { ProductVariation } from '@/types/product';

/** CART */
export type AddItemPayload = { variationId: number; amount: number; variation: ProductVariation };
export type UpdateItemAmountPayload = { variationId: number; amount: number };
export type RemoveItemPayload = number;

/** ORDER HISTORY */
export type AddToOrderHistoryPayload = {
  price: number;
  deliveryDate: string;
  deliveryTime: string;
  address: string;
  phone: string;
  name: string;
};
