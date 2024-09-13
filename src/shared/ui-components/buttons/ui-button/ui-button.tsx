import './ui-button.scss';
import { FC } from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';
import classNames from 'classnames';

interface IUiButtonProps extends ButtonProps {}

export const UiButton: FC<IUiButtonProps> = ({ className, ...props }) => {
  return <Button variant="contained" {...props} className={classNames('ui-button', className)} />;
};
