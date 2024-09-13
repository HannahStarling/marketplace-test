import { createReducer } from '@reduxjs/toolkit';
import { addItemToCart, removeItemFromCart, updateItemAmount } from '@shared/redux/actions/cart';
import { SessionBoundModel } from 'redux-orm/Model';
import { initialState, orm } from '@shared/redux/orm/orm';
import { addToOrderHistoryAction } from '@shared/redux/actions/order-history';
import { v4 as uuid } from 'uuid';
import { loadStateFromLocalStorageAction } from '@shared/redux/actions/load-initial';
import dayjs from 'dayjs';
import { clearCartFromLocalStorage, saveCartToLocalStorage } from '@/features/cart/utils/local-storage';
import { saveOrderHistoryToLocalStorage } from '@/features/order-history/utils/local-storage';

export const ormReducer = createReducer(initialState, (builder) => {
  // @ts-ignore необходимо использовать SessionWithModels
  builder
    .addCase(loadStateFromLocalStorageAction, (state, action) => {
      const { cartItems, productVariation, orderHistoryData } = action.payload;
      const session = orm.session(state);

      // Заполняем корзину
      if (cartItems && Array.isArray(cartItems)) {
        cartItems.forEach((item) => {
          (session.CartItem as SessionBoundModel).create(item);
        });
      }

      // Заполняем вариации продуктов
      if (productVariation && Array.isArray(productVariation)) {
        productVariation.forEach((variation) => {
          (session.ProductVariation as SessionBoundModel).create(variation);
        });
      }

      // Заполняем историю заказов
      if (orderHistoryData && Array.isArray(orderHistoryData)) {
        orderHistoryData.forEach((order) => {
          (session.OrderHistory as SessionBoundModel).create(order);
        });
      }

      return session.state;
    })
    .addCase(addItemToCart, (state, action) => {
      const { variationId, amount, variation } = action.payload;
      const session = orm.session(state);
      const currentVariation = (session.ProductVariation as SessionBoundModel).withId(variationId);
      const cartItem = (session.CartItem as SessionBoundModel).withId(variationId);

      if (currentVariation && cartItem) {
        const newAmount = Math.min(cartItem.amount + amount, variation.stock);
        cartItem.update({ amount: newAmount });
        currentVariation.update({ amount: newAmount });
      } else {
        (session.ProductVariation as SessionBoundModel).create({ ...variation, amount });
        (session.CartItem as SessionBoundModel).create({ id: variationId, amount });
      }

      saveCartToLocalStorage(
        (session.CartItem as SessionBoundModel).all().toRefArray(),
        (session.ProductVariation as SessionBoundModel).all().toRefArray()
      );

      return session.state;
    })
    .addCase(removeItemFromCart, (state, action) => {
      const variationId = action.payload;
      const session = orm.session(state);

      (session.CartItem as SessionBoundModel).withId(variationId).delete();
      (session.ProductVariation as SessionBoundModel).withId(variationId).delete();

      saveCartToLocalStorage(
        (session.CartItem as SessionBoundModel).all().toRefArray(),
        (session.ProductVariation as SessionBoundModel).all().toRefArray()
      );
      return session.state;
    })
    .addCase(updateItemAmount, (state, action) => {
      const { variationId, amount } = action.payload;
      const session = orm.session(state);

      (session.CartItem as SessionBoundModel).withId(variationId).update({ amount });
      (session.ProductVariation as SessionBoundModel).withId(variationId).update({ amount });

      saveCartToLocalStorage(
        (session.CartItem as SessionBoundModel).all().toRefArray(),
        (session.ProductVariation as SessionBoundModel).all().toRefArray()
      );
      return session.state;
    })
    .addCase(addToOrderHistoryAction, (state, action) => {
      const session = orm.session(state);

      const items = (session.ProductVariation as SessionBoundModel).all().toRefArray();
      const newOrder = {
        id: uuid(),
        items,
        ...action.payload,
        date: dayjs().format('DD.MM.YYYY'),
      };

      // Создаём запись в OrderHistory
      (session.OrderHistory as SessionBoundModel).create(newOrder);

      // Сохраняем историю заказов в localStorage
      const currentOrderHistory = (session.OrderHistory as SessionBoundModel).all().toRefArray();
      saveOrderHistoryToLocalStorage(currentOrderHistory);

      // Очищаем корзину
      (session.ProductVariation as SessionBoundModel).all().delete();
      (session.CartItem as SessionBoundModel).all().delete();

      // Очищаем корзину в localStorage
      clearCartFromLocalStorage();

      return session.state;
    });
});
