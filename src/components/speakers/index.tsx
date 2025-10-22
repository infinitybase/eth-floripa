import Image from 'next/image';
import InstagramIcon from '@/assets/svg/instagram.svg';
import LinkedInIcon from '@/assets/svg/linkedin.svg';
import XIcon from '@/assets/svg/x.svg';
import { cn } from '@/lib/utils';
import { type Speaker, speakers } from './data';

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  className?: string;
}

const SocialLink = ({
  href,
  label,
  className,
  icon: Icon,
}: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="transition-opacity hover:opacity-70"
  >
    <Icon className={cn('h-6 w-6 text-primary', className)} />
  </a>
);

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard = ({ speaker }: SpeakerCardProps) => (
  <div className="flex w-[300px] flex-col items-center gap-4">
    {/* Speaker Photo with Ring */}
    <div className="relative h-[200px] w-[200px]">
      {/* Purple Ring */}
      <div className="absolute inset-0 rounded-full border-4 border-primary" />
      {/* Photo Container */}
      <div className="absolute inset-[11.22px] overflow-hidden rounded-full">
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          className="object-cover"
          sizes="200px"
        />
      </div>
    </div>

    {/* Speaker Name */}
    <h3 className="font-bold font-bricolage text-2xl text-primary">
      {speaker.name}
    </h3>

    {/* Social Links */}
    <div className="flex items-baseline gap-[15.32px]">
      {speaker.social.instagram && (
        <SocialLink
          href={speaker.social.instagram}
          icon={InstagramIcon}
          label={`${speaker.name} on Instagram`}
        />
      )}
      {speaker.social.x && (
        <SocialLink
          href={speaker.social.x}
          icon={XIcon}
          label={`${speaker.name} on X`}
          className="size-auto"
        />
      )}
      {speaker.social.linkedin && (
        <SocialLink
          href={speaker.social.linkedin}
          icon={LinkedInIcon}
          label={`${speaker.name} on LinkedIn`}
        />
      )}
    </div>

    {/* Bio */}
    {speaker.bio && (
      <p className="text-center text-secondary text-sm">{speaker.bio}</p>
    )}
  </div>
);

const Speakers = () => {
  return (
    <section id="speakers" className="mb-20 bg-background py-10 lg:py-20">
      <div className="flex flex-col">
        {/* Section Title */}
        <h2 className="mb-12 text-center font-bold font-bricolage text-2xl text-secondary lg:mb-20 lg:text-6xl">
          Speakers
        </h2>

        {/* Speakers Layout - Two Rows */}
        <div className="flex flex-col gap-20">
          {/* First Row - 10 speakers */}
          <div className="flex flex-wrap justify-center gap-x-[86.5px] gap-y-20">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
