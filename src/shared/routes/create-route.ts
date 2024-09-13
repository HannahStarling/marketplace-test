import { ReactElement } from 'react';

export const createRoute = (element: ReactElement, path: string, isDefault = false) => ({
  element,
  path,
  isDefault,
});
