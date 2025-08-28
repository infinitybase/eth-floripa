import Link from 'next/link';
import SocialLinks from '../social-links';

const Footer = () => {
  return (
    <footer className="container flex min-h-[500px] flex-col items-center justify-center gap-10 lg:min-h-screen lg:gap-24">
      <h2 className="text-center font-bold font-bricolage text-secondary text-xl lg:text-6xl">
        Let's Get Magical.
      </h2>

      <div id="sponsors" className="flex flex-col gap-4">
        <Link
          href="https://lu.ma/m5hujc9a"
          className="btn-primary w-full text-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          I Want to Attend
        </Link>

        <div className="flex w-fit items-center gap-3 font-medium text-primary text-xs lg:gap-6">
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
