import { createSelector } from 'reselect';
import { orm } from '@shared/redux/orm/orm';
import { RootState } from '@shared/redux/store';
import { SessionBoundModel } from 'redux-orm/Model';
import { CartItems } from '@/types/product';
import { OrderHistoryType } from '@/types/order-history';

// Получаем сессию ORM из состояния
const getOrmSession = (state: RootState) => {
  return orm.session(state.orm.cart);
};

export const getOrderHistory = createSelector([getOrmSession], (session) => {
  return session.OrderHistory.all().toModelArray() as OrderHistoryType[];
});

export const getOrderHistoryItem = (itemId: string) =>
  createSelector([getOrmSession], (session) => {
    return (session.OrderHistory as SessionBoundModel).withId(itemId) as OrderHistoryType;
  });

// Селектор для получения всех элементов корзины
export const getCartItems = createSelector([getOrmSession], (session) => {
  return session.ProductVariation.all().toModelArray() as CartItems;
});

// Селектор для получения количества товаров в корзине
export const getTotalItemsInCart = createSelector([getCartItems], (cartItems) => {
  return cartItems.reduce((total, item) => total + item.amount, 0) as number;
});

// Селектор для получения общей стоимости товаров в корзине
export const getTotalPriceInCart = createSelector([getCartItems], (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.amount, 0) as number;
});

// Селектор для получения общего количества товаров
export const getAllProductVariations = createSelector([getOrmSession], (session) => {
  return session.ProductVariation.all().toModelArray();
});

// Селектор для получения конкретного элемента корзины по ID
export const getCartItemById = (itemId: number) =>
  createSelector([getOrmSession], (session) => {
    return (session.CartItem as SessionBoundModel).withId(itemId);
  });
