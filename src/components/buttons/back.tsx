import { FC } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';

const StyledBox = styled(Box)({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
});

const StyledIcon = styled(ArrowBackIosNewIcon)({
  color: '#2967FF',
  fontSize: '16px',
  fontWeight: 600,
});

const StyledTypography = styled(Typography)({
  color: '#2967FF',
  fontSize: '16px',
  fontWeight: 600,
});

export const BackButton: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <StyledBox onClick={handleGoBack}>
      <StyledIcon />
      <StyledTypography variant="subtitle2">Назад</StyledTypography>
    </StyledBox>
  );
};
