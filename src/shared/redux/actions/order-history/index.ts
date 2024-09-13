import { createAction } from '@reduxjs/toolkit';
import { AddToOrderHistoryPayload } from '@/types/actions';

export const addToOrderHistoryAction = createAction<AddToOrderHistoryPayload>('order-history/addItem');
