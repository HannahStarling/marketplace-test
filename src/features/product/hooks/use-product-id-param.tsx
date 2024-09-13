import { useParams } from 'react-router-dom';

export const useProductIdParam = () => {
  const { productId } = useParams<{ productId: string }>();
  const productNumberId = Number(productId);
  return { productId: productNumberId };
};
