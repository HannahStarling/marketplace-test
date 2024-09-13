import { FC } from 'react';
import { Typography } from '@mui/material';
import { toPriceFormat } from '@shared/helpers/to-price-format';
import { routesPath } from '@shared/routes/routes-path';
import useNavigateToPath from '@shared/hooks/use-navigate-to-path';
import { useGetProductImagesQuery, useGetProductVariationsQuery } from '@shared/redux/reducers/api-service';
import { UiCard } from '@/shared/ui-components/data-display/ui-card/ui-card';
import { UiButton } from '@/shared/ui-components/buttons/ui-button/ui-button';
import { Product } from '@/types/product';

interface IProductCardProps {
  item: Product;
}

export const ProductCard: FC<IProductCardProps> = ({ item }) => {
  const { id: productId, name } = item;
  const handleViewDetails = useNavigateToPath(`/${routesPath.Product}/${productId}`);
  const { data: images, isLoading: isLoadingImages } = useGetProductImagesQuery({ productId });
  const { data: productVariations, isLoading: isLoadingContent } = useGetProductVariationsQuery(productId);
  const imagesAll = images?.data;
  const productVariation = productVariations?.data?.[0];

  return (
    <UiCard
      isLoadingContent={isLoadingContent}
      isLoadingImages={isLoadingImages}
      className="product-card"
      images={imagesAll}
      actions={
        <UiButton className="product-card__button" variant="outlined" onClick={handleViewDetails}>
          Добавить в корзину
        </UiButton>
      }
    >
      <Typography className="product-card__title" gutterBottom>
        {name}
      </Typography>
      <Typography className="product-card__price" color="primary" variant="subtitle2">
        от {toPriceFormat(productVariation?.price)}
      </Typography>
      {/* для демонстрации из макета, логика в API отсутствует */}
      <div className="product-card__price-info">
        <Typography className="product-card__old-price" color="secondary" variant="body2">
          {toPriceFormat(450500)}
        </Typography>
        <Typography className="product-card__discount" color="info.main" variant="body2">
          -10%
        </Typography>
      </div>
    </UiCard>
  );
};
