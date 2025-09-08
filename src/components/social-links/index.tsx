'use client';

import Link from 'next/link';

import Instagram from '@/assets/svg/instagram.svg';
import Linkedin from '@/assets/svg/linkedin.svg';
import Note from '@/assets/svg/note.svg';
import Telegram from '@/assets/svg/telegram.svg';
import X from '@/assets/svg/x.svg';
import { cn } from '@/lib/utils';

const socialLinks = [
  {
    href: 'https://x.com/eth_floripa',
    ariaLabel: 'Follow ETH Floripa on X',
    icon: X,
  },
  {
    href: 'https://www.instagram.com/ethfloripa/',
    ariaLabel: 'Follow ETH Floripa on Instagram',
    icon: Instagram,
  },
  {
    href: 'https://www.linkedin.com/company/ethfloripa',
    ariaLabel: 'Follow ETH Floripa on LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://t.me/+1Xe-xIQ059o0OGVh',
    ariaLabel: 'Join the ETH Floripa Telegram group',
    icon: Telegram,
  },
  {
    href: 'https://blockful.notion.site/ETH-Floripa-Deck-232bdff33ba78099a9a5cf0e67ae1bf2?source=copy_link',
    ariaLabel: 'See the event agenda',
    icon: Note,
  },
];

const SocialLinks = ({
  variant = 'primary',
}: {
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.ariaLabel}
          className={cn(
            'flex size-14 items-center justify-center rounded-2xl border-2 border-foreground/40 backdrop-blur-sm transition-colors',
            variant === 'primary'
              ? 'bg-black/25'
              : 'bg-foreground/20 hover:border-foreground hover:bg-foreground/30',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          {<link.icon />}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
