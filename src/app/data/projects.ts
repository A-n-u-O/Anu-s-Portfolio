import { Project } from "../types/dataTypes";

export const projects: Project[] = [
  {
    title: "Apex Merchant Ledger",
    description:
      "A real-time settlement dashboard built to help merchants track cashflow without delays or manual reconciliation. Integrated Paystack payment flows and implemented secure webhook handling to ensure accurate transaction updates, with Supabase RLS enforcing strict data isolation.",
    image: "/assets/images/apex.png",
    alt: "Apex Merchant Ledger Dashboard",
    links: {
      live: "https://merchant-dashboard-umber.vercel.app/",
      github: "https://github.com/A-n-u-O/merchant-dashboard",
    },
    tech: ["Next.js 15", "TypeScript", "Zustand", "Supabase", "Chart.js"],
    category: ["Full-Stack", "Fintech"],
    featured: true,
    priority: "featured",
    number: "01",
    slug: "apex-merchant-ledger",
    caseStudy: {
      overview: "A fintech settlement dashboard designed around transaction visibility and cash-flow tracking, combining payment activity with interactive financial analytics.",
      approach: "Built the application with Next.js 15 and TypeScript, using Zustand for client state, Supabase for persisted data and Row Level Security, Chart.js for interactive analytics, and Paystack for payment flows. Webhook-driven updates keep transaction activity reflected in the application.",
      highlights: [
        "Transaction and cash-flow tracking",
        "Paystack payment flows",
        "Webhook-driven updates",
        "Supabase Row Level Security",
        "Interactive analytics",
      ],
    },
  },
  {
    title: "FairPlay Content Registry API",
    description:
      "Built and documented a REST API for creator authentication and content registration with Argon2 password hashing, JWT-protected routes, PostgreSQL persistence, unique registration IDs, creator-scoped retrieval, resource-level authorization, validation, and structured error handling.",
    image: "/assets/images/fairplay-api.png",
    alt: "FairPlay Content Registry API project",
    imageFit: "contain",
    imagePosition: "center",
    links: {
      github: "https://github.com/A-n-u-O/fairplay-content-registry-api",
    },
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Argon2"],
    category: ["Backend", "API", "Authentication"],
    priority: "featured",
    number: "02",
    slug: "fairplay-content-registry-api",
    role: "Backend Developer",
    caseStudy: {
      overview: "A REST API built for a creator-content registration use case. Creators can create accounts, authenticate, register content and retrieve content associated with their own account.",
      problem: "The system needed to associate registered content with authenticated creators while preventing one creator from retrieving another creator's records.",
      approach: "Built with Node.js, Express.js, PostgreSQL and Prisma ORM. Authentication uses JWT and passwords are hashed with Argon2. Protected routes derive creator identity from the verified token rather than accepting ownership information from the client.",
      highlights: [
        "Creator registration and login",
        "Argon2 password hashing",
        "JWT authentication middleware",
        "PostgreSQL persistence",
        "User-to-Content relational model",
        "Unique public content registration IDs",
        "Creator-scoped content retrieval",
        "Resource-level ownership authorization",
        "Input validation",
        "Duplicate-email prevention",
        "Structured HTTP error responses",
        "Postman-tested API flows",
      ],
      challenges: [
        "Separating authentication from authorization",
        "Ensuring content ownership came from the authenticated JWT rather than a client-supplied userId",
        "Working with Prisma 8 RC's newer ORM querying API",
        "Handling Temporal support required by the Prisma runtime environment",
      ],
      outcome: "A documented and tested REST API supporting creator authentication, protected content registration and creator-scoped retrieval.",
    },
  },
  {
    title: "Lagos Driver Solutions Hub LTD",
    description:
      "A modern, professional website for a premium chauffeur and driver hire company in Lagos. Built with clean design, strong calls-to-action, and seamless WhatsApp integration to drive bookings. Transformed client mockups into a conversion-focused platform.",
    image: "/assets/images/drivers.png",
    alt: "Lagos Driver Solutions Hub Website",
    links: { live: "https://lagosdriversolutions.com" },
    tech: ["React", "Tailwind CSS", "React Router", "Formspree"],
    category: ["Frontend", "Web Development", "Client Project"],
    featured: true,
    priority: "featured",
    number: "03",
  },
  {
    title: "DecodeLabs Backend Development Projects",
    description:
      "A collection of backend projects demonstrating progressive API development—from Express REST fundamentals and PostgreSQL CRUD operations to JWT authentication and third-party API integration.",
    image: "/assets/images/decode-labs.png",
    alt: "Backend development project collection",
    links: { github: "https://github.com/A-n-u-O/decodelabs_tasks" },
    tech: ["Node.js", "Express.js", "JavaScript", "PostgreSQL", "Prisma ORM", "JWT", "Argon2", "Axios", "Postman"],
    category: ["Backend"],
    priority: "archive",
    number: "02",
  },
  {
    title: "Travo Africa",
    description:
      " An Infrastructure for intercity travel across Nigeria and Africa smarter, safer, and more transparent. By digitizing passenger records and movement data, we strengthen travel security, improve accountability, and create a more reliable mobility ecosystem.",
    image: "/assets/images/travo.png",
    alt: "Travo Africa Dashboard",
    links: {
      live: "https://travoafrica.com",
    },
    tech: ["Next.js 15", "TypeScript", "Zustand", "Supabase", "Chart.js"],
    category: ["Full-Stack", "Frontend"],
    priority: "archive",
  },
  {
    title: "Mini-Commerce",
    description:
      "An e-commerce prototype focused on improving cart reliability and user flow. Implemented persistent state management to prevent cart loss across sessions, while optimizing performance and SEO for a smooth shopping experience.",
    image: "/assets/images/miniCommerce.png",
    alt: "Mini-Commerce product page screenshot",
    links: {
      live: "https://mini-commerce-liart.vercel.app/",
      github: "https://github.com/A-n-u-O/mini-commerce",
    },
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    category: ["Frontend", "Web Development"],
    priority: "secondary",
    number: "04",
  },
  {
    title: "Expense Tracker Dashboard",
    description:
      "A financial dashboard designed to help users better understand their spending patterns. Built dynamic charts and real-time summaries, focusing on clear data visualization and responsive state management.",
    image: "/assets/images/expense.png",
    alt: "Expense Tracker Dashboard app",
    links: {
      live: "https://expense-tracker-dashboard-brown.vercel.app/",
      github: "https://github.com/A-n-u-O/expense-tracker-dashboard",
    },
    tech: ["Next.js", "Zustand", "Tailwind CSS", "Chart.js"],
    category: ["Frontend", "Web Development"],
    priority: "secondary",
    number: "05",
  },
  {
    title: "Auth App",
    description:
      "A full-stack authentication system built to handle secure user access and session management. Implemented protected routes and backend validation to ensure only authenticated users can access sensitive data.",
    image: "/assets/images/auth-app.png",
    alt: "Auth app",
    links: {
      github: "https://github.com/A-n-u-O/Authentication-with-PERN-stack",
    },
    tech: ["React", "Node.js", "PostgreSQL"],
    category: ["Full-Stack", "Web Development"],
    priority: "secondary",
    number: "06",
  },
  {
    title: "HR Management System",
    description:
      "A role-based HR dashboard built to simplify employee management workflows. Implemented structured UI for attendance tracking and payroll features, focusing on usability and scalable component design.",
    image: "/assets/images/hr.png",
    alt: "HR management system",
    links: {
      live: "https://hrms-wine.vercel.app/",
      github: "https://github.com/A-n-u-O/hrms",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
  {
    title: "Todo App",
    description:
      "A drag-and-drop task manager focused on improving task organization and usability. Implemented filtering and smooth interactions to enhance user experience.",
    image: "/assets/images/todo.png",
    alt: "Todo app",
    links: {
      live: "https://todoapp-react-teal.vercel.app/",
      github: "https://github.com/A-n-u-O/todo-app",
    },
    tech: ["React", "Vite", "HTML", "CSS"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
  {
    title: "E-commerce Product Page",
    description:
      "An interactive product page designed to improve product visualization and cart interaction. Focused on clean UI and responsive behavior.",
    image: "/assets/images/product.png",
    alt: "E-commerce product page",
    links: {
      live: "https://e-commerce-page-two-tau.vercel.app/",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
  {
    title: "Attendance Logging App",
    description:
      "A simple system for tracking and analyzing attendance records. Designed for clarity and ease of use with a focus on clean interaction flows.",
    image: "/assets/images/attendance.png",
    alt: "Attendance app",
    links: {
      live: "https://attendance-logging-app.vercel.app/",
    },
    tech: ["JavaScript"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
  {
    title: "Social App Project",
    description:
      "A social platform prototype with authentication and dynamic updates. Built to explore user interaction patterns and real-time UI behavior.",
    image: "/assets/images/social.png",
    alt: "Social app",
    links: {
      live: "https://social-media-blue-theta.vercel.app/",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Mantine UI"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
  {
    title: "First Portfolio",
    description:
      "My first portfolio project, where I explored responsive design and basic frontend structure while learning core web fundamentals.",
    image: "/assets/images/old-portfolio.png",
    alt: "Portfolio Project",
    links: {
      live: "https://a-n-u-o-github-io.vercel.app/",
      github: "https://github.com/A-n-u-O/A-n-u-O.github.io",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend", "Web Development"],
    priority: "archive",
  },
];
