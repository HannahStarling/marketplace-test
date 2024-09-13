import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '@pages/not-found-page/not-found-page';
import { getRouterObjects } from '@/shared/routes/get-router-object';
import { App } from '@/App';
import { routesConfig } from './routes-config';

export const getRouter = () => {
  const appRoutes = [
    {
      path: '*',
      element: <NotFoundPage />,
    },
    {
      path: '/',
      element: <App />,
      children: getRouterObjects(routesConfig.routes),
    },
  ];

  return createBrowserRouter(appRoutes);
};

export const router = getRouter();
