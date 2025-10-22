'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Cloud1 from '@/assets/images/cloud-1.png';
import Cloud2 from '@/assets/images/cloud-2.png';
import Cloud3 from '@/assets/images/cloud-3.png';
import GreenTopBar from '@/assets/images/green-top-bar.png';
import Hurricane from '@/assets/images/hurricane.png';
import Moon from '@/assets/images/moon.png';
import PurpleTopBar from '@/assets/images/purple-top-bar.png';

const day1 = {
  title: 'Day 1',
  subtitle: 'Focus & Co-creation',
  list: [
    'Opening session & ecosystem alignment',
    'Deep dives and topic pods by the pool',
    'Sunset on the beach, BBQ & DJ by the pool',
  ],
};

const day2 = {
  title: 'Day 2',
  subtitle: 'Integration & Celebration',
  list: [
    'Chill time, beach sports & co-working',
    'Community-driven sessions & fireside chats',
    'Closing beach party on the Magic Island',
  ],
};

const Agenda = () => {
  return (
    <section id="schedule" className="bg-background py-10 lg:py-20">
      <div className="container flex flex-col">
        <h2 className="mb-5 text-center font-bold font-bricolage text-2xl text-secondary lg:mb-12 lg:text-6xl">
          Agenda
        </h2>

        <div className="flex flex-col items-center gap-14">
          <div className="relative hidden h-48 w-full max-w-xl lg:block">
            <motion.div
              initial={{ x: 0 }}
              whileInView={{
                x: -40,
                transition: {
                  duration: 1.5,
                  ease: 'easeOut',
                },
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="absolute top-10 left-3"
            >
              <Image src={Cloud1} alt="Green cloud" width={100} height={30} />
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              whileInView={{
                x: -30,
                transition: {
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: 0.2,
                },
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="absolute bottom-10 left-6"
            >
              <Image src={Cloud2} alt="Green cloud" width={70} height={26} />
            </motion.div>
            <motion.div
              initial={{ y: 0 }}
              whileInView={{
                y: 68,
                transition: {
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: 0.2,
                },
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
            >
              <Image
                src={Moon}
                alt="Green moon"
                width={180}
                height={180}
                className="-translate-x-1/2 absolute top-6 left-1/2"
                sizes="(max-width: 768px) 80vw, 33vw"
              />
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              whileInView={{
                x: 40,
                transition: {
                  duration: 1.5,
                  ease: 'easeOut',
                  delay: 0.6,
                },
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="absolute top-2/5 right-3"
            >
              <Image src={Cloud3} alt="Green cloud" width={90} height={30} />
            </motion.div>
          </div>

          <div className="flex flex-col gap-14 lg:flex-row">
            <div className="flex flex-col items-center gap-8 lg:items-end">
              <Image src={PurpleTopBar} alt="" width={515} height={6} />
              <h3 className="font-bold font-bricolage text-primary text-xl lg:text-4xl">
                {day1.title}
              </h3>
              <p className="font-bricolage font-semibold text-lg text-secondary lg:text-2xl">
                {day1.subtitle}
              </p>
              <ul className="flex flex-col gap-5 text-base text-secondary lg:text-right lg:text-lg">
                {day1.list.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 after:absolute after:left-0 after:text-primary after:content-['•'] lg:pr-6 lg:after:right-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative z-20 hidden lg:block">
              <Image src={Hurricane} alt="Hurricane" width={180} height={180} />
            </div>
            <div className="flex flex-col items-center gap-8 lg:items-start">
              <Image src={GreenTopBar} alt="" width={515} height={6} />
              <h3 className="font-bold font-bricolage text-tertiary text-xl lg:text-4xl">
                {day2.title}
              </h3>
              <p className="font-bricolage font-semibold text-lg text-secondary lg:text-2xl">
                {day2.subtitle}
              </p>
              <ul className="flex flex-col gap-5 text-base text-secondary lg:text-lg">
                {day2.list.map((item) => (
                  <li
                    key={item}
                    className="relative pl-6 after:absolute after:left-0 after:text-tertiary after:content-['•']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
