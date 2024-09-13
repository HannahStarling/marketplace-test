import './logo.scss';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';
import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { IProps } from '@/types/common';

interface LogoProps extends IProps {}

export const Logo: FC<LogoProps> = ({ className, children = 'React', ...props }) => {
  const navigateToStart = useNavigateToPath('/');

  return (
    <Typography sx={{ fontSize: 37 }} variant="h1" className={classNames('logo', className)} onClick={navigateToStart} {...props}>
      {children}
    </Typography>
  );
};
