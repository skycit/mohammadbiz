export const siteConfig = {
  name: 'Mohammad Keshtkar',
  title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
  description:
    'Technical founder focused on privacy-preserving verification, blockchain, and AI. EPO-confirmed patent holder. Building trust systems where users prove eligibility without exposing identity.',
  url: 'https://mohammad.biz',
  email: 'hello@mohammad.biz',
  location: 'London, UK',
  social: {
    linkedin: 'https://www.linkedin.com/in/mohammad-blockchain/',
    twitter: 'https://twitter.com/perblock_io',
  },
};

export const heroContent = {
  headline:
    'Founder building privacy-preserving verification and trust products — where blockchain, AI, and design meet.',
  subheadline:
    'I build systems that let people prove eligibility and act safely online without exposing identity or forcing wallet links. Backed by an EPO-confirmed patent and 8+ years of hands-on shipping.',
  cta: {
    primary: { label: 'Request deck / one-pager', href: '#contact', subject: 'Deck Request' },
    secondary: { label: 'Explore projects', href: '#projects' },
    tertiary: { label: 'Email me', href: `mailto:${siteConfig.email}` },
  },
};

export const trustPills = [
  { label: 'EPO-confirmed patent', detail: 'Privacy-preserving verification' },
  { label: '8+ years shipping products', detail: 'End-to-end delivery' },
  { label: 'Imperial College London', detail: 'MSc Innovation, Entrepreneurship & Management' },
  { label: 'London-based', detail: 'UK / Europe timezone' },
];

export const openToChips = [
  'Pre-seed',
  'Design partners',
  'Strategic partnerships',
  'Co-founder',
  'Mentors',
];

export const aboutContent = {
  heading: 'Founder profile',
  paragraphs: [
    "I'm a technical founder focused on privacy-preserving verification, transparent systems, and practical AI. My work sits at the intersection of cryptography-inspired thinking, product strategy, and high-polish execution.",
    "Over the last 8+ years I've shipped web products end-to-end and built a patent-backed approach to anonymous verification designed for regulated or trust-sensitive environments.",
  ],
  credentials: [
    { title: 'Education', items: ['BSc Physics', 'BSc IT Engineering', 'MSc Computer Science (Research)'] },
    { title: 'Current', items: ['Imperial College London Business School', 'MSc Innovation, Entrepreneurship & Management'] },
    { title: 'Experience', items: ['8+ years building products', 'Full-stack technical founder'] },
    { title: 'IP', items: ['EPO-confirmed patent', 'Privacy-preserving verification'] },
  ],
  howIWork: [
    { title: 'Fast prototyping', description: 'Ship working versions early, iterate with real feedback.' },
    { title: 'Privacy-by-design', description: 'Build trust into architecture from day one.' },
    { title: 'Measurable outcomes', description: 'Define success metrics before building features.' },
    { title: 'Clean UX', description: 'Complex systems should feel simple to use.' },
  ],
};

export const patentContent = {
  heading: 'Patent-backed verification moat',
  description:
    'My EPO-confirmed patent enables users to prove eligibility or verification status without exposing personal identity and without mandatory wallet linking.',
  whatItEnables: [
    'Anonymous age/location/eligibility checks for regulated products',
    'Wallet-free onboarding to blockchain-based services',
    'Privacy-preserving KYC that meets compliance without data exposure',
    'Trust signals for social platforms without doxxing users',
  ],
  whereItApplies: [
    'Prediction markets & fintech',
    'Hospitality loyalty programs',
    'Social identity & creator platforms',
    'Regulated gaming & betting',
    'Healthcare eligibility verification',
  ],
  whyItsHard: [
    'Balancing privacy with regulatory compliance is technically complex',
    'Most solutions force trade-offs: privacy OR compliance, not both',
    'UX for cryptographic verification is typically poor — users abandon',
    'Cross-jurisdiction requirements demand flexible architecture',
  ],
  cta: { label: 'Read patent summary', href: '/patent-summary' },
  disclaimer:
    'Details shared at a high level; deeper technical walkthrough available on request.',
};

