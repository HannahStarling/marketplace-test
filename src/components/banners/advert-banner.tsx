import React from 'react';
import { renderIcons } from '@shared/utils/render-icons';
import { UnicodeStrings } from '@shared/constants/common-strings';
import { UiBanner } from '@/shared/ui-components/banner/ui-banner';

export const AdvertBanner: React.FC = () => {
  const { Free } = renderIcons();

  return (
    <UiBanner
      title={`Получай${UnicodeStrings.NoWrap}товары`}
      subtitle="бесплатно!"
      icon={Free}
      buttonText={`Узнать${UnicodeStrings.NoWrap}подробнее`}
    />
  );
};
