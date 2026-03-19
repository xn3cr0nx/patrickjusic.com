const experiences = [
  {
    title: "Head of Engineering",
    company: "Toggl",
    companyUrl: "http://toggl.com",
    period: "2020 - Present",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Initially joined the Backend Core team as Software Engineer, I focused
          on API code design and scalability.
        </p>
        <p>
          Almost two years later, I took over leadership of the Backend Core and
          kept focusing on scalability, fostering initiatives like{" "}
          <a
            href="https://engineering.toggl.com/blog/journey-into-postgresql-logical-replication/index.html"
            className="font-bold text-orange-500 underline"
          >
            in-house warehouse using logical replication
          </a>
          .
        </p>
        <p>
          About 1.5 year later, I joined the management team, leading the
          department as <b>Head of Engineering</b>. I am in charge of the
          technical strategy, enabling the future of the Toggl Suite of
          products, allowing horizontally scalable and reusable pieces of
          infrastructure that allow us to support an increasing amount of users
          while expanding the set of functionalities and domains covered by our
          Suite.
        </p>
        <p>
          During my leadership, the entire infrastructure was migrated to
          Kubernetes in GCP, serving 500k+ daily active users. The engineering
          department published the{" "}
          <a
            href="https://engineering.toggl.com"
            className="font-bold text-orange-500 underline"
          >
            engineering website
          </a>{" "}
          where we published about our projects and innovations, where I
          published myself about outages and challenges managing our API. A lot
          has been achieved and I am really proud about my contribution to the
          growth of the company.
        </p>
      </div>
    ),
  },
  {
    title: "Co-Founder & CTO",
    company: "Chipcolate",
    companyUrl: "https://chipcolate.com",
    period: "2019 - Present",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Chipcolate is a startup that over time worked on multiple projects
          spanning across embedded systems, cloud platforms, prototyping and 3D
          printing. This knowledge, covering the full technology spectrum,
          output of the combined background of the founders, allowed us to
          deliver complex engineering projects in fields like agriculture,
          aerospace and finance.
        </p>

        <p>
          Some of our customers include:{" "}
          <a
            href="https://www.agrorobotica.it/"
            className="font-bold text-orange-500 underline"
          >
            Agrorobotica
          </a>
          ,{" "}
          <a
            href="https://ewibe.com/it/"
            className="font-bold text-orange-500 underline"
          >
            eWibe
          </a>
          ,{" "}
          <a
            href="https://www.adpmdrones.com/"
            className="font-bold text-orange-500 underline"
          >
            ADPM Drones
          </a>
          ,{" "}
          <a
            href="https://www.telespazio.com/it/home"
            className="font-bold text-orange-500 underline"
          >
            Telespazio
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: "DAO Lead",
    company: "Poseidon DAO",
    companyUrl: "https://www.poseidondao.org/",
    period: "Jan 2022 - May 2023",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          I was the coordinator in charge of the launch of the Poseidon DAO, a
          DAO focused on digital art collecting and promotion.
        </p>
        <p>
          I led a small team that successfully launched an NFT collection and
          the audited PDN token.
        </p>
        <p>
          The effort stopped due to the averse market conditions and the
          struggles in the NFTs adoption.
        </p>
      </div>
    ),
  },
  {
    title: "Co-Founder & CTO",
    company: "Elysium Bridge",
    companyUrl:
      "https://news.bitcoin.com/when-lambo-elysium-bridge-ferruccio-lamborghini-museum-to-launch-nft-collection",
    period: "Apr 2021 - Sep 2021",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          NFT Marketplace born with the goal of tokenization of pieces of
          history. We launched our first auction with the Lamborghini family
          bringing pieces from the Ferruccio Lamborghini Museum.
        </p>
        <p>
          The company stopped the activities after the first event, due to the
          initial investment and results not matching the expectations.
        </p>
      </div>
    ),
  },
  {
    title: "Software Engineer",
    company: "Leroy Merlin",
    companyUrl: "https://www.leroymerlin.it/",
    period: "Sep 2020 - Sep 2020",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          I spent a month as consultant, before luckily joining Toggl. Did not
          learn much there, but learned a lot about consultancies manpower and
          enterprises, in particular the inefficiency and how many companies
          live exploiting such inefficiencies. I am grateful it did not last
          long.
        </p>
      </div>
    ),
  },
  {
    title: "Software Engineer",
    company: "BQTX",
    companyUrl: "https://bqt.io/",
    period: "May 2019 - Dec 2019",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Back then BQT was a crypto-currencies exchange. My first experience as
          solo freelance. The team was in charge of developing the exchange
          platform from the ground up. I worked as full-stack developer, using
          Go + PostgreSQL on the backend, and React on the frontend.
        </p>
      </div>
    ),
  },
  {
    title: "Software Engineer",
    company: "Things Lab",
    companyUrl: "https://www.linkedin.com/company/thingslabtechnology",
    period: "Jan 2019 - May 2019",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Company focusing on blockchain development, based on IOTA platform.
          Main focus on supply chain tracking and digital twin.
        </p>
      </div>
    ),
  },
  {
    title: "Software Engineer",
    company: "Buull Exchange",
    companyUrl: "https://www.linkedin.com/company/buullexchange",
    period: "May 2018 - Dec 2018",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Startup building the first Italian-incorporated crypto-currencies
          exchange. Unfortunately regulation killed it kind of fast. I worked as
          full-stack developer, mostly using Node and React.
        </p>
        <p>The time I was actually orange-pilled, thanks Enrico.</p>
      </div>
    ),
  },
  {
    title: "Software Engineer",
    company: "Snapup",
    companyUrl: "",
    period: "Apr 2017 - Apr 2018",
    content: (
      <div className="flex flex-col gap-2">
        <p>
          Crypto-currencies based auction platform. I was part of the founding
          team, where I mostly learned full-stack development, working with
          Node, React and MySQL, Docker and Kubernetes for the infrastructure
          (nostalgics will remember when Kubeadm and Kubespray were the only
          ways to deploy a cluster).
        </p>
      </div>
    ),
  },
];

export default experiences;
