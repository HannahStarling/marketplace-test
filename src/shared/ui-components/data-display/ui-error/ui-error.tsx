import React from 'react';
import { Box, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

export const UiError: React.FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
    <ErrorOutline color="error" style={{ fontSize: 60 }} />
    <Typography variant="h6" color="textSecondary" mt={2}>
      Произошла ошибка. Попробуйте снова позже.
    </Typography>
  </Box>
);
