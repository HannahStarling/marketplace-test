import { renderIcons } from '@shared/utils/render-icons';
import { useMemo } from 'react';
import { UnicodeStrings } from '@shared/constants/common-strings';

export const useFooterLinks = () => {
  const { Inst, Vk, GooglePlay, AppStore, Facebook } = renderIcons();

  const socialLinks = useMemo(
    () => [
      { href: 'https://www.instagram.com', icon: Inst },
      { href: 'https://www.vk.com', icon: Vk },
      { href: 'https://www.facebook.com', icon: Facebook },
    ],
    []
  );

  const appLinks = useMemo(
    () => [
      { href: 'https://play.google.com', icon: GooglePlay },
      { href: 'https://apps.apple.com', icon: AppStore },
    ],
    []
  );

  const copyrightLinks = useMemo(
    () => [
      { href: 'https://www.sionic.com', text: `${UnicodeStrings.Copyright} Sionic` },
      { href: 'https://www.sionic.com/legal', text: 'Правовая информация' },
      { href: 'https://www.sionic.com/privacy', text: 'Политика конфиденциальности' },
    ],
    []
  );

  return {
    copyrightLinks,
    appLinks,
    socialLinks,
  };
};
