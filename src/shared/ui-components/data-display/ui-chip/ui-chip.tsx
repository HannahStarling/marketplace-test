import { FC } from 'react';
import { Chip } from '@mui/material';
import { ChipProps } from '@mui/material/Chip/Chip';

interface IProps extends ChipProps {}

export const UiChip: FC<IProps> = ({ ...props }) => {
  return <Chip {...props} />;
};
