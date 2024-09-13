import React, { FC, useState } from 'react';
import { UiStateHandler } from '@ui-components/data-display/ui-state-handler/ui-state-handler';
import { useGetCategoriesQuery } from '@shared/redux/reducers/api-service';
import { UiChip } from '@/shared/ui-components/data-display/ui-chip/ui-chip';

interface IProps {
  onCategorySelect: (categoryId: number | null) => void;
}

export const ProductCategories: FC<IProps> = ({ onCategorySelect }) => {
  const { data, error, isLoading } = useGetCategoriesQuery({});
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleCategoryClick = (id: number) => {
    setSelectedCategoryId(id);
    onCategorySelect(id);
  };

  return (
    <div className="product-categories">
      <UiStateHandler data={data?.data || []} isLoading={isLoading} error={!!error}>
        {data?.data.map(({ name, id }) => {
          const onClick = () => handleCategoryClick(id);
          const color = id === selectedCategoryId ? 'primary' : 'default';
          return <UiChip label={name} key={id} onClick={onClick} color={color} />;
        })}
      </UiStateHandler>
    </div>
  );
};
