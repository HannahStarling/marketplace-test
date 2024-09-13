import React, { FC } from 'react';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { COLORS } from '@shared/constants/theme/colors';
import { routesPath } from '@shared/routes/routes-path';
import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { useSelector } from 'react-redux';
import { getTotalItemsInCart } from '@shared/redux/selectors';
import { IProps } from '@/types/common';

export const CartButton: FC<IProps> = () => {
  const navigateToCart = useNavigateToPath(routesPath.Cart);
  const itemCount = useSelector(getTotalItemsInCart);

  return (
    <IconButton sx={{ border: '1px solid #727280', width: 50, height: 50 }} onClick={navigateToCart} size="large" color="secondary">
      <Badge
        max={10}
        badgeContent={itemCount}
        color="primary"
        sx={{
          '& .MuiBadge-dot': {
            backgroundColor: COLORS.secondaryWhite,
            color: COLORS.accentBlue,
          },
          '& .MuiBadge-badge': {
            width: 31,
            height: 31,
            backgroundColor: COLORS.secondaryWhite,
            color: COLORS.accentBlue,
            fontWeight: 600,
          },
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="medium" />
      </Badge>
    </IconButton>
  );
};
