'use client';

import Link from 'next/link';

import Instagram from '@/assets/svg/instagram.svg';
import X from '@/assets/svg/x.svg';
import { cn } from '@/lib/utils';

const SocialLinks = ({
  variant = 'primary',
}: {
  variant?: 'primary' | 'secondary';
}) => {
  return (
    <div className="flex items-center gap-5">
      <Link
        href="https://x.com/eth_floripa"
        aria-label="Follow ETH Floripa on X"
        className={cn(
          'flex size-14 items-center justify-center rounded-2xl border-2 border-foreground/40 backdrop-blur-sm transition-colors',
          variant === 'primary'
            ? 'bg-black/25'
            : 'bg-foreground/20 hover:border-foreground hover:bg-foreground/30',
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <X />
      </Link>
      <Link
        href="https://www.instagram.com/ethfloripa/"
        aria-label="Follow ETH Floripa on Instagram"
        className={cn(
          'flex size-14 items-center justify-center rounded-2xl border-2 border-foreground/40 backdrop-blur-sm transition-colors',
          variant === 'primary'
            ? 'bg-black/25'
            : 'bg-foreground/20 hover:border-foreground hover:bg-foreground/30',
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </Link>
    </div>
  );
};

export default SocialLinks;
