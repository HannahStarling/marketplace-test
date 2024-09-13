import { Navigate } from 'react-router-dom';
import { routesPath } from '@shared/routes/routes-path';

export const DefaultRedirectPage = () => {
  return <Navigate to={routesPath.Product} />;
};
