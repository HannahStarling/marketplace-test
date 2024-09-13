import { Routes } from '@/types/routes';

export const routesPath: Record<Routes, string> = {
  [Routes.Product]: 'product',
  [Routes.ProductDetail]: 'product/:productId',
  [Routes.OrderHistory]: 'order-history',
  [Routes.OrderHistoryDetail]: 'order-history/:id',
  [Routes.Cart]: 'cart',
  [Routes.OrderCheckout]: 'order-checkout',
};
