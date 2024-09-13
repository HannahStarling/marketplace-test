import { Dispatch } from '@reduxjs/toolkit';
import { addToOrderHistoryAction } from '@shared/redux/actions/order-history';
import { AddToOrderHistoryPayload } from '@/types/actions';

export const addToOrderHistory = (dispatch: Dispatch) => (payload: AddToOrderHistoryPayload) => {
  dispatch(addToOrderHistoryAction(payload));
};
