import { ChangeEvent, FC } from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IProps } from '@/types/common';

interface IUiQuantityProps extends IProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  max?: number;
}

export const UiQuantity: FC<IUiQuantityProps> = ({ quantity, onQuantityChange, max = Number.MAX_SAFE_INTEGER, className }) => {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value));
    onQuantityChange(value);
  };

  return (
    <Box className={`${className} quantity`}>
      <IconButton className={`${className}-button-decrease quantity__button-decrease`} onClick={handleDecrease}>
        <RemoveIcon className={`${className}-button-decrease-icon quantity__button-decrease-icon`} />
      </IconButton>
      <InputBase type="number" className={`${className}-input quantity__input`} value={quantity} onChange={handleInputChange} />
      <IconButton className={`${className}-button-increase quantity__button-increase`} onClick={handleIncrease}>
        <AddIcon className={`${className}-button-increase quantity__button-increase-icon`} />
      </IconButton>
    </Box>
  );
};
