import { Slide, ToastOptions } from 'react-toastify';

export const TOAST_OPTIONS: ToastOptions = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: 'light',
  transition: Slide,
};
