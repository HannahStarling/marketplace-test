import React, { FC, useState } from 'react';
import { ProductCategories } from '@/components/products/categories';
import { ProductListView } from '@/views/products/product-list';

export const ProductsView: FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategorySelect = (categoryId: number | null) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <ProductCategories onCategorySelect={handleCategorySelect} />
      <ProductListView categoryId={selectedCategoryId} />
    </>
  );
};
