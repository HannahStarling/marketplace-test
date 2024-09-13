import { ReactElement } from 'react';

export enum Routes {
  Product = 'Product',
  ProductDetail = 'ProductDetail',
  OrderHistory = 'OrderHistory',
  OrderHistoryDetail = 'OrderHistoryDetail',
  Cart = 'Cart',
  OrderCheckout = 'OrderCheckout',
}

export type Route = {
  path: string;
  element: ReactElement;
  children?: Array<Route>;
  isDefault?: boolean;
};

export type RoutesConfig = {
  routes: Record<string, Route>;
};
