import Image from 'next/image';
import MicrophoneImage from '@/assets/images/microphone.png';
import SpeechBubbleLeft from '@/assets/svg/speech-bubble-left.svg';
import SpeechBubbleRight from '@/assets/svg/speech-bubble-right.svg';

const ApplyToSpeak = () => {
  return (
    <section id="apply-to-speak" className="mb-20 bg-background py-10 lg:py-20">
      <div className="container flex flex-col items-center gap-10">
        {/* Microphone Illustration */}
        <div className="relative h-[257px] w-[384px]">
          {/* Left Speech Bubble */}
          <div className="absolute top-[38px] left-0 h-[208px] w-[224px]">
            <SpeechBubbleLeft className="h-full w-full" />
          </div>

          {/* Right Speech Bubble (rotated) */}
          <div className="absolute top-[27px] left-[172px] h-[204px] w-[211px] rotate-[7deg]">
            <SpeechBubbleRight className="h-full w-full" />
          </div>

          {/* Microphone Image */}
          <div className="absolute top-0 left-[112px] h-[257px] w-[138px]">
            <Image
              src={MicrophoneImage}
              alt="Microphone"
              fill
              className="object-cover"
              sizes="138px"
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center font-bold font-bricolage text-2xl text-secondary lg:text-6xl">
          Call for Speakers
        </h2>

        {/* Description */}
        <div className="max-w-[793px] text-center font-inter text-base text-secondary lg:text-2xl lg:leading-[37.44px]">
          <p className="mb-6">
            We are actively looking for builders, founders, and researchers
            ready to share ideas that shape the next chapter of Ethereum.
          </p>
          <p>
            If your work contributes with meaningful conversations, stories of
            experimentation, learning, or progress that inspire others to build
            a better ecosystem, we want to hear from you.
          </p>
        </div>

        {/* Apply Button */}
        <a
          href="https://tally.so/r/nG2v6j"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-[#7D5594] border-b-[3px] bg-[#C9F678] px-8 py-4 font-bricolage font-extrabold text-[#7D5594] text-lg uppercase tracking-wider transition-opacity hover:opacity-90"
        >
          Apply to Speak
        </a>
      </div>
    </section>
  );
};

export default ApplyToSpeak;
