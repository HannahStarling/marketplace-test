import './not-found-page.scss';
import { FC } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Box, Typography } from '@mui/material';
import { MainPage } from '@pages/main-page/main-page';
import { Page } from '@/components/layout/page/page';

export const NotFoundPage: FC = () => {
  return (
    <MainPage>
      <Page className="not-found">
        <Box className="not-found__content">
          <ErrorOutlineIcon fontSize="large" />
          <Typography variant="h2">Страница не найдена</Typography>
        </Box>
      </Page>
    </MainPage>
  );
};
