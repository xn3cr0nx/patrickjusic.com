/**
 * Track-record data for the /work timeline.
 *
 * Most-recent first. `roles` are the primary entries drawn on the timeline
 * (the earliest is a single grouped entry covering 2017–2019). `earlyRoles`
 * are the individual roles surfaced by the "full history & earlier roles"
 * expansion — the breakdown of the grouped era, plus Leroy Merlin.
 *
 * Timeline.astro renders from these arrays, so editing copy/links here is all
 * that's needed to update the page.
 */

export type BadgeVariant = 'green' | 'neutral';

export interface RoleBadge {
  label: string;
  variant: BadgeVariant;
}

export interface Role {
  /** Job title, e.g. "Head of Engineering". */
  title: string;
  /** Company (or, for the grouped entry, a "·"-joined list of companies). */
  company: string;
  /** Link to the company / reference. Empty string = render as plain text. */
  companyUrl: string;
  /** Human period label, mono-rendered on the left rail. */
  period: string;
  /** One- or two-sentence description. */
  description: string;
  /** Optional metric / fact pills. */
  badges?: RoleBadge[];
  /**
   * True for the single summary entry that stands in for several early roles.
   * Renders the company list in the smaller muted "sm" style.
   */
  group?: boolean;
}

/** Primary timeline, most-recent first. Last entry groups the early roles. */
export const roles: Role[] = [
  {
    title: 'Co-Founder & CTO',
    company: 'Chipcolate',
    companyUrl: 'https://chipcolate.com',
    period: '2019 — Present',
    description:
      'Engineering across the full stack — embedded systems, cloud platforms, prototyping and 3D printing — delivering complex projects in agriculture, aerospace and finance.',
    badges: [
      { label: 'Aerospace', variant: 'green' },
      { label: 'Agriculture', variant: 'green' },
      { label: 'Finance', variant: 'green' },
      {
        label: 'Telespazio · Agrorobotica · ADPM Drones',
        variant: 'neutral',
      },
    ],
  },
  {
    title: 'Head of Engineering',
    company: 'Toggl',
    companyUrl: 'https://toggl.com',
    period: 'Oct 2020 — Mar 2025',
    description:
      'Joined Backend Core as an engineer, took over the team, then led the department as Head of Engineering — owning the technical strategy for the entire Toggl Suite.',
    badges: [
      { label: '500k+ daily users', variant: 'green' },
      { label: 'Migrated to Kubernetes / GCP', variant: 'green' },
      { label: 'Logical-replication warehouse', variant: 'green' },
    ],
  },
  {
    title: 'DAO Lead',
    company: 'Poseidon DAO',
    companyUrl: 'https://www.poseidondao.org/',
    period: 'Jan 2022 — May 2023',
    description:
      'Coordinated the launch of a DAO for digital-art collecting — shipped an NFT collection and the audited PDN token with a small team.',
  },
  {
    title: 'Co-Founder & CTO',
    company: 'Elysium Bridge',
    companyUrl:
      'https://news.bitcoin.com/when-lambo-elysium-bridge-ferruccio-lamborghini-museum-to-launch-nft-collection',
    period: 'Apr 2021 — Sep 2021',
    description:
      'NFT marketplace tokenizing pieces of history — launched the first auction with the Lamborghini family, bringing works from the Ferruccio Lamborghini Museum.',
  },
  {
    title: 'Software Engineer',
    company: 'BQTX · Things Lab · Buull · Snapup',
    companyUrl: '',
    period: '2017 — 2019',
    group: true,
    description:
      'Where it started — building crypto exchanges and blockchain platforms from the ground up. Go, Node, React, PostgreSQL, and Kubernetes back when Kubeadm was the only way to ship a cluster.',
  },
];

/**
 * The individual early roles, most-recent first — revealed by the
 * "full history & earlier roles" control. This is the breakdown of the
 * grouped 2017–2019 entry, plus the month at Leroy Merlin.
 */
export const earlyRoles: Role[] = [
  {
    title: 'Software Engineer',
    company: 'Leroy Merlin',
    companyUrl: 'https://www.leroymerlin.it/',
    period: 'Sep 2020',
    description:
      'A month as a consultant before joining Toggl — a short, clarifying look at enterprise consultancy and the inefficiencies it runs on.',
  },
  {
    title: 'Software Engineer',
    company: 'BQTX',
    companyUrl: 'https://bqt.io/',
    period: 'May 2019 — Dec 2019',
    description:
      'My first solo freelance work — building a crypto-currency exchange platform from the ground up. Go + PostgreSQL on the backend, React on the front.',
  },
  {
    title: 'Software Engineer',
    company: 'Things Lab',
    companyUrl: 'https://www.linkedin.com/company/thingslabtechnology',
    period: 'Jan 2019 — May 2019',
    description:
      'Blockchain development on the IOTA platform — supply-chain tracking and digital twins.',
  },
  {
    title: 'Software Engineer',
    company: 'Buull Exchange',
    companyUrl: 'https://www.linkedin.com/company/buullexchange',
    period: 'May 2018 — Dec 2018',
    description:
      'Building the first Italian-incorporated crypto exchange until regulation cut it short. Full-stack with Node and React — and where I was first orange-pilled.',
  },
  {
    title: 'Software Engineer',
    company: 'Snapup',
    companyUrl: '',
    period: 'Apr 2017 — Apr 2018',
    description:
      'Crypto-based auction platform, part of the founding team — full-stack with Node, React and MySQL, on Docker and Kubernetes back when Kubeadm and Kubespray were the only way to deploy a cluster.',
  },
];

export default roles;
