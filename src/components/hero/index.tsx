import Image from 'next/image';
import Link from 'next/link';

import HeroFooter from '@/assets/images/hero.webp';
import Logo from '@/assets/images/logo-black.png';
import { ATTEND_LINK, SPONSOR_LINK, VOLUNTEER_LINK } from '@/lib/constants';
import SocialLinks from '../social-links';

const Hero = () => {
  return (
    <section className="relative flex min-h-[100dvh] flex-1 pt-14">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-20 w-full lg:top-2/5">
        <div className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-16 px-5 lg:flex-row lg:justify-between lg:gap-32">
          <div className="flex max-w-lg flex-col items-center gap-6 lg:items-start">
            <h1 className="hero-text-overlay text-center font-bold font-bricolage text-3xl text-primary leading-none lg:text-left lg:text-5xl">
              11-12th November <br />
              Florianópolis, Brazil
            </h1>
            <h2 className="hero-text-overlay text-center font-bricolage font-medium text-lg text-secondary leading-normal lg:text-left lg:text-xl">
              A two-day builder retreat between <br /> ETHLatam & Devconnect.
            </h2>

            <div className="mx-4 lg:mt-14">
              <Link
                href={ATTEND_LINK}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                I Want to Attend
              </Link>
            </div>

            <div className="hero-text-overlay mt-1 flex w-fit items-center gap-3 font-medium text-foreground/90 text-shadow-black text-xs lg:gap-6">
              <Link
                href={SPONSOR_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor the event
              </Link>
              <span>|</span>
              <Link
                href={VOLUNTEER_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer with us
              </Link>
            </div>
          </div>
          <div className="max-w-md md:max-w-none">
            <Image
              src={Logo}
              alt="ETH Floripa"
              height={168}
              priority
              width={500}
              sizes="100vw"
            />
            <div className="hero-text-overlay text-center font-bricolage font-medium text-lg text-secondary leading-normal tracking-[2.5px] lg:text-2xl">
              Where Crypto Breathes Magic
            </div>
          </div>
        </div>
      </div>

      {/* HERO FOOTER */}
      <div className="relative mt-auto flex aspect-[15/4] min-h-[116px] w-full">
        <div className="absolute bottom-0 z-10 aspect-[15/4] w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_65.38%,rgba(0,0,0,0.4)_100%)]" />
        <Image
          src={HeroFooter}
          alt="Florianópolis Beach Drawing"
          className="bottom-0 mt-auto object-cover"
          fill
          priority
          sizes="100vw"
        />

        <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 hidden w-full max-w-4xl flex-col-reverse items-center justify-center gap-2 text-center sm:flex lg:bottom-5 lg:flex-col lg:gap-6">
          <SocialLinks />
          <p className="text-center font-bricolage font-normal text-secondary text-xs tracking-[2.3px] lg:text-base">
            Organized with ❤️ by Blockful, InfinityBase & Florianópolis Web3
            Community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
