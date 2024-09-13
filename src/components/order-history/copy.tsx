import React, { FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface IProps {
  number: string;
}

export const OrderHistoryCopyNumber: FC<IProps> = ({ number }) => {
  return (
    <>
      {`#${number.slice(0, 7)}`} <ContentCopyIcon fontSize="small" />
    </>
  );
};
