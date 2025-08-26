'use client';

import Image from 'next/image';
import Island from '@/assets/images/islands.png';

const data = {
  isFor: [
    'DAOs and decentralized governance',
    'Protocol developers and researchers',
    'Web3-native startups and founders',
    'Crypto-native VCs and foundations',
    'Blockchain R&D teams',
  ],
  notFor: [
    'CEXes and flashy Web2 marketing',
    'Sales pitches without substance',
    'Grant farmers and mercenaries',
    'Beginners or crypto tourists',
    'People not actively building',
  ],
};

const MadeWithLove = () => {
  return (
    <section className="container flex flex-col gap-6 py-10 lg:gap-10 lg:py-32">
      <h2 className="text-center font-bold font-bricolage text-secondary text-xl lg:text-6xl">
        Made With Love. <br />
        For the People Who Build.
      </h2>
      <p className="text-center text-base text-secondary lg:text-2xl">
        ETHFloripa is organized by locals who live this life every day. We're
        opening our city to the global Web3 community. Not for talks, but for
        <strong>connection</strong>. It's already home to teams like Blockful,
        Infinity Base, and many others. And now, for a few days, maybe you too.
      </p>

      <div className="flex flex-col items-center gap-6">
        <Image
          src={Island}
          alt="Island"
          width={990}
          height={236}
          sizes="(max-width:768) 100vw"
        />

        <div className="flex w-full max-w-4xl flex-col justify-between gap-6 lg:flex-row">
          <div className="flex flex-col items-center gap-6 lg:items-end">
            <h3 className="text-right font-bold font-bricolage text-tertiary text-xl lg:text-4xl">
              This event IS for:
            </h3>

            <ul className="flex flex-col gap-5 text-left text-secondary lg:text-right">
              {data.isFor.map((item) => (
                <li
                  className="relative pl-6 after:absolute after:left-0 after:text-tertiary after:content-['•'] lg:pr-6 lg:after:right-0"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-6 lg:items-start">
            <h3 className="text-left font-bold font-bricolage text-primary text-xl lg:text-4xl">
              This event is NOT for:
            </h3>

            <ul className="flex flex-col gap-5 text-secondary">
              {data.notFor.map((item) => (
                <li
                  className="relative pl-6 after:absolute after:left-0 after:text-primary after:content-['•']"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeWithLove;
