import React from 'react';
import { Typography } from '@mui/material';
import { UiLink } from '@/components/links/ui-link';

interface FooterLinksProps {
  title: string;
  links: { href: string; icon: React.ReactNode }[];
  section: string;
}

export const FooterLinks: React.FC<FooterLinksProps> = ({ title, links, section }) => (
  <div className={`footer__info-${section}`}>
    <Typography variant="body1">{title}</Typography>
    <ul className={`footer__info-${section}-list`}>
      {links.map((link) => (
        <li key={link.href}>
          <UiLink href={link.href}>{link.icon}</UiLink>
        </li>
      ))}
    </ul>
  </div>
);
//
