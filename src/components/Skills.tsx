import { toolkit } from "@/app/data/toolkit";
import type { IconType } from "react-icons";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Prisma ORM": SiPrisma,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Supabase: SiSupabase,
  Stripe: SiStripe,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Vercel: SiVercel,
  Postman: SiPostman,
  Jest: SiJest,
  "React Testing Library": SiTestinglibrary,
  "React Query": SiReactquery,
};

export default function Skills() {
  return (
    <section id="toolkit" className="border-t border-line bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_1fr]">
        <p className="label">04 / Toolkit</p>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {toolkit.map((group) => (
            <div key={group.category} className="border-t border-line pt-4">
              <h2 className="text-sm font-semibold text-accent">{group.category}</h2>
              <ul className="mt-4 flex max-w-xl flex-wrap gap-x-5 gap-y-3">
                {group.items.map((item) => {
                  const Icon = technologyIcons[item];
                  return (
                    <li key={item} className="flex items-center gap-2 text-lg leading-8 text-ink transition-colors hover:text-accent">
                      {Icon ? <Icon size={19} aria-hidden="true" className="shrink-0 text-muted" /> : null}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
