import './header.scss';
import React, { FC } from 'react';
import { Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { UiSearchInput } from '@/shared/ui-components/inputs/ui-input-search/ui-input-search';
import { UiAvatar } from '@/shared/ui-components/avatar/ui-avatar';
import { Logo } from '@/components/layout/logo/logo';
import { CartButton } from '@/components/buttons/cart-button';

interface IProps {}

export const Header: FC<IProps> = () => {
  return (
    <header className="header">
      <Logo />
      <div className="header__location">
        <LocationOnOutlinedIcon className="header__location-icon" />
        <Typography className="header__location-text">Александровск-Сахалинский</Typography>
      </div>
      <UiSearchInput />
      <CartButton />
      <UiAvatar className="header__avatar" />
    </header>
  );
};
