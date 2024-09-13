import './ui-banner.scss';
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { UiButton } from '@/shared/ui-components/buttons/ui-button/ui-button';
import { IProps } from '@/types/common';

interface IUiBannerProps extends IProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  buttonText: string;
}

export const UiBanner: FC<IUiBannerProps> = ({ title, subtitle, icon, buttonText }) => {
  return (
    <Box className="ui-banner">
      {icon && <Box className="ui-banner__icon">{icon}</Box>}
      <Box className="ui-banner__text">
        <Typography color="primary" variant="subtitle1" className="ui-banner__title">
          {title}
        </Typography>
        <Typography color="primary" variant="overline" className="ui-banner__subtitle">
          {subtitle}
        </Typography>
      </Box>
      <UiButton>{buttonText}</UiButton>
    </Box>
  );
};
