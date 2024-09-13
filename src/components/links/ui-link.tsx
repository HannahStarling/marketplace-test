import './ui-link.scss';
import React, { FC } from 'react';
import classNames from 'classnames';
import { IProps } from '@/types/common';

interface IUiLinkProps extends IProps {
  href: string;
}

export const UiLink: FC<IUiLinkProps> = ({ children, href, className, ...props }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props} href={href} className={classNames('ui-link', className)}>
      {children}
    </a>
  );
};