export const projects = [
  {
    id: 'flagship',
    name: 'Privacy-Preserving Prediction Market',
    tagline: 'Privacy-preserving prediction market with wallet-free onboarding and anonymous eligibility checks.',
    isFlagship: true,
    problem: 'Prediction markets exclude users due to KYC friction and privacy concerns.',
    approach: 'Patent-backed anonymous verification lets users participate without exposing identity or linking wallets.',
    status: 'In development',
    statusLabel: 'Building',
    whatsNext: 'Seeking pre-seed funding and design partners for private beta.',
    tags: ['Blockchain', 'Privacy', 'Zero-knowledge', 'Prediction markets'],
    screenshot: '/projects/perblock-blockchain.svg',
    screenshotAlt: 'Privacy-preserving prediction market architecture showing anonymous verification flow, zero-knowledge proofs, and blockchain integration for wallet-free onboarding',
    url: null,
    ctaPrimary: { label: 'Request demo', href: '#contact', subject: 'Flagship Demo Request' },
    ctaSecondary: { label: 'Ask about the build', href: '#contact', subject: 'Flagship Technical Questions' },
  },
  {
    id: 'anybet',
    name: 'AnyBet',
    tagline: 'A risk-free sports betting web experience for learning, engagement, and market UX research (no deposits).',
    isFlagship: false,
    problem: 'New users fear losing money when learning sports betting mechanics.',
    approach: 'Virtual tokens, live odds, and leaderboards create engagement without financial risk.',
    status: 'Live',
    statusLabel: 'Live',
    whatsNext: 'Expanding markets and refining UX based on user research.',
    tags: ['Live odds', 'Virtual tokens', 'Leaderboard', 'Web app'],
    screenshot: '/anybet-new.jpg',
    screenshotAlt: 'AnyBet sports betting web application interface displaying live football odds, betting slip with virtual tokens, and user leaderboard rankings',
    url: 'https://anybet.ai',
    ctaPrimary: { label: 'Visit AnyBet', href: 'https://anybet.ai', external: true },
    ctaSecondary: { label: 'Ask about the build', href: '#contact', subject: 'AnyBet Questions' },
  },
  {
    id: 'vetcast',
    name: 'VetCast',
    tagline: 'AI assistant that filters and prioritizes inbound connection requests so teams and creators focus on real signal.',
    isFlagship: false,
    problem: 'High-profile individuals and teams are overwhelmed by low-quality inbound requests.',
    approach: 'AI-powered filtering surfaces relevant connections and deprioritizes noise.',
    status: 'Live',
    statusLabel: 'Live',
    whatsNext: 'Adding integrations and refining prioritization algorithms.',
    tags: ['AI assistant', 'Request filtering', 'Prioritization', 'Productivity'],
    screenshot: '/vetcast-new.jpg',
    screenshotAlt: 'VetCast AI assistant dashboard showing filtered connection requests with priority scores, sender analysis, and AI-generated relevance summaries',
    url: 'https://vetcast.ai',
    ctaPrimary: { label: 'Visit VetCast', href: 'https://vetcast.ai', external: true },
    ctaSecondary: { label: 'Ask about the build', href: '#contact', subject: 'VetCast Questions' },
  },
  {
    id: 'prizely',
    name: 'Prizely',
    tagline: 'QR-powered prize-draw marketing for venues and brand sponsors — turning every receipt into a transparent, fully-funded cash draw entry.',
    isFlagship: false,
    problem: 'Brands burn ad spend on impressions that never translate into in-venue visits, and venues struggle to make loyalty feel exciting instead of transactional.',
    approach: 'Brands and venues fund real cash prize pools. Customers scan a QR code in-store, upload their receipt, earn Local Points (1 LP per £1), and convert them into tickets for the draw — fully free for the customer, fully attributable for the sponsor.',
    status: 'Live on the App Store — iOS native app with active venues, brand-sponsored pools, and a blockchain-backed transparency ledger.',
    statusLabel: 'Live',
    whatsNext: 'Scaling venue partnerships across the UK, onboarding brand sponsors for cross-venue campaigns, and expanding the public transparency ledger.',
    tags: ['Prize draws', 'QR scanning', 'iOS native app', 'Hospitality', 'Brand campaigns', 'Blockchain ledger'],
    screenshot: '/prizely1.png',
    screenshotAlt: 'Prizely marketing platform hero showing a Heineken £500 prize pool campaign — phone mockup with QR redemption screen on a deep navy gradient with gold typography',
    url: 'https://prizelyapp.com',
    ctaPrimary: { label: 'Visit Prizely', href: 'https://prizelyapp.com', external: true },
    ctaSecondary: { label: 'Ask about the build', href: '#contact', subject: 'Prizely Questions' },
  },
];

