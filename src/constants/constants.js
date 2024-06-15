export const linkedinURL = "https://www.linkedin.com/in/yeung-alan-27017p";

export const githubURL = "https://github.com/alanyeung95";

export const workExps = [
  {
    id: 0,
    company: "Mindlayer Limited",
    title: "Senior Full Stack Developer / Lead Developer",
    description: [
      "Developed and enhanced features, automated tests, managed deployments, and troubleshooted client issues.",
      "Collaborated on system design, data flow, and deployment strategies with in-house developers across multiple technical departments.",
      "Established code standards, improved existing code quality and enhanced documentation.",
      "Provided training/technical consultations and assigned tasks to new engineers.",
      "Conducted code review & remove technical debts, and refactored code for optimization.",
    ],
    startDate: "Feb 2022",
    endDate: "Aug 2023",
  },
  {
    id: 1,
    company: "South China Morning Post Publishers Limited",
    title: "Software Engineer",
    description: [
      "Participated in user story analysis, software design & development, and launching of new projects for both internal and external users.",
      "Assisted with the data migration to the new system before and after the launch.",
      "Troubleshooting & features enhancement in product post-launch stage.",
      "Database and service optimization & Removing technical debts.",
      "Set up new environments and deployment jobs in k8s clusters.",
      "Client-facing demonstration and question answering.",
    ],
    startDate: "Dec 2018",
    endDate: "Feb 2022",
  },
  {
    id: 2,
    company: "Onwards Media Group Limited",
    title: "Software Engineer",
    description: [
      "Worked as a full-stack developer with agile software development. Received tasks from sprint planning. Implemented the features through development.",
      "Auto-deployment with continuous integration (CI) platforms and test automation.",
      "Designed testing cases and developed test automation scripts to verify software API using node mocha & chai framework.",
      "Participated in the development of video management systems and added facial recognition as plugin into the existing video processing product.",
      "Provided ID card information extraction service with optical character recognition technology.",
    ],
    startDate: "June 2017",
    endDate: "Nov 2018",
  },
  {
    id: 3,
    company: "Government of Hong Kong, HKSAR Marine Department",
    title: "Summer Intern",
    description: [
      "Collected and analyzed user requirements and reported to Marine Officer.",
      "Designed, developed, and maintained a staff roster software and a mini CMS.",
    ],
    startDate: "June 2016",
    endDate: "Aug 2016",
  },
  {
    id: 4,
    company: "Hong Kong Economic Times",
    title: "Part-time Computer Operator",
    description: [
      "Designed and developed small/medium programs by using VB.NET.",
      "Managed CMS and financial data management systems.",
    ],
    startDate: "2014",
    endDate: "2016",
  },
];

