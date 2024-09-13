import { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

interface IOrderHistoryInfoItemProps {
  suffix: string;
  title: ReactNode;
  text: ReactNode;
  onClick?: VoidFunction;
}

export const OrderHistoryInfoItem: FC<IOrderHistoryInfoItemProps> = ({ suffix, text, title, onClick }) => {
  return (
    <div className={`order-history__item-info order-history__item-info-${suffix}`}>
      <Typography className="info-title order-history__item-info-title">{title}</Typography>
      <Typography
        onClick={onClick}
        className={classNames(`info-text order-history__item-info-text`, {
          primary: onClick,
        })}
      >
        {text}
      </Typography>
    </div>
  );
};
