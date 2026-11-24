import { ExperienceEntry } from "../types/dataTypes";

export const experience: ExperienceEntry[] = [
  {
    role: "Backend Development Intern",
    company: "Decode Labs",
    dates: "Aug 2026 – Sep 2026",
    location: "Remote",
    description: [
      "Developed backend applications with Node.js and Express.js using REST APIs, routing, middleware, request and response handling, and validation.",
      "Built PostgreSQL-backed CRUD and authentication APIs with Prisma, JWT authentication, password hashing, protected routes, and reusable middleware.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Olarvo Ltd — Contract",
    dates: "Jul 2026 – Present",
    location: "Remote",
    description: [
      "Develop React, Next.js and TypeScript features across storefront, scheduling and admin applications in a shared monorepo.",
      "Implemented Stripe Connect-aware payment flows across checkout, consultations and bookings, maintaining connected-account context through state and redirects.",
      "Extended scheduling interfaces with timezone-aware availability, staff and location selection, guest management and API-backed booking creation.",
      "Integrated referral-aware signup and subscription pricing APIs, mapping responses into typed, reusable components.",
      "Improved responsive interfaces, developed transactional email templates and debugged API, routing and frontend state issues.",
    ],
  },
  {
    role: "Technical Support Specialist",
    company: "OnePipe",
    dates: "Mar 2026 – Present",
    location: "Remote",
    description: [
      "Support merchant onboarding and technical/API integration requirements.",
      "Troubleshoot API and platform issues and document findings for resolution.",
      "Collaborate with engineering teams on technical investigations and integration requirements.",
    ],
  },
  {
    role: "Software Engineering Intern (Cortex 3.0)",
    company: "OnePipe",
    dates: "Nov 2025 – Feb 2026",
    location: "Remote",
    description: [
      "Contributed to Oxyhome, a team-built fintech installment-payment web application.",
      "Worked with PayWithAccount concepts including account linking, mandate authorization, recurring debit flows, webhooks and settlement states.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Travo Africa",
    dates: "Oct 2025 – Jan 2026",
    location: "Part-time, Remote",
    description: [
      "Implemented Leaflet-based location detection and interactive map functionality.",
      "Translated Figma designs into responsive production pages and reusable components.",
    ],
  },
];