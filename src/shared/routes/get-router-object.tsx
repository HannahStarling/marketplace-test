import { RouteObject } from 'react-router-dom';
import React from 'react';
import { DefaultRedirectPage } from '@pages/default-redirect-page/default-redirect-page';
import { Route } from '@/types/routes';

/**
 * Преобразует конфигурацию маршрутов в объект, который используется в react-router
 * */
export const getRouterObjects = (routes: Record<string, Route>): RouteObject[] => {
  const routesArray = Object.values(routes);

  const routeObjects = routesArray.map((route) => ({
    path: route.path,
    element: route.element,
    index: true,
  }));

  const redirectRoutes = [
    {
      path: '/',
      element: <DefaultRedirectPage />,
    },
  ];

  return [...routeObjects, ...redirectRoutes];
};
