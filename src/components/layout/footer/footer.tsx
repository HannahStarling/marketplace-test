import './footer.scss';
import { FC } from 'react';
import { Typography } from '@mui/material';
import { Logo } from '@/components/layout/logo/logo';
import { FooterLinks } from '@/components/layout/footer/footer-links';
import { UiLink } from '@/shared/ui-components/links/ui-link';
import { useFooterLinks } from '@/features/layout/footer/hooks/use-footer-links';

export const Footer: FC = () => {
  const { copyrightLinks, appLinks, socialLinks } = useFooterLinks();

  return (
    <footer className="footer">
      <Logo className="footer__logo" />

      <div className="footer__info">
        <FooterLinks section="social" title="Присоединяйтесь к нам" links={socialLinks} />
        <FooterLinks section="apps" title="Устанавливайте приложение" links={appLinks} />
      </div>

      <ul className="footer__copyright">
        {copyrightLinks.map((link) => (
          <li key={link.href}>
            <Typography variant="caption">
              <UiLink href={link.href}>{link.text}</UiLink>
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
};
