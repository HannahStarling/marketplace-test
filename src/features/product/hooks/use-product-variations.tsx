import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Product, ProductVariation } from '@/types/product';
import { addToCart } from '@/features/cart/utils';
import { useGetProductVariations } from '@/features/product/hooks/use-get-product-variations';

export const useProductVariations = ({ productId }: { productId: Product['id'] }) => {
  const dispatch = useDispatch();
  const { data: variations, isLoading, error } = useGetProductVariations({ productId });

  // Состояние для хранения выбранной вариации
  const [selectedVariation, setSelectedVariation] = useState<ProductVariation | null>(null);

  // Найти вариацию с минимальной ценой и установить её как активную по умолчанию
  useEffect(() => {
    if (variations?.data?.length) {
      const variationWithMinPrice = variations.data.reduce((prev, curr) => (prev.price < curr.price ? prev : curr));
      setSelectedVariation(variationWithMinPrice);
    }
  }, [variations]);

  // Обработчик выбора вариации
  const handleVariationSelect = (variation: ProductVariation) => {
    setSelectedVariation(variation);
  };

  // Обработчик добавления в корзину
  const handleAddToCart = () => {
    if (selectedVariation) {
      addToCart(dispatch)({ variationId: selectedVariation.id, amount: 1, variation: selectedVariation });
    }
  };

  const selectedPrice = selectedVariation ? selectedVariation.price : 0;

  return {
    variations: variations?.data || [],
    selectedVariation,
    handleVariationSelect,
    selectedPrice,
    handleAddToCart,
    isLoading,
    error,
  };
};
