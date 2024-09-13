import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { SentimentDissatisfied } from '@mui/icons-material';

interface UiEmptyProps {
  message?: string;
}

export const UiEmpty: FC<UiEmptyProps> = ({ message = 'Нет данных для отображения' }) => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
    <SentimentDissatisfied fontSize="large" color="action" />
    <Typography variant="h6" mt={2}>
      {message}
    </Typography>
  </Box>
);
