import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const CardTitle = styled(Typography)(() => ({
  color: 'var(--text-secondary)',
  fontSize: '0.875rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
}));