export const projects = [
  {
    title: "Banking Ledger System",
    description:
      "The Banking Ledger System is a robust project designed for a coding challenge. It supports basic banking operations like account creation, transactions, and balance checks, and is enhanced with dockerization for both the API and MongoDB services. The system is designed to handle atomic operations and includes both positive and negative test cases. It simplifies operations with a Makefile.",
    image: "/images/banking-ledger-system.png",
    tags: ["Golang", "Docker", "MongoDB", "Finance", "Swagger", "Unit Test"],
    source: "https://github.com/alanyeung95/banking-ledger-system",
    visit: "https://youtu.be/1J2_9MB0beg",
    id: 0,
  },
  {
    title: "SCMP-Jarvis: Mobile Assistant for News Browsing",
    description:
      "SCMP-Jarvis is a mobile assistant designed to enhance news browsing experiences. It supports audio playback of digital news, voice navigation commands, and offers text versions of news content. Initially created as a one-man project for an SCMP internal hackathon, it aims to improve upon the existing SCMP app functionality.",
    image: "/images/scmp-jarvis.png",
    tags: [
      "Mobile Assistant",
      "News Browsing",
      "Audio News",
      "Voice Navigation",
      "Hackathon Project",
    ],
    source: "https://github.com/alanyeung95/scmp-jarvis",
    visit: "https://youtu.be/C8T_X1L11NU",
    id: 1,
  },
  {
    title: "Mindlayer Chatbot Platform",
    description:
      "Mindlayer CBP is a sophisticated multilingual chatbot platform that enhances customer service by offering advanced NLP capabilities in over 15 languages, including Cantonese and English. It seamlessly integrates with major messaging platforms, allows for custom project creation, data processing, and chatbot training with user-defined intents and dialog flows. This platform ensures a frictionless customer interaction experience across digital channels.",
    image: "/images/mindlayer-cbp.png",
    tags: [
      "NLP",
      "Chatbot",
      "NodeJS",
      "ReactJS",
      "MongoDB",
      "K8s",
      "TensorFlow-Serving",
      "Whatsapp",
    ],
    source: "",
    visit: "https://www.mindlayer.io/chatbot",
    id: 2,
  },

  {
    title: "Web3 Charity Lottery Platform",
    description:
      "The Web3 Charity Lottery Platform leverages blockchain technology to enhance charitable giving. This platform reduces transaction fees, promotes Web3 adoption, and incentivizes philanthropy through lottery participation. It aims to provide a transparent, efficient donation system, enhancing user engagement in philanthropy while mastering Solidity and the Web3 ecosystem.",
    image: "/images/web3-charity.png",
    tags: [
      "Blockchain",
      "Web3",
      "Solidity",
      "NFT",
      "Crypto",
      "Oracle",
      "IPFS",
      "React.js",
    ],
    source: "https://github.com/alanyeung95/web3-charity-platform",
    visit: "",
    id: 3,
  },
  {
    title: "SCMP Compass",
    description:
      "SCMP Compass is a comprehensive digital platform that archives over 2.4 million photos and videos, 2.2 million articles, 106,000 infographics, and 600,000 pages from the South China Morning Post Historical Archives dating back to 1903. It serves as an invaluable resource for research and education, particularly in studying the development of Hong Kong and China. The platform supports detailed searches of articles, advertisements, and market listings, accessible both individually and in their original full-page publication format.",
    image: "/images/scmp-compass.png",
    tags: ["Go", "Vue.js", "MongoDB", "ProgresSQL", "K8s", "RibbitMQ"],
    source: "",
    visit: "https://www.youtube.com/watch?v=VjDEYoDsds0",
    id: 4,
  },
  {
    title: "Dev GPTeam: Transforming Ideas into Software",
    description:
      "Dev GPTeam is a command-line tool designed to streamline software development. It uses GPT models to refine requirements, generate source code, perform quality checks, and validate code through a simple interface. Features include interaction simulations for requirement refinement, code generation, and quality assurance, plus a checkpoint system for flexible workflow management.",
    image: "/images/dev-gpteam.png",
    tags: [
      "NLP",
      "GPT-4",
      "Software Development",
      "Code Generation",
      "Project Management",
    ],
    source: "https://github.com/alanyeung95/dev-gpteam",
    visit: "",
    id: 5,
  },
];

export const TimeLineData = [
  {
    year: 2013,
    month: "Sept",
    text: "Started Computer Science (BSc) at The Hong Kong Polytechnic University",
  },
  {
    year: 2014,
    month: "May",
    text: "Began working as an intern at Hong Kong Economic Times",
  },
  {
    year: 2017,
    month: "Aug",
    text: "Joined Onwards Media Limited as a Software Engineer",
  },
  {
    year: 2018,
    month: "Dec",
    text: "Joined South China Morning Post Publishers Limited as a Software Engineer",
  },
  {
    year: 2022,
    month: "Feb",
    text: "Promoted to Senior Full Stack Developer / Lead Developer at Mindlayer Limited",
  },
  {
    year: 2023,
    month: "Sept",
    text: "Began Master of Engineering in Analytics at the University of Toronto",
  },
];
