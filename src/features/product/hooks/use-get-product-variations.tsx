import { useGetProductVariationsQuery } from '@shared/redux/reducers/api-service';
import { Product } from '@/types/product';

export const useGetProductVariations = ({ productId }: { productId: Product['id'] }) => {
  return useGetProductVariationsQuery(productId);
};
