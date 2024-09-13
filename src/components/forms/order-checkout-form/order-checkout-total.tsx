import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { UiButton } from '@/shared/ui-components/buttons/ui-button/ui-button';

interface IOrderCheckoutTotalProps {
  cartPrice: number;
  totalPrice: number;
  deliveryPrice: number;
}

export const OrderCheckoutTotal: FC<IOrderCheckoutTotalProps> = ({ cartPrice, totalPrice, deliveryPrice }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '292px',
      }}
    >
      <Box
        sx={{
          height: '122px',
          borderRadius: '20px',
          background: '#F0F4FB',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <Typography sx={{ color: '#727280' }}>Стоимость товаров {toPriceFormat(cartPrice)}</Typography>
        <Typography sx={{ color: '#727280' }}>Стоимость доставки {toPriceFormat(deliveryPrice)}</Typography>
        <Typography sx={{ color: '#727280', display: 'flex', justifyContent: 'space-between', paddingTop: '10px' }}>
          Итого:
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#2D2D2F',
            }}
            component="span"
          >
            {toPriceFormat(cartPrice)}
          </Typography>
        </Typography>
      </Box>
      <UiButton type="submit">Сделать заказ</UiButton>
    </Box>
  );
};
