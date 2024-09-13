import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadStateFromLocalStorage } from '@shared/redux/actions/load-initial';

export const useInitApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadStateFromLocalStorage(dispatch)();
  }, []);
};
