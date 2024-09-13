import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface UiSpinnerProps {
  size?: number; // Опционально, для изменения размера спиннера
  color?: 'primary' | 'secondary' | 'inherit'; // Опционально, для изменения цвета спиннера
}

export const UiSpinner: React.FC<UiSpinnerProps> = ({ size = 40, color = 'primary' }) => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <CircularProgress size={size} color={color} />
  </Box>
);
