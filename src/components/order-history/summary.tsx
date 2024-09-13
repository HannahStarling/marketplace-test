import React, { FC, SyntheticEvent } from 'react';
import { Typography } from '@mui/material';
import { renderIcons } from '@shared/utils/render-icons';
import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { routesPath } from '@shared/routes/routes-path';

interface IOrderHistorySummaryProps {
  name: string;
  date: string;
  id: string;
}

export const OrderHistorySummary: FC<IOrderHistorySummaryProps> = ({ name, date, id }) => {
  const { Xiaomi } = renderIcons();
  // Переход на страницу деталей заказа
  const navigate = useNavigateToPath(`/${routesPath.OrderHistory}/${id}`);

  const handleDetailsClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    navigate();
  };

  return (
    <div className="order-history__item">
      <div className="order-history__item-icon">{Xiaomi}</div>
      <Typography className="order-history__item-title">{name}</Typography>
      <Typography className="order-history__item-date">{date}</Typography>
      <Typography className="order-history__item-more" onClick={handleDetailsClick}>
        Подробнее
      </Typography>
    </div>
  );
};
