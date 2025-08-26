'use client';

import type { EmblaCarouselType } from 'embla-carousel';
import { useDotButton } from '@/hooks/use-dot-button';
import { cn } from '@/lib/utils';

interface DotsButtonProps {
  emblaApi?: EmblaCarouselType;
}

const DotsButton = ({ emblaApi }: DotsButtonProps) => {
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="-translate-x-1/2 absolute bottom-2.5 left-1/2 z-10 flex gap-2 rounded-full bg-background p-1.5 lg:bottom-5 lg:p-2">
      {scrollSnaps.map((snap, index) => (
        <button
          key={snap}
          type="button"
          onClick={() => onDotButtonClick(index)}
          aria-label={`Slide ${index + 1}`}
          className={cn(
            'size-2 cursor-pointer rounded-full transition-colors lg:size-3',
            selectedIndex === index ? 'bg-tertiary' : 'bg-primary',
          )}
        />
      ))}
    </div>
  );
};

export default DotsButton;
