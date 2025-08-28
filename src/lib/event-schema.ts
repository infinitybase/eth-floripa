export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'ETH Floripa November 11 - 12 in Florianópolis, Brazil',
  description:
    'ETH Floripa is a curated, off-the-record, retreat between ETH LATAM and Devconnect designed for ~150 top global builders, founders, and researchers.',
  startDate: '2025-11-11',
  endDate: '2025-11-12',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Praia Mole Hotel',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florianópolis',
      addressRegion: 'Santa Catarina',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-27.5954',
      longitude: '-48.5480',
    },
  },
  image: ['assets/selina-hotel.jpeg'],
  organizer: [
    {
      '@type': 'Organization',
      name: 'Blockful',
    },
    {
      '@type': 'Organization',
      name: 'InfinityBase',
    },
    {
      '@type': 'Organization',
      name: 'Florianópolis Web3 Community',
    },
  ],
  performer: {
    '@type': 'Organization',
    name: 'Web3 Builders and Founders',
  },
  audience: {
    '@type': 'Audience',
    audienceType:
      'Web3 developers, blockchain researchers, protocol developers, crypto-native VCs, DAO members',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://lu.ma/m5hujc9a',
    availability: 'https://schema.org/InStock',
  },
  url: 'https://lu.ma/m5hujc9a',
  keywords:
    'Ethereum, Web3, blockchain, DeFi, DAO, cryptocurrency, developer retreat, Florianópolis, Brazil, ETHLatam, Devconnect',
  subEvent: [
    {
      '@type': 'Event',
      name: 'Day 1 - Focus & Co-creation',
      startDate: '2025-11-11',
      description:
        'Morning talks and workshops, build sessions and topic pods, deep dives into emerging protocols, sunset BBQ by the ocean',
    },
    {
      '@type': 'Event',
      name: 'Day 2 - Integration & Celebration',
      startDate: '2025-11-12',
      description:
        'Morning rest or coworking, spontaneous afternoon sessions, community-driven discussions, closing party on the Magic Island',
    },
  ],
};
