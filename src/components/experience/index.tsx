import Image from 'next/image';
import Experience1 from '@/assets/images/experience-1.png';
import Experience2 from '@/assets/images/experience-2.png';
import Experience3 from '@/assets/images/experience-3.png';
import Experience4 from '@/assets/images/experience-4.png';
import Experience5 from '@/assets/images/experience-5.png';
import Experience6 from '@/assets/images/experience-6.png';

const experiences = [
  {
    image: Experience1,
    label: 'Curated activities: volleyball, slackline, yoga',
  },
  {
    image: Experience2,
    label: 'Perfect intermission between ETHLatam and Devconnect',
  },
  { image: Experience3, label: 'Work sessions, demos and topic pods' },
  {
    image: Experience4,
    label: 'Off-the-record insights from Ethereum-native builders',
  },
  { image: Experience5, label: 'd/ACC, Governance, DeFi, Future of Crypto' },
  { image: Experience6, label: 'Meaningful connections with aligned people' },
];

const Experience = () => {
  return (
    <section className="bg-background-secondary py-10 lg:py-20">
      <div className="container flex flex-col gap-10">
        <h2 className="mb-5 text-center font-bold font-bricolage text-2xl text-secondary lg:mb-12 lg:text-6xl">
          Building Touching Grass and Sand
        </h2>

        <p className="text-center font-normal text-base text-secondary lg:text-2xl">
          ETHFloripa is a curated,{' '}
          <strong>
            off-the-record builder retreat designed for ~150 top global
            builders, founders, and researchers.
          </strong>{' '}
          Think light programming, deep interactions, and nature immersion. It's
          where meaningful conversations happen between yoga sessions and
          beachside talks.
        </p>

        <div className="md:grid-col-span-2 mx-auto mt-5 grid max-w-4xl grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3">
          {experiences.map((experience, i) => (
            <div
              key={experience.label}
              className="flex flex-col justify-between rounded-2xl transition-all hover:shadow-xl/20"
            >
              {i < 3 && (
                <p className="p-2 text-center font-normal text-base text-secondary tracking-[4%] lg:text-xl">
                  {experience.label}
                </p>
              )}
              <div className="w-full rounded-b-2xl">
                <Image
                  src={experience.image}
                  alt={experience.label}
                  sizes="100vw"
                  className="mx-auto rounded-2xl"
                  width={300}
                  height={300}
                />
              </div>
              {i >= 3 && (
                <p className="p-2 text-center font-normal text-base text-secondary tracking-[4%] lg:text-xl">
                  {experience.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
