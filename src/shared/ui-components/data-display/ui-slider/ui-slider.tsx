import './ui-slider.scss';
import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import { getCustomDotsSettings } from '@shared/helpers/components/slider/get-custom-dots-settings';
import { IProps } from '@/types/common';
import { Image } from '@/types/product';

// Настройки для карусели
const defaultCarouselSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface IUiSliderProps extends IProps, Settings {
  showCustomDots?: boolean;
  images?: Image[];
}

export const UiSlider: FC<IUiSliderProps> = ({ children, showCustomDots = false, images = [], ...props }) => {
  // Определяем настройки слайдера в зависимости от showCustomDots
  const allProps = {
    ...defaultCarouselSettings,
    ...(showCustomDots && images.length > 0 ? getCustomDotsSettings(images) : {}),
    ...props,
  };

  return <Slider {...allProps}>{children}</Slider>;
};
