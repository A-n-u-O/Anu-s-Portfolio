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
    category: ["FullStack", "Fintech"],
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
    category: ["FullStack", "Web Development"],
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
  },
  {
    title: "E-commerce Product Page",
    description:
      "An interactive product page designed to improve product visualization and cart interaction. Focused on clean UI and responsive behavior.",
    image: "/assets/images/product.png",
    alt: "E-commerce product page",
    links: {
      live: "https://e-commerce-page-two-tau.vercel.app/",
      github: "https://github.com/A-n-u-O/ecommerce-product-page",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    category: ["Frontend", "Web Development"],
  },
  {
    title: "Attendance Logging App",
    description:
      "A simple system for tracking and analyzing attendance records. Designed for clarity and ease of use with a focus on clean interaction flows.",
    image: "/assets/images/attendance.png",
    alt: "Attendance app",
    links: {
      live: "https://attendance-logging-app.vercel.app/",
      github: "https://github.com/A-n-u-O/attendance-logging-app",
    },
    tech: ["JavaScript"],
    category: ["Frontend", "Web Development"],
  },
  {
    title: "Social App Project",
    description:
      "A social platform prototype with authentication and dynamic updates. Built to explore user interaction patterns and real-time UI behavior.",
    image: "/assets/images/social.png",
    alt: "Social app",
    links: {
      live: "https://social-media-blue-theta.vercel.app/",
      github: "https://github.com/A-n-u-O/social-app",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Mantine UI"],
    category: ["Frontend", "Web Development"],
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
  },
];