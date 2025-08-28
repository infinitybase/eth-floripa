import Image from 'next/image';
import MagicIslandImage from '@/assets/images/magic-island.png';

const MagicIsland = () => {
  return (
    <section className="relative bg-background pt-10 lg:pt-32">
      <Image
        src={MagicIslandImage}
        alt="Magic Island"
        width={840}
        height={420}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="absolute right-0 bottom-0 hidden h-auto lg:block lg:w-[50vw]"
      />
      <div className="container lg:pb-20">
        <h2 className="mb-5 text-center font-bold font-bricolage text-2xl text-secondary lg:mb-12 lg:text-6xl">
          Welcome to the Magic Island
        </h2>

        <div className="lg:max-w-[615px]">
          <p className="text-justify text-base text-secondary lg:text-left lg:text-2xl">
            Also known as <strong>The Magic Island</strong>, Florianópolis
            blends natural beauty with tech innovation. It's where devs code in
            flip-flops and surf in between meetings. The safest capital in
            Brazil already hosts a thriving Web3 community. And don't be
            surprised if you fall in love with the place. Most do.
          </p>
        </div>
      </div>
      <Image
        src={MagicIslandImage}
        alt="Magic Island"
        width={1024}
        height={420}
        sizes="100vw"
        className="mt-4 block h-auto lg:hidden lg:w-[50vw]"
      />
    </section>
  );
};

export default MagicIsland;
