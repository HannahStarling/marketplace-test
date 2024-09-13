import { FC } from 'react';
import { CardMedia } from '@mui/material';
import { CardMediaProps } from '@mui/material/CardMedia/CardMedia';

interface IUiCardImageProps extends CardMediaProps {
  alt?: string;
}

export const UiCardImage: FC<IUiCardImageProps> = ({ src, alt, ...props }) => (
  <div style={{ overflow: 'hidden', height: '138px' }}>
    <CardMedia
      component="img"
      src={src}
      alt={alt}
      style={{
        objectFit: 'contain',
        width: '214px',
        height: '138px',
      }}
      {...props}
    />
  </div>
);
