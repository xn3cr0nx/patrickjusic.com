/**
 * About page content — bio, principles, and the "work with me" tracks.
 *
 * Kept as typed data (not hardcoded in markup) so Patrick can refine the copy
 * without touching layout. Voice: professional-first, confident,
 * first-principles; the bitcoiner/hacker note is present but quiet.
 */

/** Short, credible facts surfaced as pill badges alongside the bio. */
export const facts: { label: string; variant?: 'green' | 'neutral' }[] = [
  { label: '500k+ daily active users' },
  { label: 'Kubernetes / GCP migration' },
  { label: 'Logical-replication warehouse' },
  { label: 'Aerospace · Agriculture · Finance', variant: 'neutral' },
];

/**
 * Bio — the arc from building crypto startups to scaling a 500k-user platform,
 * now founder & CTO at Chipcolate. 2–3 short paragraphs.
 */
export const bio: string[] = [
  "My path started in the trenches of early-stage startups — crypto exchanges, marketplaces, and a couple of ventures of my own — where I sat on founding teams and learned to build from first principles under real constraints. Fast feedback, no safety nets, and a healthy respect for what actually survives contact with users.",
  "At Toggl I grew from backend engineer to Head of Engineering, owning the technical strategy for a suite of products serving 500k+ daily active users. My team migrated the entire infrastructure to Kubernetes on GCP and built an in-house data warehouse on top of Postgres logical replication — infrastructure designed to scale horizontally and stay boring under load.",
  "Today I'm Co-Founder & CTO at Chipcolate, where we take on hard engineering across aerospace, agriculture, and finance. I'm a father, a long-time bitcoiner, and someone who would rather reason a problem down to its fundamentals than inherit someone else's assumptions.",
];

/** A numbered "how I work" principle: green index, glow subhead, body copy. */
export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: 'Reason from fundamentals',
    body: "Most 'best practices' are someone else's constraints, frozen in time. I strip a problem down to what is actually true — the physics, the economics, the failure modes — and rebuild from there. Slower to start, far cheaper to live with.",
  },
  {
    title: 'Build to stay boring',
    body: 'The best infrastructure is the kind you stop thinking about. I optimize for systems that scale horizontally, fail predictably, and never demand heroics at 3am. Boring, under load, is a feature.',
  },
  {
    title: 'Lead the people, not just the code',
    body: 'Systems scale when the teams behind them do. I care as much about clarity, ownership, and honest feedback as I do about architecture — a strong engineering culture outlasts any single design.',
  },
  {
    title: 'Ship, measure, stay honest',
    body: 'Opinions are cheap; production is the only source of truth. I ship early, watch what real users and real load do, and let the evidence — not ego — decide what happens next.',
  },
];

/** A "work with me" track shown as a card. */
export interface WorkTrack {
  kicker: string;
  title: string;
  body: string;
  cta: { label: string; href: string; external?: boolean };
}

export const workTracks: WorkTrack[] = [
  {
    kicker: 'advise & invest',
    title: 'Early-stage founders',
    body: "I advise and angel-invest in early-stage teams, usually where deep technical bets, scaling, or a first-principles rethink are on the table. If you are building something hard, I like being in the room early.",
    cta: { label: "Let's talk", href: '/contact' },
  },
  {
    kicker: 'build',
    title: 'Serious build work',
    body: "When the work is a real engineering engagement — complex systems across embedded, cloud, aerospace, agriculture, or finance — it routes to my company, Chipcolate, where the team and I take it on properly.",
    cta: { label: 'Visit Chipcolate', href: 'https://chipcolate.com', external: true },
  },
];
