import React, { FC } from 'react';
import { Avatar } from '@mui/material';
import classNames from 'classnames';
import { IProps } from '@/types/common';

interface IUiAvatarProps extends IProps {}

export const UiAvatar: FC<IUiAvatarProps> = ({ className, ...props }) => {
  return <Avatar {...props} className={classNames('avatar', className)} />;
};
