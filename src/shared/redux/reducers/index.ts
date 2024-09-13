import { combineReducers } from '@reduxjs/toolkit';
import { ormReducer } from './orm';

export const rootReducer = combineReducers({
  cart: ormReducer,
});
