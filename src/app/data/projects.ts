import { Project } from "../types/dataTypes";

export const projects: Project[] = [
  {
    title: "Mini-Commerce",
    description:
      "Next.js e-commerce prototype with persistent cart, TypeScript validation, and SEO optimization. Features product browsing, checkout flow, and responsive design.",
    image: "/assets/images/mini-commerce.png",
    alt: "Mini-Commerce product page screenshot",
    links: {
      live: "https://mini-commerce-liart.vercel.app/",
      github: "https://github.com/A-n-u-O/mini-commerce",
    },
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    title: "Expense Tracker Dashboard",
    description:
      "A responsive financial dashboard built with Next.js, Zustand, Tailwind CSS, and Chart.js. It allows users to track income and expenses, view real-time summaries, and visualize their spending by category using dynamic charts.",
    image: "/assets/images/expense.png",
    alt: "Expense Tracker Dashboard app",
    links: {
      live: "https://expense-tracker-dashboard-brown.vercel.app/",
      github: "https://github.com/A-n-u-O/expense-tracker-dashboard",
    },
    tech: ["Next.js", "Zustand", "Tailwind CSS", "Chart.js"],
  },
  {
    title: "Auth App",
    description:
      "A full-stack authentication system with login, registration, and protected dashboard.",
    image: "/assets/images/auth-app.png",
    alt: "Auth app",
    links: {
      github: "https://github.com/A-n-u-O/Authentication-with-PERN-stack",
    },
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Social App Project",
    description:
      "A social media platform with user authentication and real-time updates.",
    image: "/assets/images/social.png",
    alt: "Social app",
    links: {
      live: "https://social-media-blue-theta.vercel.app/",
      github: "https://github.com/A-n-u-O/social-app",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Mantine UI"],
  },
  {
    title: "HR Management System",
    description:
      "Feature-rich HRMS dashboard with role-based access, attendance, and payroll integration.",
    image: "/assets/images/hr.png",
    alt: "HR management system",
    links: {
      live: "https://hrms-wine.vercel.app/",
      github: "https://github.com/A-n-u-O/hrms",
    },
    tech: ["React", "TypeScript", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Todo App",
    description:
      "A drag-and-drop to-do list with task filtering and clean UI (Frontend Mentor).",
    image: "/assets/images/todo.png",
    alt: "Todo app",
    links: {
      live: "https://todoapp-react-teal.vercel.app/",
      github: "https://github.com/A-n-u-O/todo-app",
    },
    tech: ["React", "Vite", "HTML", "CSS"],
  },
  {
    title: "Attendance Logging App",
    description:
      "Efficient app for monitoring and analyzing attendance with a user-friendly interface.",
    image: "/assets/images/attendance.png",
    alt: "Attendance app",
    links: {
      live: "https://attendance-logging-app.vercel.app/",
      github: "https://github.com/A-n-u-O/attendance-logging-app",
    },
    tech: ["JavaScript"],
  },
  {
    title: "E-commerce Product Page",
    description:
      "Interactive product display with dynamic preview and cart features.",
    image: "/assets/images/product.png",
    alt: "E-commerce product page",
    links: {
      live: "https://e-commerce-page-two-tau.vercel.app/",
      github: "https://github.com/A-n-u-O/ecommerce-product-page",
    },
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "First Portfolio",
    description:
      "My first personal portfolio to showcase my skills and projects.",
    image: "/assets/images/old-portfolio.png",
    alt: "Portfolio Project",
    links: {
      live: "https://a-n-u-o-github-io.vercel.app/",
      github: "https://github.com/A-n-u-O/A-n-u-O.github.io",
    },
    tech: ["HTML", "CSS", "JavaScript"],
  },
];
