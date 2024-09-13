import './ui-paragraph.scss';
import { FC } from 'react';
import classNames from 'classnames';
import { IProps } from '@/types/common';

export const UiParagraph: FC<IProps> = ({ children, className, ...props }) => {
  return (
    <p {...props} className={classNames('ui-paragraph', className)}>
      {children}
    </p>
  );
};
