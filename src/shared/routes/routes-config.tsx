import { ProductPage } from '@pages/product-page/product-page';
import { ProductDetailPage } from '@pages/product-details-page/product-details-page';
import { OrderHistoryPage } from '@pages/order-history-page/order-history-page';
import { CartPage } from '@pages/cart-page/cart-page';
import { OrderCheckoutPage } from '@pages/order-checkout-page/order-checkout-page';
import { OrderHistoryDetailsPage } from '@pages/order-history-details-page/order-history-details-page';
import { routesPath } from '@/shared/routes/routes-path';
import { Routes, RoutesConfig } from '@/types/routes';
import { createRoute } from './create-route';

export const routesConfig: RoutesConfig = {
  routes: {
    [Routes.Product]: createRoute(<ProductPage />, routesPath[Routes.Product], true),
    [Routes.ProductDetail]: createRoute(<ProductDetailPage />, routesPath[Routes.ProductDetail]),
    [Routes.OrderHistory]: createRoute(<OrderHistoryPage />, routesPath[Routes.OrderHistory], true),
    [Routes.OrderHistoryDetail]: createRoute(<OrderHistoryDetailsPage />, routesPath[Routes.OrderHistoryDetail]),
    [Routes.Cart]: createRoute(<CartPage />, routesPath[Routes.Cart]),
    [Routes.OrderCheckout]: createRoute(<OrderCheckoutPage />, routesPath[Routes.OrderCheckout]),
  },
};
