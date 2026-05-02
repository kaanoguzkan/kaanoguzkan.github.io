// All site content lifted from your i18n/en.json
window.SITE_DATA = {
  hero: {
    name: "S. Kaan Oguzkan",
    location: "Ankara, Turkey",
    typingPhrases: [
      "Full-Stack Developer",
      "DevOps Enthusiast",
      "Problem Solver",
      "Software Engineer",
    ],
  },
  about: {
    paragraphs: [
      `I'm a Computer Science student at <strong>Bilkent University</strong> with hands-on experience building full-stack web applications. I enjoy designing backend systems that are reliable, performant, and easy to maintain.`,
      `Currently working as a Software Engineer at <strong>Look & Cash</strong>, building full-stack & devops solutions using React, TypeScript, JavaScript, MongoDB and AWS.`,
    ],
    location: "Ankara, Turkey",
    languages: "Turkish (Native), English (Full Professional)",
    education: [
      {
        school: "Bilkent University",
        degree: "B.S. Computer Science",
        period: "Sep 2023 – Jun 2027",
        detail: "Activity: Formula Bilkent",
      },
      {
        school: "Meram Fen Lisesi",
        degree: "High School Diploma",
        period: "Sep 2019 – Jun 2023",
        detail: "GPA: 97.3/100 — Established the school's MUN branch",
      },
    ],
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Look & Cash",
      city: "Ankara, Turkey",
      date: "Feb 2025 – Present",
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "React Native"],
      bullets: [
        {
          head: "Ticket-Based Support System",
          desc: "Built a ticket workflow for web/mobile with priority, comments, attachments, and statuses. Shipped 13 REST endpoints, 4 ticket states, and 5 admin actions.",
          metrics: ["−25% admin handling time", "13 REST endpoints"],
        },
        {
          head: "Real-Time Mobile Support Chat",
          desc: "Implemented real-time ticket chat on mobile with backend persistence and state sync.",
          metrics: ["300 ms p95 delivery", "99.5% delivery rate", "150 concurrent sessions"],
        },
        {
          head: "Reporting & Graph Generation",
          desc: "Built KPI reporting APIs over MongoDB with date-range and campaign filters. Generated 14 dashboard datasets powering 4 chart types.",
          metrics: ["6.2s → 1.9s report time", "14 datasets"],
        },
        {
          head: "Admin Landing Page Dashboard",
          desc: "Built an admin dashboard showing 12 KPIs with a sidebar linking to 9 admin pages.",
          metrics: ["5 → 2 clicks", "12 KPIs surfaced"],
        },
      ],
    },
  ],
  projects: [
    {
      online: true,
      name: "Artifactum",
      label: "CS319 — Software Engineering Project",
      description:
        "Owned artifact ingestion and LLM features for a MERN application. Integrated Gemini for artifact generation/analysis with 6 prompt workflows and 1% LLM-call failure rate.",
      detailed:
        "Led the design and implementation of the artifact ingestion pipeline and all LLM-powered features for Artifactum, a full-stack MERN application built as part of CS319 Software Engineering. The platform allows users to upload, manage, and analyze artifacts using AI. Integrated Google Gemini for artifact generation and analysis across 6 distinct prompt workflows, achieving a 1% LLM-call failure rate. Built a robust S3-based file upload system supporting multi-file and ZIP bulk uploads of up to 50 MB / 200 files per batch.",
      highlights: [
        "6 prompt workflows with Gemini API integration",
        "1% LLM-call failure rate in production",
        "S3 multi-file and ZIP bulk uploads (50 MB / 200 files)",
        "p95 query latency reduced from 420 ms to 90 ms",
        "8 MongoDB indexes designed for optimal performance",
      ],
      tags: ["Node.js", "Express", "TypeScript", "MongoDB", "AWS S3", "Gemini API"],
      github: "",
      linkText:
        "Private due to university policies — reach out to see it.",
      year: "2025",
    },
    {
      online: false,
      name: "Immune Wars",
      label: "CS102 — Intro to Programming II",
      description:
        "Educational game about the immune system. Graph-based body model where players defend against pathogens using immune cells.",
      detailed:
        "Immune Wars is an educational game about the human immune system, built as a semester-long group project for CS102. Features a graph-based body model where players strategically deploy immune cells to defend against various pathogens. Designed core mechanics including pathogen AI behavior, immune cell interactions, and visual feedback systems.",
      highlights: [
        "Graph-based body model with realistic pathogen spread",
        "Pathogen AI with adaptive difficulty",
        "Multiple immune cell types with unique abilities",
        "Visual feedback systems for player actions",
        "Educational content integrated into gameplay",
      ],
      tags: ["Java", "OOP", "Game Development", "Graph Data Structures"],
      github: "https://github.com/kaanoguzkan/CS102-ImmuneWars",
      linkText: "View on GitHub",
      year: "2024",
    },
    {
      online: true,
      name: "NutriApp",
      label: "Amazon University Engagement Program",
      description:
        "Built backend services for a meal-planning app. Implemented 16 serverless REST endpoints on AWS Lambda with p95 latency of 450 ms. Won People's Choice Award — 1 of 7 teams.",
      detailed:
        "NutriApp is a meal-planning application built during the Amazon University Engagement Program. Responsible for the entire backend architecture: 16 serverless REST endpoints on AWS Lambda with DynamoDB. The APIs handle authentication, meal plan generation, nutritional analysis, and dietary preference management. Team won People's Choice Award, ranking first among 7 competing teams.",
      highlights: [
        "16 serverless REST API endpoints on AWS Lambda",
        "p95 latency of 450 ms across all endpoints",
        "People's Choice Award — 1st of 7 teams",
        "DynamoDB-backed data persistence",
        "Serverless architecture for zero-maintenance scaling",
      ],
      tags: ["Node.js", "AWS Lambda", "DynamoDB", "REST"],
      github: "https://github.com/arcmrt/NutriTech",
      linkText: "View on GitHub",
      year: "2024",
    },
  ],
  skills: [
    { name: "Languages", items: ["C++", "Java", "JavaScript", "TypeScript"] },
    { name: "Frontend", items: ["React.js", "React Native", "HTML/CSS"] },
    { name: "Backend", items: ["Node.js", "Express", "AWS Lambda", "AWS"] },
    { name: "Databases", items: ["MongoDB", "DynamoDB"] },
    { name: "Tools & Practices", items: ["Git", "GitHub", "OOP", "Software Design", "Project Management"] },
    { name: "Other", items: ["Game Development", "DevOps"] },
  ],
  volunteering: [
    {
      role: "Advisory Board President",
      org: "Formula Bilkent",
      date: "Sep 2024 – Present",
      desc: "Leading the advisory board and guiding strategic direction of the Formula Student team.",
    },
    {
      role: "Editor in Chief",
      org: "Mercek Dergi",
      date: "Jul 2024 – Apr 2025",
      desc: "Led editorial team and managed publication of the university magazine.",
    },
    {
      role: "Founding Member",
      org: "Bilkent Data Science and Analytics Society",
      date: "May 2024 – Feb 2025",
      desc: "Organized a 6-part Data Science workshop series for the university community.",
    },
    {
      role: "Board Member",
      org: "Formula Bilkent",
      date: "Sep 2023 – Sep 2024",
      desc: "Organized 20+ events and contributed to team operations and outreach.",
    },
    {
      role: "Active Member",
      org: "IEEE Bilkent",
      date: "Sep 2023 – Jul 2024",
      desc: "Organized career summit and Mercedes Career Talks events.",
    },
  ],
  academics: {
    orcid: "0009-0000-3272-7333",
    orcidUrl: "https://orcid.org/0009-0000-3272-7333",
    scholarUrl: "https://scholar.google.com.tr/citations?user=923Fx2MAAAAJ&hl=tr",
  },
  contact: {
    email: "kaan@oguzkan.com",
    github: "https://github.com/kaanoguzkan",
    linkedin: "https://linkedin.com/in/kaan-oguzkan",
    orcid: "https://orcid.org/0009-0000-3272-7333",
    scholar: "https://scholar.google.com.tr/citations?user=923Fx2MAAAAJ",
  },
};
