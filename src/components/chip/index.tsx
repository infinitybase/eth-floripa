import type { ComponentProps, JSX } from 'react';
import { cn } from '@/lib/utils';

interface ChipProps extends ComponentProps<'div'> {
  label: string;
  icon: JSX.Element;
  variant?: 'primary' | 'secondary';
}

const Chip = ({ label, icon, variant = 'primary', ...props }: ChipProps) => {
  return (
    <div
      {...props}
      className={cn(
        'flex items-center gap-2.5 rounded-2xl px-4 py-1',
        variant === 'primary' ? 'bg-primary/10' : 'bg-tertiary/15',
        props.className,
      )}
    >
      <div className="size-6 text-secondary">{icon}</div>
      <p className="font-normal text-secondary text-xs tracking-[4%]">
        {label}
      </p>
    </div>
  );
};

export default Chip;
