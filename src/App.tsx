import './App.scss';
import { FC } from 'react';
import { MainPage } from '@pages/main-page/main-page';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { TOAST_OPTIONS } from '@shared/constants/notifications/toast-options';
import { useInitApp } from '@/features/app/hooks/use-init-app';

export const App: FC = () => {
  useInitApp();

  return (
    <MainPage>
      <Outlet />
      <ToastContainer {...TOAST_OPTIONS} />
    </MainPage>
  );
};
