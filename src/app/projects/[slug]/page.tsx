import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/app/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.filter((project) => project.slug).map((project) => ({ slug: project.slug as string }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project ? { title: `${project.title} | Anuoluwapo Victor` } : {};
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;

  return (
    <main className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <Link href="/#work" className="text-sm text-accent hover:text-ink">← Back to Selected Work</Link>
      </div>

      <article>
        <header className="border-y border-line bg-paper px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.35fr_1fr]">
            <p className="label">{project.number ?? "Project"} / {project.category.join(" / ")}</p>
            <div className="max-w-4xl">
              <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-7xl">{project.title}</h1>
              <p className="mt-8 max-w-3xl text-xl leading-8 text-muted">{caseStudy.overview ?? project.description}</p>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="border-b border-accent pb-1 text-accent hover:text-ink">Live Project</a>}
                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="border-b border-line pb-1 text-muted hover:border-accent hover:text-accent">View Code</a>}
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="relative aspect-[16/9] overflow-hidden bg-line">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              style={{ objectPosition: project.imagePosition }}
              className={project.imageFit === "contain" ? "object-contain p-3" : "object-cover"}
            />
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div className="space-y-6 text-sm text-muted">
              {project.role && <div><p className="label">Role</p><p className="mt-2 text-ink">{project.role}</p></div>}
              <div><p className="label">Tech Stack</p><p className="mt-2 leading-7 text-ink">{project.tech.join(" / ")}</p></div>
            </div>

            <div className="max-w-3xl space-y-12">
              {caseStudy.overview && <section><h2 className="font-serif text-3xl">Overview</h2><p className="mt-4 leading-8 text-muted">{caseStudy.overview}</p></section>}
              {caseStudy.problem && <section><h2 className="font-serif text-3xl">Problem</h2><p className="mt-4 leading-8 text-muted">{caseStudy.problem}</p></section>}
              {caseStudy.approach && <section><h2 className="font-serif text-3xl">Approach / What I Built</h2><p className="mt-4 leading-8 text-muted">{caseStudy.approach}</p></section>}
              {caseStudy.highlights && caseStudy.highlights.length > 0 && <section><h2 className="font-serif text-3xl">Engineering Highlights</h2><ul className="mt-4 space-y-3 leading-7 text-muted">{caseStudy.highlights.map((highlight) => <li key={highlight} className="before:mr-2 before:text-accent before:content-['—']">{highlight}</li>)}</ul></section>}
              {caseStudy.challenges && caseStudy.challenges.length > 0 && <section><h2 className="font-serif text-3xl">Challenges & Decisions</h2><ul className="mt-4 space-y-3 leading-7 text-muted">{caseStudy.challenges.map((challenge) => <li key={challenge} className="before:mr-2 before:text-accent before:content-['—']">{challenge}</li>)}</ul></section>}
              {caseStudy.outcome && <section><h2 className="font-serif text-3xl">Outcome</h2><p className="mt-4 leading-8 text-muted">{caseStudy.outcome}</p></section>}
            </div>
          </div>
        </div>
      </article>

      <nav aria-label="Project navigation" className="border-t border-line px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl justify-between gap-6 text-sm">
          <Link href="/#work" className="text-accent hover:text-ink">Back to Work</Link>
          <Link href="/#contact" className="text-muted hover:text-accent">Start a conversation</Link>
        </div>
      </nav>
    </main>
  );
}