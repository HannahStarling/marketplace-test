import { useNavigate } from 'react-router-dom';
import { NavigateOptions } from 'react-router/dist/lib/context';

const useNavigateToPath = (path: string, options?: NavigateOptions) => {
  const navigate = useNavigate();

  return () => {
    navigate(path, options);
  };
};

export default useNavigateToPath;
