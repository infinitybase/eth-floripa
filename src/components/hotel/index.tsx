'use client';

import Image from 'next/image';
import Link from 'next/link';

import HotelImage from '@/assets/images/selina-hotel.jpeg';
import Beach from '@/assets/svg/beach.svg';
import Breakfast from '@/assets/svg/breakfast.svg';
import Pool from '@/assets/svg/pool.svg';
import Tropical from '@/assets/svg/tropical.svg';

import Chip from '../chip';

const Hotel = () => {
  return (
    <section
      id="venue"
      className="container flex flex-col gap-6 py-10 lg:flex-row lg:gap-12 lg:py-20"
    >
      <div className="relative aspect-video h-full w-full lg:aspect-[4/3] lg:w-1/2">
        <Image
          src={HotelImage}
          alt="Hotel with pool"
          fill
          className="mx-auto rounded-3xl"
          sizes="(max-width: 768px) 100vw"
        />
      </div>
      <div className="flex flex-col gap-3 lg:w-1/2 lg:gap-6">
        <p className="text-center font-semibold text-base text-tertiary lg:text-left lg:text-xl">
          Venue
        </p>
        <h2 className="text-center font-bold font-bricolage text-secondary text-xl lg:text-left lg:text-4xl">
          Praia Mole Hotel
        </h2>
        <p className="text-center text-base text-secondary lg:text-left lg:text-2xl">
          With beachfront access, tropical breakfasts, Brazilian flavors,
          inspiring poolside, and cozy accommodations. Guests can stay on-site
          and let the experience flows naturally from morning to night.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start lg:gap-4">
          <Chip icon={<Beach />} label="Beach Access" variant="primary" />
          <Chip
            icon={<Breakfast />}
            label="Brazilian Breakfast"
            variant="secondary"
          />
          <Chip icon={<Pool />} label="Pool Chats" variant="primary" />
          <Chip
            icon={<Tropical />}
            label="Tropical Setting"
            variant="secondary"
          />
        </div>

        <Link
          href="https://lu.ma/m5hujc9a"
          className="btn-primary w-full text-center lg:w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Plan your trip!
        </Link>
      </div>
    </section>
  );
};

export default Hotel;
