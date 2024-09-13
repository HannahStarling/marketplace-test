import { FC, ReactNode } from 'react';
import { Card, CardActions, CardContent, Skeleton } from '@mui/material';
import { CardProps } from '@mui/material/Card/Card';
import { UiCardImage } from '@/shared/ui-components/data-display/ui-card/ui-card-image';
import { UiSlider } from '@/shared/ui-components/data-display/ui-slider/ui-slider';
import { IProps } from '@/types/common';
import { ProductImage } from '@/types/product';

interface IUiCardProps extends IProps, CardProps {
  images?: ProductImage[];
  alt?: string;
  actions?: ReactNode;
  isLoadingImages?: boolean;
  isLoadingContent?: boolean;
}

export const UiCard: FC<IUiCardProps> = ({ images, children, actions, alt, isLoadingImages = false, isLoadingContent = false, ...props }) => {
  let imageContent;

  if (isLoadingImages) {
    imageContent = <Skeleton variant="rectangular" width={214} height={138} />;
  } else if (images && images.length > 1) {
    imageContent = (
      <UiSlider>
        {images.map((image) => (
          <UiCardImage key={image.id} src={image.image_url} alt={image.image_name} />
        ))}
      </UiSlider>
    );
  } else {
    imageContent = <UiCardImage src={images?.[0]?.image_url} alt={alt} />;
  }

  return (
    <Card {...props}>
      {imageContent}
      <CardContent>
        {isLoadingContent ? (
          <>
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={150} height={30} />
          </>
        ) : (
          children
        )}
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  );
};
