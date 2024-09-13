import './page.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IProps } from '@/types/common';
import { BackButton } from '@/components/buttons/back';

interface IPageProps extends IProps {
  title?: string;
  showGoBack?: boolean;
  showGoToSettings?: boolean;
}

export const Page: FC<IPageProps> = ({ children, className, title, showGoBack = true, showGoToSettings = false, ...props }) => {
  return (
    <section {...props} className={classNames('page', className)}>
      <div className={classNames('page__menu', `${className}__menu`)}>
        {showGoBack && <BackButton />}
        {title && (
          <Typography variant="h4" className={`${className}__title`}>
            {title}
          </Typography>
        )}
        {showGoToSettings && (
          <RouterLink to="/settings">
            <Typography sx={{ paddingLeft: '107px' }} variant="subtitle2">
              Настройки
            </Typography>
          </RouterLink>
        )}
      </div>
      {children}
    </section>
  );
};
