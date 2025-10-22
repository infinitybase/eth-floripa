import Image from 'next/image';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 lg:mb-16 lg:py-24">
      <div className="container">
        {/* Main Sponsors */}
        <div className="mb-16 lg:mb-24">
          <h2 className="mb-8 text-center font-bold text-secondary text-xl lg:mb-12 lg:text-4xl">
            Sponsors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {/*<Image*/}
            {/*  src="/sponsors/uniswap.png"*/}
            {/*  alt="Uniswap"*/}
            {/*  width={200}*/}
            {/*  height={60}*/}
            {/*  className="w-full max-w-[200px] lg:w-48 lg:max-w-[200px]"*/}
            {/*/>*/}
            <Image
              src="/sponsors/nouns.png"
              alt="Nouns"
              width={200}
              height={60}
              className="w-full max-w-[200px] lg:w-48 lg:max-w-[200px]"
            />
            <Image
              src="/sponsors/kaizen.png"
              alt="Kaizen Labs"
              width={200}
              height={60}
              className="w-full max-w-[200px] lg:w-48 lg:max-w-[200px]"
            />
          </div>
        </div>

        {/* Supported By */}
        <div className="mb-16 lg:mb-24">
          <h3 className="mb-8 text-center font-semibold text-lg text-secondary lg:mb-12 lg:text-2xl">
            Supported By
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <Image
              src="/sponsors/devconnect.png"
              alt="Devconnect"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/european-blockchain-con.png"
              alt="European Blockchain Convention"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/eth-samba.png"
              alt="ETH Samba"
              width={150}
              height={50}
              className="w-full max-w-[150px] mix-blend-screen lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/modular.png"
              alt="Modular"
              width={150}
              height={50}
              className="w-full max-w-[150px] mix-blend-screen lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/ipe-city.png"
              alt="Ipê City"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/infinita-city.png"
              alt="Infinita City"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/re-city.png"
              alt="RE City"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/erc-55.png"
              alt="ERC-55"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/eth-latam.png"
              alt="ETH LATAM"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/eth-kipu.png"
              alt="ETH KIPU"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/shefi.png"
              alt="SheFi"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/eth-belgrade.png"
              alt="ETH Belgrade"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-32 lg:max-w-[150px]"
            />
          </div>
        </div>

        {/* Organized and Hosted By */}
        <div className="mb-16 lg:mb-24">
          <h3 className="mb-8 text-center font-semibold text-lg text-secondary lg:mb-12 lg:text-2xl">
            Organized and Hosted By
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            <Image
              src="/sponsors/infinitybase.png"
              alt="infinitybase"
              width={180}
              height={60}
              className="w-full max-w-[180px] lg:w-44 lg:max-w-[180px]"
            />
            <Image
              src="/sponsors/blockful.png"
              alt="blockful"
              width={180}
              height={60}
              className="w-full max-w-[180px] lg:w-44 lg:max-w-[180px]"
            />
          </div>
        </div>

        {/* Co-organized & Ecosystem */}
        <div>
          <h3 className="mb-8 text-center font-semibold text-lg text-secondary lg:mb-12 lg:text-2xl">
            Co-organized & Ecosystem
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <Image
              src="/sponsors/eth-latam.png"
              alt="ETH LATAM"
              width={150}
              height={50}
              className="w-full max-w-[110px] lg:w-36 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/eth-kipu.png"
              alt="ETH-KIPU"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-36 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/founder-haus.png"
              alt="Founder Haus"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-36 lg:max-w-[150px]"
            />
            <Image
              src="/sponsors/florianopolis-web3.png"
              alt="Florianópolis Web3 Community"
              width={150}
              height={50}
              className="w-full max-w-[150px] lg:w-36 lg:max-w-[150px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
