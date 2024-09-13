import './main-page.scss';
import React, { FC, PropsWithChildren } from 'react';
import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { AdvertBanner } from '@/components/banners/advert-banner';

export const MainPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <aside className="aside">
        <AdvertBanner />
      </aside>
      <Footer />
    </div>
  );
};
