import { SvgIcon } from '@mui/material';
import { ReactElement } from 'react';

const ICON_NAMES = [
  'AppStore',
  'Facebook',
  'GooglePlay',
  'Inst',
  'Vk',
  'Free',
  'Xiaomi',
  'Navigation',
  'Bag',
  'HandCart',
  'Percent',
  'Cart',
] as const;

export const renderIcons = () =>
  ICON_NAMES.reduce((acc, name) => {
    acc[name] = <SvgIcon component={() => <img src={`/assets/icons/${name}.svg`} alt="App Store" />} inheritViewBox />;
    return acc;
  }, {} as { [key in (typeof ICON_NAMES)[number]]: ReactElement });
