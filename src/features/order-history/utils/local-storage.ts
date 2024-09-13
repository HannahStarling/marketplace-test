import { OrderHistoryType } from '@/types/order-history';

export const loadOrderHistoryFromLocalStorage = (): OrderHistoryType[] => {
  try {
    const serializedState = localStorage.getItem('OrderHistory');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load order history from local storage:', err);
    return [];
  }
};

export const saveOrderHistoryToLocalStorage = (orderHistory: OrderHistoryType[]) => {
  try {
    const serializedState = JSON.stringify(orderHistory);
    localStorage.setItem('OrderHistory', serializedState);
  } catch (err) {
    console.error('Could not save order history to local storage:', err);
  }
};
