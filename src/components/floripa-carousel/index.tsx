'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import Floripa1 from '@/assets/images/floripa-1.png';
import Floripa2 from '@/assets/images/floripa-2.png';
import Floripa3 from '@/assets/images/floripa-3.png';
import Floripa4 from '@/assets/images/floripa-4.png';
import DotsButton from './components/dots-button';

const slides = [Floripa1, Floripa2, Floripa3, Floripa4];

const FloripaCarousel = () => {
  const [emblaRef, api] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <section ref={emblaRef} className="relative overflow-hidden">
      <div className="flex">
        {slides.map((slide) => (
          <div
            key={slide.src}
            className="relative aspect-square flex-[0_0_100%] lg:aspect-video"
          >
            <Image
              src={slide.src}
              alt="Florianopolis"
              fill
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </div>
        ))}
      </div>

      <DotsButton emblaApi={api} />
    </section>
  );
};

export default FloripaCarousel;