export const nowLookingFor = [
  {
    title: 'Investors',
    description: 'Pre-seed and angel investors interested in privacy infrastructure and trust systems.',
    cta: { label: 'Request deck', href: '#contact', subject: 'Deck Request - Investor' },
    icon: 'TrendingUp',
  },
  {
    title: 'Partners',
    description: 'Companies exploring pilots or integrations for privacy-preserving verification.',
    cta: { label: 'Propose a pilot', href: '#contact', subject: 'Pilot Proposal' },
    icon: 'Handshake',
  },
  {
    title: 'Mentors & Advisors',
    description: 'Experienced founders, operators, or domain experts willing to share guidance.',
    cta: { label: 'Offer guidance', href: '#contact', subject: 'Mentorship / Advisory' },
    icon: 'Lightbulb',
  },
  {
    title: 'Co-founder candidates',
    description: 'Technical or commercial builders excited about privacy, blockchain, and AI.',
    cta: { label: 'Explore fit', href: '#contact', subject: 'Co-founder Interest' },
    icon: 'Users',
  },
];

export const faqContent = [
  {
    question: 'Are Mohammad Keshtkar, Mohammadamin Keshtkar, and Mohammad Amin Keshtkar the same person?',
    answer: 'Yes, all three names refer to the same person — the founder behind this website. Mohammad Keshtkar, Mohammadamin Keshtkar, and Mohammad Amin Keshtkar are different variations of the same name. You can see his photo at the top of this page. Whether you searched for Mohammad, Mohammadamin, or Mohammad Amin, you\'ve found the right person: a technical founder focused on privacy-preserving verification, blockchain, and AI.',
  },
  {
    question: 'What is a privacy-preserving prediction market?',
    answer: 'A privacy-preserving prediction market allows users to make forecasts and trade on outcomes without exposing their identity. Using techniques like zero-knowledge proofs, participants can verify they meet eligibility requirements (age, location, compliance) without revealing personal data or linking cryptocurrency wallets.',
  },
  {
    question: 'How does Mohammad Keshtkar\'s blockchain and AI work combine?',
    answer: 'Mohammad combines blockchain for trust and transparency with AI for intelligent insights. Blockchain provides immutable records and decentralized verification, while AI enhances user experience through smart filtering, prediction assistance, and automated analysis — all while preserving privacy.',
  },
  {
    question: 'What is the EPO patent for anonymous verification?',
    answer: 'The European Patent Office (EPO) confirmed patent enables users to prove eligibility or verification status without exposing personal identity. This technology allows wallet-free onboarding to blockchain services, anonymous compliance checks, and privacy-preserving KYC that meets regulatory requirements.',
  },
  {
    question: 'What is Prizely and how do its prize draws work?',
    answer: 'Prizely is a QR-powered prize-draw marketing platform for UK venues — pubs, bars, cafés, restaurants — and the brands that want to reach their customers. Brands and venues fund a real cash prize pool. After making a purchase, customers scan the venue\'s QR code in the Prizely iOS app, upload their receipt, and earn Local Points at a rate of 1 LP per £1 spent. Ten LP converts into one entry ticket for that venue\'s active prize draw. Customers never pay money — the prize pot is funded entirely by sponsors. Every ticket entry, draw, and winner is recorded on a public blockchain-backed ledger so participants can verify the result themselves.',
  },
  {
    question: 'How does AnyBet work without real money?',
    answer: 'AnyBet provides a complete sports betting experience using virtual tokens. Users get real-time odds from actual markets, can place bets, track results, and compete on leaderboards — all without financial risk. It\'s designed for learning betting mechanics and entertainment.',
  },
  {
    question: 'What does VetCast do for connection requests?',
    answer: 'VetCast uses AI to filter and prioritize inbound business and social connection requests. It analyzes message content, sender profiles, and context to score each request, helping busy professionals focus on high-value connections while deprioritizing spam and noise.',
  },
  {
    question: 'Is Mohammad Keshtkar open to investment or partnerships?',
    answer: 'Yes. Mohammad is actively seeking pre-seed investors for the privacy-preserving prediction market, strategic partners for pilot programs, mentors with relevant domain expertise, and potential co-founders passionate about privacy, blockchain, and AI.',
  },
  {
    question: 'What is Mohammad Keshtkar\'s background?',
    answer: 'Mohammad holds degrees in Physics, IT Engineering, and Computer Science Research, plus an MSc in Innovation, Entrepreneurship & Management from Imperial College London Business School. He has 8+ years of experience building and shipping web products as a full-stack technical founder.',
  },
];

export const contactContent = {
  heading: "Let's talk",
  subheading: "Whether you're an investor, potential partner, or fellow builder — I'd love to hear from you.",
  hint: "If you're an investor, put 'Deck' in the subject for fastest response.",
  email: siteConfig.email,
  cta: {
    primary: { label: 'Book an intro', href: 'https://cal.com/mohammad-keshtkar' },
    secondary: { label: 'Email Mohammad', href: `mailto:${siteConfig.email}` },
  },
  social: siteConfig.social,
};
