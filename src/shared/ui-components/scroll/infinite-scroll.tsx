import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { isEmpty, isObject } from 'lodash';
import { Box, CircularProgress } from '@mui/material';
import { UiScrollbars } from './ui-scrollbars';
import { IProps } from '@/types/common';

export interface InfiniteScrollProps extends IProps {
  callback: () => void; // Колбэк для подгрузки данных
  loading?: boolean;
  viewHeight?: string; // Высота контейнера
  threshold?: number; // Порог видимости
  skip?: boolean;
  data?: any;
}

export const InfiniteScroll = ({ children, data, callback, loading, viewHeight = '90vh', threshold = 0.8, skip = false }: InfiniteScrollProps) => {
  const { ref, inView } = useInView({ threshold, skip });

  useEffect(() => {
    if (inView && !loading) {
      callback();
    }
  }, [inView, callback, loading]);

  if (isObject(data) && isEmpty(data)) return null;

  return (
    <UiScrollbars style={{ width: '102%', height: '50vh' }}>
      <div style={{ height: viewHeight, width: '100%' }}>
        {children}
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="32px">
            <CircularProgress />
          </Box>
        ) : (
          <div ref={ref} style={{ height: '50px' }} />
        )}
      </div>
    </UiScrollbars>
  );
};
