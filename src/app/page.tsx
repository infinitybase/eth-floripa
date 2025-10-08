import Agenda from '@/components/agenda';
import Experience from '@/components/experience';
import Faq from '@/components/faq';
import FloripaCarousel from '@/components/floripa-carousel';
import Hero from '@/components/hero';
import Hotel from '@/components/hotel';
import MadeWithLove from '@/components/made-with-love';
import MagicIsland from '@/components/magic-island';
import MapSection from '@/components/map';
import { eventSchema } from '@/lib/event-schema';

export default function Page() {
  return (
    <main>
      <Hero />
      <MapSection />
      <Experience />
      <Agenda />
      <MagicIsland />
      <FloripaCarousel />
      <Hotel />
      <MadeWithLove />
      <Faq />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: ld+json
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema).replace(/</g, '\\u003c'),
        }}
      />
    </main>
  );
}
