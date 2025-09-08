import Link from 'next/link';
import { ATTEND_LINK, SPONSOR_LINK, VOLUNTEER_LINK } from '@/lib/constants';
import SocialLinks from '../social-links';

const Footer = () => {
  return (
    <footer className="container flex min-h-[500px] flex-col items-center justify-center gap-10 lg:min-h-screen lg:gap-24">
      <h2 className="text-center font-bold font-bricolage text-secondary text-xl lg:text-6xl">
        Let's Get Magical.
      </h2>

      <div id="sponsors" className="flex flex-col gap-4">
        <Link
          href={ATTEND_LINK}
          className="btn-primary w-full text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Want to Attend
        </Link>

        <div className="flex w-fit items-center gap-3 font-medium text-primary text-xs lg:gap-6">
          <Link href={SPONSOR_LINK} target="_blank" rel="noopener noreferrer">
            Sponsor the event
          </Link>
          <span>|</span>
          <Link href={VOLUNTEER_LINK} target="_blank" rel="noopener noreferrer">
            Volunteer with us
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <SocialLinks variant="secondary" />
        <p className="text-center text-secondary text-xs lg:text-base">
          Organized with ❤️ by Blockful, InfinityBase & Florianópolis Web3
          Community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
