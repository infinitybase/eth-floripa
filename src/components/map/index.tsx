import Image from 'next/image';
import MapImage from '@/assets/images/map.png';

const MapSection = () => {
  return (
    <section className="bg-background-secondary py-10 lg:py-20">
      <div className="container flex flex-col">
        <h2 className="mb-5 text-center font-bold font-bricolage text-2xl text-secondary lg:mb-12 lg:text-6xl">
          An Interlude Between the Noise
        </h2>

        <p className="text-center text-base text-secondary lg:text-2xl">
          Skip conference hallways and crowded talks. ETH Floripa happens
          1h-flight between <strong className="text-tertiary">ETHLatam</strong>{' '}
          and <strong className="text-tertiary">Devconnect</strong>, offering a
          much-needed pause to reconnect with nature, people, and meaningful
          work. It's the perfect intermission for builders who value intentional
          connection over networking chaos.
        </p>

        <div className="mx-auto flex w-full items-center justify-center lg:max-w-[977px]">
          <Image
            src={MapImage}
            alt="Map"
            className="h-auto w-full"
            width={977}
            height={1125}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
