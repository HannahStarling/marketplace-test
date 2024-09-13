import { Settings } from 'react-slick';
import { Fragment, ReactNode } from 'react';
import uuid from 'react-uuid';
import { Image } from '@/types/product';

export const getCustomDotsSettings = (images: Image[]): Settings => ({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: ReactNode[]) => (
    <ul>
      {dots.map((dot) => {
        return <Fragment key={`dot-${uuid()}`}>{dot}</Fragment>;
      })}
    </ul>
  ),
  customPaging: (i: number) => {
    const image = images[i];
    return (
      <div className="custom-dot">
        <img src={image.image_url} alt={`Thumbnail ${i}`} />
      </div>
    );
  },
});
