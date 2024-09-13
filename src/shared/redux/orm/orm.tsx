import { ORM, Session } from 'redux-orm';
import { OrderHistory } from '@shared/redux/orm/models/order-history';
import { CartItem } from './models/cart-item';
import { ProductVariation } from './models/product-variation';

export type SessionWithModels = Session<{
  CartItem: typeof CartItem;
  ProductVariation: typeof ProductVariation;
  OrderHistory: typeof OrderHistory;
}>;

// Создание ORM и регистрация моделей
export const orm = new ORM();
orm.register(ProductVariation, CartItem, OrderHistory);

// Определение начального состояния
const initialState = orm.getEmptyState();

export { initialState };
