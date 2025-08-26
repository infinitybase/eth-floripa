import Image from 'next/image';
import Link from 'next/link';

import HeroFooter from '@/assets/images/hero.png';
import HeroMobileFooter from '@/assets/images/hero-mobile.png';
import Logo from '@/assets/images/logo-black.png';

import SocialLinks from '../social-links';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-1 pt-14">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute top-2/5 left-1/2 z-10 w-full">
        <div className="container mx-auto flex w-full flex-col-reverse items-center justify-center gap-16 px-5 lg:flex-row lg:justify-between lg:gap-32">
          <div className="flex max-w-lg flex-col items-center gap-6 lg:items-start">
            <h1 className="text-center font-bold font-bricolage text-3xl text-primary leading-none lg:text-left lg:text-5xl hero-text-overlay">
              11-12th November <br />
              Florianópolis, Brazil
            </h1>
            <h2 className="text-center font-bricolage font-medium text-lg text-secondary leading-normal lg:text-left lg:text-xl hero-text-overlay">
              A two-day builder retreat between <br /> ETHLatam & Devconnect.
            </h2>

            <div className="lg:mt-14 mx-4">
              <Link
                href="https://lu.ma/m5hujc9a"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                I Want to Attend
              </Link>
            </div>

            <div className="hero-text-overlay mt-1 flex w-fit items-center gap-3 font-medium text-foreground/90 text-shadow-black text-xs lg:gap-6">
              <Link
                href="https://t.me/gabriel_nvk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sponsor the event
              </Link>
              <span>|</span>
              <Link
                href="https://t.me/+__GNtH05TAE2ZjI5"
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
              className="hero-logo"
            />
            <div className="hero-text-overlay text-center font-bricolage font-medium text-lg text-secondary leading-normal tracking-[2.5px] lg:text-2xl">
              Where Crypto Breathes Magic
            </div>
          </div>
        </div>
      </div>

      {/* HERO FOOTER */}
      <div className="absolute bottom-0 left-0 flex min-h-[430px] lg:max-h-[50vh] h-full w-full flex-col justify-center">
          <Image
            src={HeroFooter}
            alt="ETH Floripa Hero Image - Florianópolis Beach Scene"
            className="hidden lg:block mt-auto object-cover"
            fill
            priority
            sizes="100vw"
          />

        <div className="absolute bottom-0 block w-full lg:hidden">
          <Image
            src={HeroMobileFooter}
            alt="ETH Floripa Hero Image - Florianópolis Beach Scene"
            className="w-full"
            quality={90}
            height={116}
            width={300}
            priority
            sizes="100vw"
          />
        </div>

        <div className="-translate-x-1/2 absolute bottom-4 left-1/2 z-10 flex w-full max-w-4xl flex-col-reverse items-center justify-center gap-6 text-center lg:bottom-5 lg:flex-col">
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
