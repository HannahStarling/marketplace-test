import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getOrderHistoryItem } from '@shared/redux/selectors';
import { Typography } from '@mui/material';
import { ProductView } from '@/views/products/product';
import { ProductLine } from '@/components/products/line/product-line';

interface IProps {
  id: string;
}

export const OrderHistoryDetailsView: FC<IProps> = ({ id }) => {
  const orderHistoryItem = useSelector(getOrderHistoryItem(id));

  return (
    <>
      <Typography variant="h3">Товары</Typography>
      <div className="order-history-details__products">
        {orderHistoryItem.items.map((item) => {
          return (
            <ProductView
              key={item.product_id}
              productId={item.product_id}
              Component={ProductLine}
              additionalProps={{
                showChip: false,
                item,
              }}
            />
          );
        })}
      </div>
    </>
  );
};
