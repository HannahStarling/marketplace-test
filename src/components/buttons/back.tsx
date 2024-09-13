import { FC } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Возвращает на предыдущую страницу
  };

  return (
    <Box
      onClick={handleGoBack}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <ArrowBackIosNewIcon
        sx={{
          color: '#2967FF',
          fontSize: '16px',
          fontWeight: 600,
        }}
      />
      <Typography
        variant="subtitle2"
        sx={{
          color: '#2967FF',
          fontSize: '16px',
          fontWeight: 600,
        }}
      >
        Назад
      </Typography>
    </Box>
  );
};
