import { Dayjs } from 'dayjs';
import { CartItems } from '@/types/product';
import { AddToOrderHistoryPayload } from '@/types/actions';

export interface OrderCheckoutFormValues {
  deliveryDate: Dayjs;
  deliveryTime: Dayjs;
  address: string;
  phone: string;
  name: string;
}

export type OrderCheckoutFormErrors = Partial<Record<keyof OrderCheckoutFormValues, string>>;

export type OrderHistoryType = AddToOrderHistoryPayload & { items: CartItems; id: string; date: string };
