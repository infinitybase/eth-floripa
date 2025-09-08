'use client';

import Tabs from '@/components/tabs';
import Accordion from '../accordion';

type FaqItem = {
  question: string;
  answer: React.ReactNode | string;
};

type Faq = {
  category: string;
  items: FaqItem[];
};

const faq: Faq[] = [
  {
    category: 'About the Event',
    items: [
      {
        question: 'What is ETH Floripa?',
        answer:
          'ETH Floripa is a curated two-day builder retreat for top global builders, founders, and researchers in the Ethereum ecosystem. It\'s positioned as an "interlude" between ETHLatam and Devconnect, offering a much-needed pause to reconnect with nature, people, and meaningful work.',
      },
      {
        question: 'When and where does it take place?',
        answer: (
          <ul className="list-disc">
            <li>
              <strong>Dates:</strong> November 11-12, 2025
            </li>
            <li>
              <strong>Location:</strong> Florianópolis, Brazil
            </li>
            <li>
              <strong>Venue:</strong> Praia Mole Hotel (with direct beach
              access)
            </li>
          </ul>
        ),
      },
      {
        question: 'How many people participate?',
        answer:
          'The event is limited to approximately 150 carefully curated participants, ensuring intimate and high-quality interactions.',
      },
      {
        question: 'What makes ETH Floripa different?',
        answer:
          "Unlike traditional conferences, ETH Floripa focuses on authentic connections in a natural environment, without the typical 'networking chaos' of large events. It's an 'off-the-record' experience that combines meaningful work with nature immersion.",
      },
    ],
  },
  {
    category: 'Who Should Attend',
    items: [
      {
        question: 'Who is this event for?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>The event is designed for:</p>
            <ul className="list-disc pl-5">
              <li>Protocol developers and researchers</li>
              <li>DAOs and decentralized governance</li>
              <li>Web3-native startups and founders</li>
              <li>Crypto-native VCs and foundations</li>
              <li>Blockchain R&D teams</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'Who should NOT attend?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>The event is not suitable for:</p>
            <ul className="list-disc pl-5">
              <li>CEXes and flashy Web2 marketing</li>
              <li>Sales pitches without substance</li>
              <li>Grant farmers and mercenaries</li>
              <li>Beginners or crypto tourists</li>
              <li>People not actively building</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    category: 'Agenda and Activities',
    items: [
      {
        question: 'How is the agenda structured?',
        answer: (
          <div className="flex flex-col gap-4">
            <h5>Day 1 - Focus & Co-creation:</h5>
            <ul className="list-disc pl-5">
              <li>Morning talks and workshops</li>
              <li>Build sessions and topic pods</li>
              <li>Deep dives into emerging protocols</li>
              <li>Sunset BBQ by the ocean</li>
            </ul>
            <h5>Day 2 - Integration & Celebration:</h5>
            <ul className="list-disc pl-5">
              <li>Morning rest or coworking</li>
              <li>Spontaneous afternoon sessions</li>
              <li>Community-driven discussions</li>
              <li>Closing party on the Magic Island</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'What kind of activities are offered?',
        answer: (
          <ul>
            <li>
              <strong>Technical activities:</strong> Work sessions, demos, topic
              pods, discussions on d/ACC, Governance, DeFi
            </li>
            <li>
              <strong>Recreational activities:</strong> Volleyball, slackline,
              yoga
            </li>
            <li>
              <strong>Natural networking:</strong> Pool chats, tropical
              breakfast, beach access
            </li>
          </ul>
        ),
      },
      {
        question: "What are 'topic pods'?",
        answer:
          'These are small, focused sessions where participants can deep dive into specific themes like decentralized governance, protocol development, future of crypto, among others.',
      },
    ],
  },
  {
    category: 'Location and Accommodation',
    items: [
      {
        question: 'Why was Florianópolis chosen?',
        answer:
          'Florianópolis, known as "The Magic Island," blends natural beauty with tech innovation. It\'s the safest capital in Brazil and already hosts a thriving Web3 community, including teams like Blockful, Infinity Base, and many others.',
      },
      {
        question: 'Where can I stay?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>The event takes place at Praia Mole Hotel, which offers:</p>
            <ul className="list-disc pl-5">
              <li>Direct beach access</li>
              <li>Tropical breakfast</li>
              <li>Pool for conversations</li>
              <li>Cozy on-site accommodations</li>
              <li>Inspiring tropical setting</li>
            </ul>
          </div>
        ),
      },
      {
        question: 'Do I need to stay at the event hotel?',
        answer:
          "While not mandatory, it's highly recommended to fully enjoy the experience, as many interactions happen naturally from morning to night at the venue.",
      },
    ],
  },
  {
    category: 'Participation and Registration',
    items: [
      {
        question: 'How can I register?',
        answer:
          'The event is invite-only and curated. Registration information is available through the "Plan your trip!" link on the official page.',
      },
      {
        question: 'Are there selection criteria?',
        answer:
          'Yes, the event prioritizes active builders, founders, researchers, and people who are significantly contributing to the Ethereum and Web3 ecosystem.',
      },
      {
        question: 'Is there a fee for the event?',
        answer:
          "Specific pricing information is not available on the page, but it's recommended to check directly through official channels.",
      },
      {
        question: 'Can I participate remotely?',
        answer:
          'No, ETH Floripa is specifically designed as an in-person experience that combines work with nature immersion and personal connections.',
      },
    ],
  },
  {
    category: 'Logistics',
    items: [
      {
        question: 'How do I get to Florianópolis?',
        answer:
          'Florianópolis is just a 1-hour flight between ETHLatam and Devconnect locations, making it a convenient stop for those attending both events.',
      },
      {
        question: 'Do I need a visa to enter Brazil?',
        answer:
          "This depends on your nationality. It's recommended to check visa requirements for Brazil based on your country of origin.",
      },
      {
        question: 'What language is the event conducted in?',
        answer:
          'While the event is organized by Brazilian locals, main sessions are expected to be conducted in English, considering the international audience.',
      },
      {
        question: "What's the weather like in November?",
        answer:
          'November is spring/early summer in Brazil, with warm temperatures perfect for beach activities and outdoor sessions.',
      },
    ],
  },
  {
    category: 'About the Organizers',
    items: [
      {
        question: 'Who organizes ETH Floripa?',
        answer:
          "The event is organized by locals who live this life in Florianópolis every day and are part of the Web3 community. They're opening their city to the global Web3 community, focusing on genuine connection rather than formal presentations.",
      },
      {
        question: "What's the philosophy behind the event?",
        answer:
          '"Made With Love. For the People Who Build." - The event is created with love for people who are actually building in the Web3 space, prioritizing authentic connections and meaningful work in an inspiring natural environment.',
      },
      {
        question: 'Is this a one-time event?',
        answer:
          'Based on the website, this appears to be the inaugural ETH Floripa event, though future editions may depend on the success and community response.',
      },
    ],
  },
  {
    category: 'What to Expect',
    items: [
      {
        question: "What's the dress code?",
        answer:
          'Given the beach setting and laid-back atmosphere, expect casual attire. The site mentions "devs code in flip-flops," so comfortable, beach-appropriate clothing is likely the norm',
      },
      {
        question: 'Will there be recordings or livestreams?',
        answer:
          "Since it's described as an \"off-the-record\" event, it's likely that sessions won't be recorded or livestreamed, maintaining the intimate and confidential nature of discussions.",
      },
      {
        question: 'What makes the "Magic Island" special?',
        answer:
          'Florianópolis combines the best of both worlds: a tech-savvy environment where people can work productively, and stunning natural beauty where they can surf between meetings and code with their feet in the sand.',
      },
    ],
  },
];

const Faq = () => {
  return (
    <section id="faq" className="container mx-auto">
      <h2 className="mb-10 text-center font-bold font-bricolage text-secondary text-xl lg:text-4xl">
        Frequently Asked Questions
      </h2>
      <Tabs.Root
        className="mx-auto flex w-full flex-col md:w-[600px] lg:w-[800px] xl:w-[900px]"
        defaultValue={faq[0].category}
      >
        <Tabs.List className="">
          {faq.map((category) => (
            <Tabs.Trigger key={category.category} value={category.category}>
              {category.category}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {faq.map((faqCategory) => (
          <Tabs.Content
            key={faqCategory.category}
            value={faqCategory.category}
            className="mt-10"
          >
            <Accordion.Root type="single" collapsible>
              {faqCategory.items.map((item) => (
                <Accordion.Item key={item.question} value={item.question}>
                  <Accordion.Trigger>{item.question}</Accordion.Trigger>
                  <Accordion.Content className="text-secondary text-sm lg:text-base">
                    {item.answer}
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </section>
  );
};

export default Faq;
